import { Strategy as LocalStrategy } from "passport-local";
import { createUserToken, findUserByEmailAndPassword } from "../services/user";
import { User } from "../types/user";

type LocalStrategyResponse = {
    auth: {
        token: string;
    },
    user: User;
}

export const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    console.log("email: ", email);
    console.log("password: ", password);

    const user = await findUserByEmailAndPassword(email, password);
    if (user) {
        const token = createUserToken(user);
        const response: LocalStrategyResponse = {
            auth: {
                token
            },
            user
        }
    } else {
        return done(null, false);
    }
});