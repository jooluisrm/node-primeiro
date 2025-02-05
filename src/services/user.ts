import { User } from "../types/user";
import jwt from 'jsonwebtoken';

export const findUserByEmailAndPassword = async (email: string, password: string) => {
    if (email === 'joao@gmail.com' && password === '1234') {
        const user: User = {
            id: '2',
            name: 'Joao Luis'
        }
        return user;
    } 
    
    return null;
}

export const createUserToken = (user: User) => {
    return '1234';
}

export const createUserJWT = (user: User) => {
    const payload = {
        id: user.id
    }
    return jwt.sign(payload, process.env.JWT_KEY as string);
}

export const findUserByToken = async (token: string) => {
    if(token === '1234') {
        const user: User = {
            id: '2',
            name: 'Joao Luis'
        }
        return user;
    }
    return null;
}

export const findUserById = (id: string) => {
    if(id === '2') {
        const user: User = {
            id: '2',
            name: 'Joao Luis'
        }
        return user;
    }
    return null;
}