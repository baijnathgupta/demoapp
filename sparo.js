 const jwt = require("jsonwebtoken");
    const { uuid } = require("uuidv4");

const SEC_KEY = "<MERCHANT_SECRET_KEY>";
const PUB_KEY = "<MERCHANT_PUBLIC_KEY>";

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