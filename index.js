'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take an input value of any type and return that
 * value unchanged.
 * 
 * @param {Any Value} value: Any given value of any type.

function identity(value) { 
    return value;
}
*/

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
* typeOf: Designed to take an input value and determine that value's type.
* This could be string, number, boolean, array, object, null, or undefined.
*
* @param {Any Value} value: Any given value of any type to be returned.
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
 */
function indexOf(array, value) {
  if (!Array.isArray(array)) {
      return -1;
  } for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          return i;
      }
  } 
  return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to take an input array and an input value and to return
 * true if the given value exists within the array or false otherwise.
 * @param {Array} Array over which to search.
 * @param {Any Value} value: Value to search for in given array.
 */
 
function contains(array, value) {
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
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to 

