System.register(['@angular/core/src/facade/collection'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var collection_1;
    var SpyObject;
    return {
        setters:[
            function (collection_1_1) {
                collection_1 = collection_1_1;
            }],
        execute: function() {
            SpyObject = (function () {
                function SpyObject(type) {
                    if (type === void 0) { type = null; }
                    if (type) {
                        for (var prop in type.prototype) {
                            var m = null;
                            try {
                                m = type.prototype[prop];
                            }
                            catch (e) {
                            }
                            if (typeof m === 'function') {
                                this.spy(prop);
                            }
                        }
                    }
                }
                SpyObject.stub = function (object, config, overrides) {
                    if (object === void 0) { object = null; }
                    if (config === void 0) { config = null; }
                    if (overrides === void 0) { overrides = null; }
                    if (!(object instanceof SpyObject)) {
                        overrides = config;
                        config = object;
                        object = new SpyObject();
                    }
                    var m = collection_1.StringMapWrapper.merge(config, overrides);
                    collection_1.StringMapWrapper.forEach(m, function (value, key) { object.spy(key).andReturn(value); });
                    return object;
                };
                SpyObject.prototype.spy = function (name) {
                    if (!this[name]) {
                        this[name] = this._createGuinnessCompatibleSpy(name);
                    }
                    return this[name];
                };
                SpyObject.prototype.prop = function (name, value) { this[name] = value; };
                SpyObject.prototype._createGuinnessCompatibleSpy = function (name) {
                    var newSpy = jasmine.createSpy(name);
                    newSpy.andCallFake = newSpy.and.callFake;
                    newSpy.andReturn = newSpy.and.returnValue;
                    newSpy.reset = newSpy.calls.reset;
                    newSpy.and.returnValue(null);
                    return newSpy;
                };
                return SpyObject;
            }());
            exports_1("SpyObject", SpyObject);
        }
    }
});
//# sourceMappingURL=helper.js.map