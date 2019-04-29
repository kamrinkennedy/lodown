'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take an input value of any type and return that
 * value unchanged.
 * 
 * @param {Any} value: Any given value of any type.
 * @return {Any} Returns input value unchanged.
*/

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
* typeOf: Designed to take an input value and determine that value's type.
* This could be string, number, boolean, array, object, null, or undefined.
*
* @param {Any} value: Any given value of any type to be returned.
* @return {String} string: Returns data-type of input data.
*/

function typeOf (value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    }
    return typeof value;
}
module.exports.typeOf = typeOf;
 
 /**
 * first: Designed to take an input array and a number, and then to return a
 * new array with all of the elements up to and including the input number(index) 
 * in it. If <number> is not a number, is negaive, or is not given, it should return 
 * the first element of the input array. If <number> is greater than the length of 
 * the array, it should return the entire array.
 * 
 * @param {Array} array: An array with any number of values over which to search.
 * @param {Number} number: A number representing the index of
 * the array to return the values including and preceding.
 * 
 * @return {Array} array: Returns an array with the first <number> values of 
 * the input array.
 */
 
function first (array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (number === null || typeof number !== 'number') {
        return array[0];
    }
    return array.slice(0, number);
}
module.exports.first = first;

/**
 * last: Designed to take an input array and a number, and then to return a
 * new array with all of the elements after and including the given number (index)
 * in it. If <number> is not given or is not a number, it should return the last
 * element of the input array. If <number> is negative, it should return an
 * empty array.
 * 
 * @param {Array} array: An array with any number of values over which to search.
 * @param {Number} number: A number representing the index of 
 * the array to return the values including and following.
 * 
 * @return {Array} array: Returns an array with the last <number> values from the
 * input array.
 */
 
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (number === null || typeof number !== 'number') {
        return array[array.length - 1];
    }
    return array.slice(number - 1);
}
module.exports.last = last;

/**
 * indexOf: Designed to take an array and a value and return the index at 
 * which that value first occurs in the array. It should return -1 if the
 * given value is not in the array.
 * 
 * @param {Array} array: Array over which to iterate.
 * @param {Any Value} value: Value to search for while iterating through array.
 * 
 * @return {Number} number: Returns the index at which the input value is first
 * located in the input array, or -1 if the value is not in the array.
 */
function indexOf(array, value) {
  if (!Array.isArray(array)) {
      return -1;
  } for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          //returns the first index at which the value is found
          return i;
      }
  }
  //returns -1 if the value is not found
  return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to take an input array and an input value and to return
 * true if the given value exists within the array or false otherwise.
 * @param {Array} array: Array over which to search.
 * @param {Any Value} value: Value to search for in given array.
 * 
 * @return {Boolean} boolean: Returns true if input value is found in the input
 * array, and false if it is not.
 */
 
function contains(array, value) {
    //if value is not null, return true if array includes value, false if not
    return value === null ? false : array.includes(value);
}
module.exports.contains = contains;
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            //perform given test on each element of array
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            //perform given test on each key value of object
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to take in an array and return a new array with all of the
 * duplicates from the original array removed.
 * 
 * @param {Array} array: The array to sort through.
 * @return {Array} array: Returns a new array with all duplicates from the 
 * input array removed.
 */
 
function unique(array) {
    // make new array to store values
    var newArr = [];
    // loop through input array
    for (let i = 0; i < array.length; i++) {
        // if index of original array doesn't exist in new array
        if (indexOf(newArr, array[i]) === -1) {
            // push index to new array
            newArr.push(array[i]);
        }
    }
    // return new array of unique values
    return newArr;
}
module.exports.unique = unique;

/**
 * filter: Desinged to take in an array and a test function and to return a new
 * array containing all elements in the original array that passed true to the
 * test function.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: Test function to pass on each element of the array.
 * 
 * @return {Array} array: Returns a new array containing all elements from the 
 * input array that passed the input test function.
 */
 
function filter(array, action) {
    let filtered = [];
    each(array, (e, i, a) => {
        //if given test returns true, push element to new array
        if (action(e, i, a)) {
            filtered.push(e);
        }
    });
    return filtered;
}
module.exports.filter = filter;

/**
 * reject: Designed to take in an array and a test function and to return a new
 * array containing all elements in the original array that passed false to the 
 * test function.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} action: Test function to pass on each element of the array.
 * 
 * @return {Array} array: Returns a new array with all of the elements from the 
 * input array that failed the input test function.
 */
 
function reject(array, action) {
    let rejected = [];
    each(array, (e, i, a) => {
        //if given test returns false, push element to new array
        if (!action(e, i, a)) {
            rejected.push(e);
        }
    });
    return rejected;
}
module.exports.reject = reject;

