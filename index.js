// // var http = require("http");
// // http.createServer(function (request, response) {
// // // Send the HTTP header
// // // HTTP Status: 200 : OK
// // // Content Type: text/plain
// // response.writeHead(200, {'Content-Type': 'text/plain'});
// // // Send the response body as "Hello World"
// // response.end('Hello World\n');
// // }).listen(8081);
// // // Console will print the message

// // console.log('Server running at http://127.0.0.1:8081/');
// // console.log("dsdsds");


// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

// var user = {
//    "user4" : {
//       "name" : "mohit",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    }
// }

// app.post('/addUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       data["user4"] = user["user4"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })


// app.get('/:id', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       var users = JSON.parse( data );
//       var user = users["user" + req.params.id] 
//       console.log( user );
//       res.end( JSON.stringify(user));
//    });
// })


// app.delete('/deleteUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + 2];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })




 const jwt = require("jsonwebtoken");
    const { uuid } = require("uuidv4");

const SEC_KEY = "283eab35d6bd4c91a6986fe6352ce851";
const PUB_KEY = "73a91b63f1bf4ab7bbf2dabc6358b7c4";

payload = {
amount: 1,
currency: "ZMW",
customerEmail: "mundia@getsparco.com",
customerFirstName: "Mundia",
customerLastName: "Mwala",
customerPhone: "0961453688",
merchantPublicKey: PUB_KEY,
transactionName: "Service/Product Name",
transactionReference: uuid(),
wallet: "0961453688",
chargeMe: false,
};
const encoded_payload = jwt.sign(payload, SEC_KEY);

console.log(encoded_payload);