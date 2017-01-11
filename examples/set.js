'use strict';

requirejs.config({
    baseUrl: '../',
    paths: {
        json: 'bower_components/requirejs-plugins/src/json',
        text: 'bower_components/requirejs-plugins/lib/text'
    }
});

requirejs(['client/main'],function(redis){
    var client = redis.createClient();
    window.client = client;
    client.set("string key", "string value");
    client.get("string key");
});

