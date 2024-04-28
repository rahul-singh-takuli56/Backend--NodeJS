// Global object

console.log(global);

setTimeout(() => {
    console.log("In the timeout")
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("Hey, I am Rahul Singh ")
}, 1000)

console.log("Absolute path name", __dirname);
console.log("File name ", __filename);

