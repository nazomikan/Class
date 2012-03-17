(function (win) {
    win.Class = Class;

    function Class(fn) {
        var that = this;
        if (!(this instanceof Class)) {
            return new Class(fn);
        }

        this.Klass = function () {
            var args = Array.prototype.slice.call(arguments);
            fn.apply(this, args);
        };

        this.Wrapper = function () {
            var args = Array.prototype.slice.call(arguments);
            function Entity() {
                that.Klass.apply(this, args);
            };
            Entity.prototype = that.Klass.prototype;
            this.__entity__ = new Entity();
            fn.apply(this, args);
        };
    }

    Class.prototype.export = function (className, address) {
        if (typeof address !== "object") {
            address = win;
        }
        address[className] = this.Wrapper;
        return this;
    };

    Class.prototype.public = function (apis) {
        var that = this, key;
        for (key in apis) {
            if (typeof apis[key] === 'function') {
                this.Klass.prototype[key] = apis[key];
                this.Wrapper.prototype[key] = (function (key, method) {
                    return function () {
                        var args = Array.prototype.slice.call(arguments);
                        this.__entity__[key] = method;
                        this.__entity__[key].apply(this.__entity__, args);
                    }
                }(key, apis[key]));
            } else {
                this.Wrapper.prototype[key] = apis[key];
            }
        }
        return this;
    };

    Class.prototype.private = function (apis) {
        var key;
        for (key in apis) {
            this.Klass.prototype[key] = apis[key];
        }
        return this;
    };
}(window));
