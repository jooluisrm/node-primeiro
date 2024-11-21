import { readFile, writeFile } from "fs/promises";

const exec = async () => {
    const FileContent = await readFile("./teste.txt", {encoding: 'utf-8'});
    
    const list = FileContent.split("/n");

    console.log(list);
}

exec();