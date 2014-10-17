function myFunction(firstArg, secondArg, thirdArg) {
    var args;

    console.log(firstArg, secondArg, thirdArg);
    console.log(arguments);
    args = Array.prototype.slice.call(arguments, 0);
}

myFunction("a", "b", "c", "d");
myFunction("a", "b");