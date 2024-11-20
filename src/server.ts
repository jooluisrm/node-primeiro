import express  from "express";
import helmet from "helmet";
import path from "path";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../public')));


server.get('/', (req, res) => {
    let name = "João Luís";
    let idade = 19;
    res.json([{name, idade}]);
});

server.listen(3000, () => {
    console.log("Servidor esta rodando no link: http://localhost:3000");
});