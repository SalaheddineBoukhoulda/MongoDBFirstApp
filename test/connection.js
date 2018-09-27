const mongoose = require('mongoose');
//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to DB
before(function(done){
    mongoose.connect('mongodb://localhost/firstdb', { useNewUrlParser: true });
    mongoose.connection.once('open',function(){
        console.log("connection has been made now make fireworks...");
        done();
    }).on('error',function(error){
        console.log("Connection error:", error);
    });
});

