

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
customerPhone: "0966363220",
merchantPublicKey: PUB_KEY,
transactionName: "Service/Product Name",
transactionReference: uuid(),
wallet: "0966363220",
chargeMe: true,
};

pay={
   pubKey:PUB_KEY
}

const encoded_payload = jwt.sign(payload, SEC_KEY);




console.log(encoded_payload);






console.log("*****************");
const encoded_token= jwt.sign(pay, SEC_KEY);
console.log(encoded_token);