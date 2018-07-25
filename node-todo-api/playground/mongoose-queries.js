const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {TodoModel} = require('./../server/models/todo');
const {UserModel} = require('./../server/models/user');


var id = '5b57c33a0144629b7067dcb6';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

TodoModel.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

TodoModel.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

TodoModel.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((e) => console.log(e));

//user.findById 

var id = '5b576d7b04f45a5f908b6a22';

UserModel.findById(id).then((user) => {
    if (!user) {
        return console.log('User Id not found');
    }
    console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));