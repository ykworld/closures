var countdownGenerator = function (x) {
  /* your code here */
  var count = x;

  return function() {
    if (count == 0) {
      console.log("Blast Off!")
    } else if (count < 0) {
      console.log("Rockets already gone, bub!")
    } else {
      console.log("T-minus ", count, "...")
    }
    count--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
