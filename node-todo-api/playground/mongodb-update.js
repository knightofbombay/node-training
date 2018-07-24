//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //    db.collection('Todos').findOneAndUpdate(
    //        {_id: new ObjectID("5b573b10bd113d33c0a80508")}, 
    //        {
    //             $set: {
    //                 completed: true
    //             }
    //         }, 
    //         {
    //             returnOriginal: false
    //         }
    //     ).then( (result) => {
    //         console.log(result);
    //     });
        
        db.collection('Users').findOneAndUpdate(
            {_id: new ObjectID('5b573bffa09b37377c66572a')}, 
            {
                 $set: {
                     name: 'Raj'
                 },
                 $inc: {
                     age: 1
                 }
             }, 
             {
                 returnOriginal: false
             }
         ).then( (result) => {
             console.log(result);
         });


    client.close();
});
