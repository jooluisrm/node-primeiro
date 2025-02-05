import express, { RequestHandler } from "express";
import produtosRouter from "./produtos";
import voosRouter from "./voos";
import { interferir } from "../middlewares/intervir";
import { localStrategyAuth } from "../libs/passport-local";
import { bearerStrategyAuth } from "../libs/passport-bearer";
import { jwtStrategyAuth } from "../libs/passport-jwt";

const router = express.Router();

//router.use(interferir);

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
    console.log("Executou o ping!");
    res.json({ pong: true });
});

router.get('/', (req, res) => {



    let name = "João Luís";
    let idade = 19;
    res.json([{ name, idade }]);
});




router.post('/login', localStrategyAuth, async (req, res) => {
    res.json({
        user: req.user,
        auth: req.authInfo
    });
});

router.get('/private', bearerStrategyAuth, (req, res) => {
    res.json({ msg: "Acessou" });
});

router.get('/privatejtw', jwtStrategyAuth, (req, res) => {
    res.json({ msg: "Acessou JWT" });
});


export default router;