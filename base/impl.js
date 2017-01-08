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
                return (callback ? callback(e.message) : e.message);
            }
        }
    };

    Impl.prototype.set = function (key, value) {
        if (!key || !value)
            throw new Error('ERR wrong number of arguments for \'set\' command');
        else {
            this.storage.setItem(key, value);
            return 'OK';
        }
    };

    Impl.prototype.flushall = function () {
        this.storage.clear();
        return 'OK';
    };

    return new Impl();

});