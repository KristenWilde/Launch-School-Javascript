var _ = function(obj) {
  var u = {
    last: function() {
      return obj[obj.length - 1];
    },
    first: function() {
      return obj[0];
    },
    without: function(val) {
      var args = [].slice.call(arguments);
      var copy = obj.slice();

      args.forEach(function(arg) {
        copy.splice(copy.indexOf(arg), 1);        
      });
      
      return copy;
    },
    lastIndexOf: function(val) {
      return obj.lastIndexOf(val);
    },
    sample: function(qty) {
      var result = [];
      var copy = obj.slice(); 

      function get() {
        var idx = Math.floor(Math.random() *  copy.length);
        var element = copy[idx];
        copy.splice(idx, 1);
        return element;
      }

      if (qty === undefined) {
        return get();
      }

      for (var i = 0; i < qty; i++) {
        result.push(get());
      }
      console.log(result);
      return result;
    },
    findWhere: function(propertiesObj) {
      var i;
      var properties = Object.keys(propertiesObj);
      for (i = 0; i < obj.length; i++) {
        if (propertiesMatch()) {
          return obj[i];
        }
      }
      function propertiesMatch() {
        var j;
        for (j = 0; j < properties.length; j++) {
          if (obj[i][properties[j]] !== propertiesObj[properties[j]]) {
            return false;
          }
        }
        return true;
      }
    },
    where: function(propertyObj) {
      var result = [];
      var property = Object.keys(propertyObj);
      obj.forEach(function(item) {
        if (item[property] === propertyObj[property]) {
          result.push(item)
        }
      })
      return result;
    },
    pluck: function(property) {
      var result = [];
      obj.forEach(function(item) {
        result.push(item[property]);
      });
      return result;
    },
    keys: function() {
      return Object.keys(obj);
    },
    values: function() {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    },
    pick: function(propName) {
      var result = {}
      result[propName] = obj[propName];
      console.log(result);
      return result;
    },
    omit: function(propName) {
      var result = {};
      for (property in obj) {
        if (property !== propName) {
          result[property] = obj[property];
        }
      }
      return result;
    },
    has: function(propName) {
      return {}.hasOwnProperty.call(obj, propName);
    }
  };

  ['isElement', 'isArray', 'isObject', 'isFunction', 'isBoolean', 
  'isString', 'isNumber'].forEach(function(methodName) {
    u[methodName] = _[methodName];
  });

  return u;
};

_.range = function(firstVal, lastVal) {
  if (lastVal === undefined) {
    lastVal = firstVal;
    firstVal = 0;
  }
  var result = [];
  for (var i = firstVal; i < lastVal; i++) {
    result.push(i);
  }
  return result;
}

_.extend = function(firstObj) {
  for (var i = 0; i < arguments.length; i++) {
    for (property in arguments[i]) {
      firstObj[property] = arguments[i][property];
    }
  }
  return firstObj;
}

_.isElement = function(thing) {
  return thing.nodeType === 1;
}

_.isArray = Array.isArray || function(thing) {
  return toString.call(thing) === '[object Array]';
};

_.isObject = function(thing) {
  return typeof thing === 'function' || typeof thing === 'object';
};

_.isFunction = function(thing) {
  return typeof thing === 'function';
};

_.isBoolean = function(thing) {
  return thing.toString() === 'true' || thing.toString() === 'false';
};

_.isString = function(thing) {
  return typeof thing === 'string' || thing instanceof String;
}; 

_.isNumber = function(thing) {
  return typeof thing === 'number' || thing instanceof Number;
};
