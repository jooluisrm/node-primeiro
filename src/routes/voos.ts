import express from "express";

const router = express.Router();

router.get("/:from/:to", (req, res) => {

    const { from, to } = req.params;

    res.json({
        voo: {
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            price: 12345
        }
    });
});

export default router;