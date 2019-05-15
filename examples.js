
 - Basic types: numbers, strings, boolean, null, undefined
 - Other types: objects

But:
typeof(null) === 'object'


 - Numbers, strings, and booleans have methods but are immutable.
 - Objects in JavaScript are mutable keyed collections.
 - In JavaScript, arrays are objects, functions are objects, regular expressions are objects, and objects are objects.


//
// Numbers
 - 64-bit floating point, same as Java double.
 - No int type

isNaN(1/0)        // false
isNaN(NaN)        // true

Math.floor(2.45)  // 2


//
// Strings

 - All characters in JavaScript are 16 bits wide.
 - Strings are immutable.
 - no Character type. Use strings of length 1.

var s = 'abc';
var t = "def";
var escape = ' \" \' \\ \/ \b \f \n \r \t \u8888 ';
'c' + 'a' + 't' === 'cat'         // true
'cat'.toUpperCase( ) === 'CAT'    // true

var s = '';
for (var i=0x00B0; i<0x00B0+200; i++) {
  s += String.fromCharCode(i) + '|';
}
console.log(s);

//
// Arrays

var empty = [];
var arr = [1,'2',3.3];  // mixed types
arr.length;             // 3
arr[5];                 // undefined
arr.length = 2;         // delete extra elements
arr;                    // [1, "2"]
arr.push(4.4);          // [1, '2', 4.4]

var is_array = function (value) {
  return value &&
    typeof value === 'object' &&
    typeof value.length === 'number' &&
    typeof value.splice === 'function' &&
    !(value.propertyIsEnumerable('length'));
};


//
// Control statements

var one = 0 || NaN || '' || false || null || undefined || 1;   // 1

if (false) { }
else if (true) { }
else { }

for (v in obj) {alert(v);}


//
// Objects

var obj = {};
var obj = {'anystring': 1};
var obj = {
  anystring: 1,  // Quotes unnecessary in most cases
  b: 3,
  c: {d: 5}      // Nested object
};

obj['anystring'] == obj.anystring // true, prefer dot notation
obj.d                             // undefined
obj.d.e                           // TypeError
obj.d && obj.d.e                  // undefined
obj.d || "mydefault"              // "mydefault"
obj.d = 'abc'                     // add new property


//
// functions

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

function myadd(a,b) { return a + b; }
var myadd = function (a,b) { return a + b; }; // anonymous function

function f(n) {
  a: 1,
  if (n > 1) return true;
}

// All functions are passed 'this' and 'arguments'

var f = function() {console.log(arguments.length);}
f(1,2,3,4,5)                      // 5

theFunction.apply(valueForThis, arrayOfArgs)

theFunction.call(valueForThis, arg1, arg2, ...)

var f = function () { console.log(this.id); };
f.apply({'id' : 'Abc'});          // Abc
f.apply({'id' : 'Def'});          // Def


//
// Closure

var adder = function (i) { return function(n) {return n+i;}; };
var adder1 = adder(1);
var adder11 = adder(11);
adder1(22);                       // 23
adder11(33);                      // 44


//
// Curry

Function.method('curry', function () {
  var slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this;
  return function ( ) {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

var f = function (a,b) {return a>b ? a : b;};
var g = f.curry(5);
g(10);   // 10
g(1);    // 5


//
// Prototype

// Every function gets a prototype object

// Objects cannot be used
// Creates a new object that uses another object as its prototype
if (typeof Object.beget !== 'function') {
  Object.beget = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

var mytpl = {a:1};
var x = Object.beget( mytpl );
var y = Object.beget( mytpl );
mytpl.b = 2; // prototype modified, immediately visible to x and y
typeof mytpl.toString // "function"
mytpl.hasOwnProperty('toString') // false, does not look at the prototype chain
delete mytpl.a; // affects all instances

for (var p in mytpl) { // order not guaranteed
  if(typeof mytpl[p] !== 'function')
    console.log(p); // Print all properties, but not functions
}


Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Number.method('integer', function () {
  return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

(2.3).integer();          // 2


String.method('trim', function ( ) {
  return this.replace(/^\s+|\s+$/g, '');
});

Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};


//
// Scope

if (true) {
  var a = 123;
}
console.log(a);   // 123 (no block scope, only function scope)

var MYAPP = {};
MYAPP.a = { ... }


//
// Exceptions

try {
  if (true != false) throw {
    name : 'MyException',
    message : 'Invalid value'
  };
} catch (e) {
  console.log(e);
}


// misc
 - The values produced by typeof are 'number', 'string', 'boolean', 'undefined', 'function', and 'object'.
 - If the operand of ! is truthy, it produces false. Otherwise, it produces true.

 
// Reserved words
abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with

// Should have been reserved
undefined, NaN, and Infinity
var NaN = 1   // ok!!

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};


++[[]][+[]]+[+[]]   // 10

From https://medium.freecodecamp.org/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f

1. Remove duplicates from an array of numbers/strings
let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];

5. Flattening an array of arrays
let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);

6. Create an object that contains the frequency of the specified key
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let groupByAge = users.reduce((acc, it) =>
  ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
{});

7. Indexing an array of objects (lookup table)
let uTable = users.reduce((acc, it) => ({...acc, [it.id]: it }), {})

8. Extract the unique values for the given key of each item in the array
let listOfUserGroups = [...new Set(users.map(it => it.group))];

9. Object key-value map reversal
let cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};
let countries = Object.keys(cities).reduce(
  (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});
// countries is
{
  France: ["Lyon", "Paris"],
  Germany: ["Berlin"]
}

13. Find and replace key-value pair in an array of objects
let updatedUsers = users.map(
  p => p.id !== 47 ? p : {...p, age: p.age + 1}
);

14. Union (A ∪ B) of arrays
[...new Set([...arrA, ...arrB])]

15. Intersection (A ∩ B) of arrays
arrA.filter(it => arrB.includes(it));

Difference (A \ B) of arrays
arrA.filter(it => !arrB.includes(it));
