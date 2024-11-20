import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.json({ pong: true });
});

router.get('/', (req, res) => {
    let name = "João Luís";
    let idade = 19;
    res.json([{ name, idade }]);
});

export default router;