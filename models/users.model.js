const {v4 : uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username : "alex",
        age : 22
    },
    {
        id: uuidv4(),
        username : "peter",
        age : 26
    }
];

module.exports = users;