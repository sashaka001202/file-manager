import { createReadStream } from "fs";
import { __dirname } from "../index.js";


import path from 'path';
import fs from 'fs';
const { stdout } = process;
import { fileURLToPath } from 'url';


 function cat(...params) {
    // try {
        const pathFile = path.join(__dirname, ...params);

        // const readStream = createReadStream(pathFile, "utf-8");
        // readStream.on("data", (data) => console.log(data));
        // readStream.on("finish", () => {
        //     process.send("Done");
        //   });

          const rs = createReadStream(pathFile, { flags: 'r' });
          rs.pipe(process.stdout);
          process.stdout.write('\n');
        

            // const pathFile = path.join(__dirname, ...params);
            // const readableStream = fs.createReadStream(pathFile, { flags: 'r' });
            //  readableStream.on('data', chunk => console.log(chunk.toString()));
            // return
// } catch (error) {
//     console.error('Operation failed');
//     }
}

export default cat;