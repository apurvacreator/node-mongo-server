// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to db', err);
    }
    console.log('Connected to MongoDB server ');

    const db = client.db('TodoApp');

    db.collection('Todos').deleteMany({name: 'Eat lunch'}).then((result) => {
        console.log(result);
    });

    db.collection('Todos').deleteOne({name: 'Eat lunch'}).then((result) => {
        console.log(result);
    });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteMany({name: 'Apurva'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('3drf4gt65h342g3')
    }).then((result) => {
        console.log(result);
    });
    // client.close();
});