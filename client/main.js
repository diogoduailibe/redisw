'use strict';

define(function(require) {

    var client = require('./client');

    require('./commands');

    return client;

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