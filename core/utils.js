'use strict';

define(function(){
    return {
        print: function (err, reply) {
            if (err) {
                // A error always begins with Error:
                console.log(err.toString());
            } else {
                console.log('Reply: ' + reply);
            }
        }
    }
});
