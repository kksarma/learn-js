/**
 * Data types and Type checking
 */

console.log('typeof undefined: ', typeof undefined); // undefined
console.log('typeof (typeof undefined): ', typeof (typeof undefined)); // string
console.log('typeof null: ', typeof null); // object
console.log('typeof []: ', typeof []); // object
console.log('typeof {}: ', typeof {}); // object
console.log('typeof Krishan: ', typeof 'Krishan'); // string
console.log('typeof empty string: ', typeof ''); // string
console.log('typeof false: ', typeof false); // boolean
console.log('typeof 0: ', typeof 0); // number
console.log('typeof 10: ', typeof 10); // number
console.log('typeof NaN: ', typeof NaN); // number

console.log('typeof Array: ', typeof Array); // function
console.log('typeof Object: ', typeof Object); // function
console.log('typeof Boolean: ', typeof Boolean); // function
console.log('typeof String: ', typeof String); // function
console.log('typeof Number: ', typeof Number); // function
console.log('typeof Set: ', typeof Set); // function
console.log('typeof Map: ', typeof Map); // function
console.log('typeof function: ', typeof Function); // function

/**
 * Type checking...
 */

const n = 10;
const ns = '10';
const fl = 10.4;
const s = 'Krishan';
const a = [1,2,3];
const f = () => {};
const o = { name: 'Krishan' };
const b = true;
const nu = null;
const un = undefined;
const set = new Set();
const map = new Map();

console.log('Array constructor: ', a.constructor); // Array
console.log('Object constructor: ', o.constructor); // Object
console.log('Boolean constructor: ', b.constructor); // Boolean
console.log('String constructor: ', s.constructor); // String
console.log('Number constructor: ', n.constructor); // Number
console.log('Set constructor: ', set.constructor); // Set
console.log('Map constructor: ', map.constructor); // Map
console.log('Function constructor: ', f.constructor); // Function

// Checking type of a number data type value
console.info('Checking type of a number data type value');
console.log(typeof n === 'number' && isFinite(n)); // true
console.log(typeof fl === 'number' && isFinite(fl)); // true
console.log(typeof ns === 'number' && isFinite(ns)); // false

// Checking type of a string data type value
console.info('Checking type of a string data type value');
console.log(typeof s === 'string' || s instanceof String); // true

// Checking type of a array data type value
console.info('Checking type of a array data type value');
console.log(typeof a === 'object' && a.constructor === Array); // true

// Checking type of a object data type value
console.info('Checking type of a object data type value');
console.log(typeof o === 'object' && o.constructor === Object); // true

// Checking type of a function data type value
console.info('Checking type of a function data type value');
console.log(typeof f === 'function'); // true

// Checking type of a boolean data type value
console.info('Checking type of a boolean data type value');
console.log(typeof b === 'boolean'); // true

// Checking type of a undefined data type value
console.info('Checking type of a undefined data type value');
console.log(typeof un === 'undefined'); // true

// Checking type of a null data type value
console.info('Checking type of a null data type value');
console.log(nu === null); // true