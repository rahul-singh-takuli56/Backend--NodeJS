const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    // loadsh
    const num = _.random(0, 23);
    console.log(num);

    const greet = _.once(() => {
        console.log("hello");
    });
    greet();
    greet();

    // set header content type
    res.setHeader("Content-Type", "text/html");

    // setting router for different pages
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err)
            console.log(err);
        else
            res.write(data);

        res.end();

    })
});

server.listen(3000, "localhost", () => {
    console.log("Listening for request on port 3000 !");
});