console.log("\nbefore\n");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

function a() {}

var b = function () {};

var c = function d() {};

console.log("\nafter\n");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);