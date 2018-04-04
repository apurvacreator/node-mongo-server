// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to db', err);
    }
    console.log('Connected to MongoDB server ');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to Todos', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Apurva Mukherjee',
        Age: 23,
        location: 'Bengaluru'
    }, (err, results) => {
        if(err){
            return console.log('Unable to insert to Users', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});