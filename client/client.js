'use strict';

define(function(require) {

    var utils = require('../core/utils');
    var base = require('../base/impl');

    var RedisClient = function(){};

    RedisClient.prototype.internal_send_command = function (command_obj) {
        if (!command_obj['callback'])
            command_obj['callback'] = RedisClient.prototype.print;

        base.sendCommand(command_obj);
    };

    RedisClient.prototype.print = function(err,reply){
      utils.print(err,reply);
    };

    return {
        RedisClient:RedisClient,
        createClient:function () {
            return new RedisClient();
        }
    };

    /*function getStorage(type) {
     var storage = window[type + 'Storage'],
     delta = 0,
     li = document.createElement('li');

     if (!window[type + 'Storage']) return;

     if (storage.getItem('value')) {
     delta = ((new Date()).getTime() - (new Date()).setTime(storage.getItem('timestamp'))) / 1000;

     li.innerHTML = type + 'Storage: ' + storage.getItem('value') + ' (last updated: ' + delta + 's ago)';
     } else {
     li.innerHTML = type + 'Storage is empty';
     }

     document.querySelector('#previous').appendChild(li);
     }

     getStorage('session');
     getStorage('local');*/
});