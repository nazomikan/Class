(function (win) {
    win.Class = Class;
    function Class(fn) {
        if (!(this instanceof Class)) {
            return new Class(fn);
        }

        this.Klass = function () {
            fn.call(this);
        };
        this.Wrapper = function () {
            fn.call(this);
        };
        this.instance = new this.Klass();

        return this;
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
            this.Klass.prototype[key] = apis[key];
            this.Wrapper.prototype[key] = (function (key) {
                return function () {
                    var args = Array.prototype.slice.call(arguments);
                    that.instance[key].apply(that.instance, args);
                }
            }(key));
        }
        return this;
    };

    Class.prototype.private = function (apis) {
        var that = this, key;
        for (key in apis) {
            this.Klass.prototype[key] = apis[key];
        }
        return this;
    };
}(window));
