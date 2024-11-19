let nome: string = "joao luis";
let idade: number = 19;
let token: string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`Meu nome e ${nome} e eu tenho ${idade} anos.`);
console.log(`Conectando no Drive com o token: ${token}`);