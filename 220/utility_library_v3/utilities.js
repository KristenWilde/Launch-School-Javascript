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
    sample: function(num) {
      if (num === undefined) return obj[0];
      var result = []; 
      for (var i = 0; i < num; i++) {
        result.push(obj[i]);
      }
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
      if (obj[propName]) return true;
    },
    isElement: isElement,
    isArray: isArray,
    isObject: isObject,
    isFunction: isFunction,
    isBoolean: isBoolean,
    isString: isString,
    isNumber: isNumber,
  };
  return u;
};

_.range = function(firstVal, lastVal) {
  if (!lastVal) {
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

_.isElement = isElement;
_.isArray = isArray;
_.isObject = isObject;
_.isFunction = isFunction;
_.isBoolean = isBoolean; 
_.isString = isString; 
_.isNumber = isNumber;

function isElement(thing) {
  return !!thing.nodeType;
}

function isArray(thing) {
  return Array.isArray(thing);
}

function isObject(thing) {
  return typeof thing === 'function' || typeof thing === 'object';
}

function isFunction(thing) {
  return typeof thing === 'function';
}

function isBoolean(thing) {
  return thing.toString() === 'true' || thing.toString() === 'false';
}

function isString(thing) {
  return typeof thing === 'string' || thing instanceof String;
}

function isNumber(thing) {
  return typeof thing === 'number' || thing instanceof Number;
}

var a = [1, 2, 3, 4, 5];