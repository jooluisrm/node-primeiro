import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ produtos: [] });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.json({ id, name: "Teclado XYZ", price: 90 });
});

router.post("/", (req, res) => {
    res.status(201).json({id: 123, name: "Teclado 5555", price: 120.00});
});

export default router;