'use strict';

define(function () {

    var Impl = function () {
        this.storage = window['localStorage'];
    };

    Impl.prototype.sendCommand = function (command) {

        var impl = Impl.prototype[command['command']];
        var callback = command['callback'];
        var err = null;

        if (!impl) {
            err = 'Not implemented yet.';
            return (callback ? callback(err) : err);
        } else {
            try {
                var ret = impl.apply(this, command['args']);
                return (callback ? callback(null, ret) : ret);
            } catch (e) {
                return (callback ? callback('(error) ' + e.message) : '(error) '+ e.message);
            }
        }
    };

    Impl.prototype.flushall = function () {
        this.storage.clear();
        return 'OK';
    };

    Impl.prototype.get = function (key) {
        if (typeof key !== 'undefined' && key!==null && key!== ''){
            return this.storage.getItem(key);
        }else if (!this.storage[key]) {
            return 'nil';
        }else{
            throw new Error('ERR wrong number of arguments for \'get\' command');
        }
    };

    Impl.prototype.set = function (key, value) {
        if ((typeof key !== 'undefined' && key!==null && key!=='') &&
            (typeof value !== 'undefined' && value!==null && value!== '')){
            this.storage.setItem(key, value);
            return 'OK';
        }else {
            throw new Error('ERR wrong number of arguments for \'set\' command');
        }
    };

    return new Impl();

});