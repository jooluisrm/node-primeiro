import express from "express";
import produtosRouter from "./produtos";
import voosRouter from "./voos";

const router = express.Router();

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    let name = "João Luís";
    let idade = 19;
    res.json([{ name, idade }]);
});

export default router;