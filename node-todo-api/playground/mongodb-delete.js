//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({name: 'boogeyMan'}).then( (result) => {
    //     console.log(result);
    // });

    // fineOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then( (result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5b57435af7936a3e88b9f745')}).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Michael'}).then( (result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    client.close();
});
