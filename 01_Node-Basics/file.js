const fs = require('fs');

// reading files
// Asynchronous code 
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files
// asyn code
fs.writeFile('./docs/blog.txt', ("hello, World"), () => {
    console.log("File was Written")
})

fs.writeFile('./docs/blog2.txt', ("hello, World"), () => {
    console.log("NO file name exits before")
})


// directories
// async code
if (!fs.existsSync('./assets')) {

    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder Created");
    })
} else {
    fs.rmdir('./assets', (err) => {
        console.log(err);
    })
    console.log("Folder Deleted");
}


// deleting files 

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Deleted");
    })
}