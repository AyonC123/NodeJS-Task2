const fs = require("fs");

const arg = process.argv[2];

const data = fs.readFileSync(`${__dirname}\\text.txt`, "utf-8");

const words = data.split(" ");

console.log(words.includes(arg));