/**
 * partition: Designed to take in an array and a test function and to return a new
 * array with two sub-arrays in it: the first containing all elements in the original
 * array that passed true to the test function, and the second containing all the elements
 * in the original array that passed false to the test function.
 * 
 * @param {Array} array: Array over which to iterate.
 * @param {Function} action: Test function to pass on each element of the array.
 * 
 * @return {Array} array: Returns a new array with two sub-arrays: index 0 has all elements
 * from the input array that passed the input test function, and index 1 has all elements from the
 * input array that failed the input test function.
 */
 
function partition(array, action) {
    //filter and reduce both return arrays
    //return an array of two sub-arrays with the filtered at index 0 and the rejected at index 1
    return [filter(array, (e, i, a) => action(e, i, a)), reject(array, (e, i, a) => action(e, i, a))];
}
module.exports.partition = partition;

/**
 * map: Designed to take in a collection and a function and to return a new array containing
 * the call values of the given function on each element of the collection.
 * 
 * @param {Array or Object} collection: Collection over which to iterate.
 * @param {Function} action: Function to pass on each element of the array.
 * 
 * @return {Array} array: Returns a new array with all of the elements from the input collection
 * altered by the callback function;
 */
 
function map(collection, action) {
    let mapped = [];
    each(collection, (e, i, a) => {
        //push the return value of each element to new array
        mapped.push(action(e, i, a));
    });
    return mapped;
}
module.exports.map = map;

/**
 * pluck: Designed to take in an array of objects and a property name and to return a new
 * array containing the value of the given property name for each object in the array
 * that has the given property.
 * 
 * @param {Array} array: An array of objects over which to iterate.
 * @param {String} property: Name of a property to search the objects for.
 * 
 * @return {Array} array: Returns a new array containing the values assigned to the input
 * property name for each object in the input array of objects.
 */
 
function pluck(array, property) {
    //map returns an array
    //pass test searching for properties in the array of objects
    return map(array, (element) => {
    for (let key in element) {
        if (property === key) {
            return element[key];
            }
        }
    });
}
module.exports.pluck = pluck;

/**
 * every: Designed to take in an array or an object and a test function and to return 
 * true if each element passed through the test function returned true, or false if
 * any of the elements passed through the test function returned false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: Test function to pass on each element of the collection.
 * 
 * @return {Boolean} boolean: Returns true if every element in the collection passed the
 * input test function, and false if at least one element failed the input test function.
 */
 
function every(collection, action) {
    //if given action isn't a function, test for all true values in given collection
    if (typeof action !== 'function') {
        let bool = false;
        each(collection, (e, i, a) => {
            if (e) {
                bool = true;
            }
        });
        return bool;
    }
    //if given a function, return false if any element returns false after passed through
    if (reject(collection, action).length > 0) {
        return false;
    }
    return true;
}
module.exports.every = every;

/**
 * some: Designed to take in a collection and a test function and to return true if any
 * of the elements in the collection passed through the test function returned true, or
 * false if none of the elements returned true.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: Test function to pass on each element of the collection.
 * 
 * @return {Boolean} boolean: Returns true if at least one element in the input collection
 * passed the input test function, and false if no elements passed the input test function.
 */
 
function some(collection, action) {
    if (typeof action !== 'function') {
        //define return value
        let bool = false;
        //perform action on each element
        each(collection, (e, i, a) => {
            if (e) {
                //if true, change return value
                bool = true;
            }
        });
        return bool;
    }
    //check to see if any of the tests pass
    //return true if they do
    if (filter(collection, action).length > 0) {
        return true;
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Designed to take in an array, a function, and a seed value. Passes the 
 * given function on the seed value and then accumulates the seed value with the
 * function passed on each element of the given array. Returns the final return
 * value of the called function on the last accumulated element.
 * @param {Array} array: Array over which to iterate.
 * @param {Function} action: Function to perform on seed value and each array element.
 * @param {Value} seed: Given value on which to perform the initial function.
 * 
 * @return {Any} value: Returns one single value after applying the test functino to 
 * each element of the array and the accumulator.
 */
 
function reduce(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        //loop through array
        for (let i = 1; i < array.length; i++) {
            //perform action on each element and previous seed value and reassign its value to seed
            seed = action(seed, array[i], i);
        }
    } else {
        //loop through array
        for (let i = 0; i < array.length; i++) {
            //perform action on each element and previous seed value and reassign its value to seed
            seed = action(seed, array[i], i);
        }
    }
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Desinged to take in an object, a second object, and potentially any number
 * of additional objects. It should take all properties of object 2 and beyond and add them to
 * object 1, and then return object 1.
 * 
 * @param {Object} obj1: Object to add properties to.
 * @param {Any Number of Additional Objects} ...objects: Objects to iterate over and add their
 * properties to obj1.
 * 
 * @return {Object} obj1: Returns the original object with all properties of additional input
 * objects added to it.
 */
 
function extend(obj1, ...objects) {
    //loop through each argument passed in
    for (let i = 0; i < arguments.length; i++) {
        //loop through each key in each object
        for (let key in arguments[i]) {
            //assign that object's keys to obj1
            obj1[key] = arguments[i][key];
        }
    }
    return obj1;
}
module.exports.extend = extend;