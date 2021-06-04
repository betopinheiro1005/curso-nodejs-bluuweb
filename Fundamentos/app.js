// Aula 01

//const frutas = ['banana', 'laranja', 'pera', 'banana'];

//frutas.forEach(fruta => {
//    console.log(fruta);
//})

// ====================================================

// Aula 02a

//const frutas = require('./frutas');

//frutas.forEach(fruta => {
//    console.log(fruta);
//})

// ====================================================

// Aula 02b

//const {frutas, valor} = require('./frutas');

//frutas.forEach(fruta => {
//    console.log(fruta);
//})

//console.log(valor);

// ====================================================

// Aula 03 - cowsay

//const cowsay = require("cowsay");

//console.log(cowsay.say({
//    text : "I'm a moooodule",
//    e : "oO",
//    T : "U "
//}));

// ====================================================

// Aula 04 - Servidor HTTP

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ====================================================


