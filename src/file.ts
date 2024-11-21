import { readFile, writeFile } from "fs/promises";

const exec = async () => {
    const fileName = "./teste.txt"
    const FileContent = await readFile(fileName, {encoding: 'utf-8'});
    
    const list = FileContent.split("\n");

    list.push("Fulano");

    const listText = list.join("\n");

    await writeFile("./teste.txt", listText);
}

exec();