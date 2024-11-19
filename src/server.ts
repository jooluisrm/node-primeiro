import { createServer } from "node:http";

const server = createServer((req, res) => {
    let nome: string = "Joao Luis";
    let idade: number = 19;
    res.end(`Ola Mundo eu sou o ${nome} e tenho ${19} anos!`); 
});

server.listen(3000, () => {
    console.log("Servidor funcionando em http://localhost:3000");
});