const fs = require("fs");

const arg = process.argv.slice(2).toString();

const data = fs.readFileSync(`${__dirname}\\text.txt`, "utf-8");

const words = data.split(" ");

console.log(words.includes(arg));
