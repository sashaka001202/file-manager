
import readline from 'readline';
import os from 'os';
import up from "./src/up.js";
import cd from "./src/cd.js";
import ls from "./src/ls.js";
import cat from "./src/cat.js";
import add from "./src/add.js";
import rn from "./src/rn.js";
import cp from "./src/cp.js";
import mv from "./src/mv.js";
import rm from "./src/rm.js";
import osModule from "./src/os.js";
import hash from "./src/hash.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

export function getDirName(metaUrl) {
    const __filename = fileURLToPath(metaUrl)
    return dirname(__filename)
}

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const username = process.argv[2].split('=')[1]
console.log(`Thank you for using File Manager, ${username}!`);


let fileDir = os.homedir();

export let __dirname = fileDir
console.log(`You are currently in ${__dirname}`);

readl.on("line", async (res) => {
    const [command, ...params] = res.split(' ');
    let promise;
    const error = "Invalid input";
    switch (command) {
        case "up":
            __dirname = up();
            promise = new Promise((resolve) => resolve());
            break;
        case "cd":
            __dirname = cd(...params);
            promise = new Promise((resolve) => resolve());
            break;
        case "ls":
            promise = ls();
            break;
        case "cat":
            promise = cat(...params);
            promise = new Promise((resolve) => resolve());
            break;
        case "add":
            promise = add(...params);
            promise = new Promise((resolve) => resolve());
        case "rn":
            promise = rn(...params);
            promise = new Promise((resolve) => resolve());
        case "cp":
            promise = cp(...params);
            promise = new Promise((resolve) => resolve());
        case "mv":
            promise = mv(...params);
            promise = new Promise((resolve) => resolve());
        case "rm":
            promise = rm(...params);
            promise = new Promise((resolve) => resolve());
            break;
        case "os":
            promise = osModule(...params);
            promise = new Promise((resolve) => resolve());
            break;
        case "hash":
            promise = hash(...params);
            promise = new Promise((resolve) => resolve());
            break;
        case "":
            console.log('\n')
            promise = new Promise((resolve) => resolve());
            break;


        case ".exit":
            readl.close();
        default:
            console.log(error);
            promise = new Promise((resolve) => resolve());
    }
    promise.then(result => {

        console.log(`You are currently in ${__dirname}`);
    })

});
readl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}!`);
});
