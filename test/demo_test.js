const assert = require('assert');
const MarioChar = require('../models/mariochar');
//Describe tests
describe('Saving records',function(){
    //Create test
    it('Saves a record to the DB',function(done){
        var char = new MarioChar({
            name:'Mario',
            weight: 45
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });

    });
});