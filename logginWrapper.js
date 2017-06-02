var wrapLog = function (callback, name) {
  /* your code here */
  return function() {
    var a = arguments[0];
    var b = arguments[1];
    var sum = callback(a, b);
    console.log(name + "(" + a + "," + b + ") => " + sum);
  }
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5