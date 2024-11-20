import express  from "express";

const server = express();

server.get('/', (req, res) => {
    let name = "João Luís";
    let idade = 19;
    res.send(`Olá ${name} eu tenho ${idade} anos`);
});

server.listen(3000, () => {
    console.log("Servidor esta rodando no link: http://localhost:3000");
});