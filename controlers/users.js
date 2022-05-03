import { v4 as uuidv4 } from 'uuid';

let users = [];  //Empty users array 

export const getUser =  (req, res) => {
    res.send(users);
}

export const createUser =  (req, res) => {
    const user = req.body;

    const userID = uuidv4();

    const userWithId = { ...user , Id : userID};
    users.push(userWithId);
    res.send(`User with name ${user.firstName} added to the database`);
}

export const getUserWithId =  (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.Id == id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.Id != id);
    res.send(`User with ${id} deleted successfuly from database`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;

    const {firstName, lastName, age } = req.body;

    const user = users.find((user) => user.Id == id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with the ${user.firstName} has been updated succesfully`);
}