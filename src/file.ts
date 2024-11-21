import { writeFile } from "fs/promises";

const exec = async () => {
    console.log("Escrevendo no arquivo...");

    const list = ["Bonieky", "João", "Pedro"];
    const listTxt = list.join("\n");

    await writeFile("./teste.txt", listTxt);
    console.log("Pronto");
}

exec();