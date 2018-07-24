var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// email - require it - trim it - set type - set min length of 1 
var UserModel = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var User = new UserModel({
    email: 'rajesht@gmail.com   '
});

User.save().then( (doc) => {
    console.log('Use saved to database: ', doc);
}, (err) => {
    console.log('Error saving User: ', err)
});

/*
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: new Date().getTime()
    },
});

var newTodo = new Todo({
    text: `What's up baby?`
    //completed: false,
    //completedAt: new Date().getTime()
});

newTodo.save().then( (doc) => {
    return console.log('Saved todo', doc);
}, (err) => {
    return console.log('Unable to save todo', err);
});

*/