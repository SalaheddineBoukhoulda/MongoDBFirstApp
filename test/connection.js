const mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://localhost/firstdb', { useNewUrlParser: true });


mongoose.connection.once('open',function(){
    console.log("connection has been made now make fireworks...");
}).on('error',function(error){
    console.log("Connection error:", error);
});
