const readline = require("readline");
const { mkdir, readdirSync, writeFile, appendFile } = require("fs");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Challenge name: ", async(name) => {
    const length = readdirSync(__dirname).filter((f) => !f.includes(".")).length;
    await mkdir(`${__dirname}/Challenge ${length + 1}`, { }, (err) => {
        if(err) throw err;
    });

    await appendFile(`${__dirname}/Challenge ${length + 1}/main.js`, `/* Challenge: ${name} */`, (err) => {
        if(err) throw err;
    });

    await appendFile(`${__dirname}/Challenge ${length + 1}/README.md`, `# Challenge ${name}`, (err) => {
        if(err) throw err;
    });

    setTimeout(() => {
        input.close();
        process.exit();
    }, 1000);
});
