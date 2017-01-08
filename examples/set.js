'use strict';

requirejs.config({
    baseUrl: '../',
    paths: {
        json: 'bower_components/requirejs-plugins/src/json',
        text: 'bower_components/requirejs-plugins/lib/text'
    }
});

requirejs(['client/main'],function(main){
    var client = main.createClient();
    //client.set("string key", x);
    client.flushall(x);
});

