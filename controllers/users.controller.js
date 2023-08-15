const users = require("../models/users.model");
const {v4 : uuidv4} = require("uuid");

const getAllUser = (req, res) => {
    res.status(202).json(users)
}

const createUser = (req, res) => {
   const newUser = {
    id : uuidv4(),
    username : req.body.username,
    age: req.body.age
   }
   users.push(newUser);
   res.status(202).json(users)
}

const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, age} = req.body;
    users.filter((user) => user.id === user.id).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.age = age;
    });
    res.status(201).json(users);
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    const filteredUsers = users.filter((user) => user.id !== user.id);
    users = filteredUsers;
    res.status(201).json(users);
}

module.exports = {getAllUser, createUser, updateUser, deleteUser}