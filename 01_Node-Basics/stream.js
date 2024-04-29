const fs = require('fs');

const readSteram = fs.createReadStream("./docs/blog.txt", { encoding: 'utf8' });
const writeStream = fs.createWriteStream("./docs/blog1.txt");

// readSteram.on("data", (chunk) => {
//     console.log('----New Chunk -----');
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// })


// Piping

readSteram.pipe(writeStream);