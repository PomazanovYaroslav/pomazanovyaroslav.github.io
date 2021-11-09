"use strict"

function clone(o) {
    const gdcc = "__getDeepCircularCopy__";
    if (o !== Object(o)) {
        return o;
    }

    let set = gdcc in o,
        cache = o[gdcc],
        result;
    if (set && typeof cache == "function") {
        return cache();
    }
    
    o[gdcc] = function() {
        return result; 
    };

    if (o instanceof Array) {
        result = [];
        for (let i = 0; i < o.length; i++) {
            result[i] = clone(o[i]);
        }
    } else {
        result = {};
        for (let prop in o)
            if (prop != gdcc)
                result[prop] = clone(o[prop]);
            else if (set)
                result[prop] = clone(cache);
    }
    if (set) {
        o[gdcc] = cache;
    } else {
        delete o[gdcc];
    }
    return result;
}