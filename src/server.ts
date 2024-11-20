import express from "express";
import helmet from "helmet";
import path from "path";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));


server.get("/ping", (req, res) => {
    res.json({ pong: true });
});

server.get("/produtos", (req, res) => {
    res.json({ produtos: [] });
});

server.get("/produtos/:id", (req, res) => {
    const { id } = req.params;

    res.json({ id, name: "Teclado XYZ", price: 90 });
});

server.get("/voos/:from/:to", (req, res) => {

    const { from, to } = req.params;

    res.json({
        voo: {
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            price: 12345
        }
    });
})

server.get('/', (req, res) => {
    let name = "João Luís";
    let idade = 19;
    res.json([{ name, idade }]);
});

server.listen(3000, () => {
    console.log("Servidor esta rodando no link: http://localhost:3000");
});