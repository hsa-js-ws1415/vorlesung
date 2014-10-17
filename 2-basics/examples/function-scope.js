var a = "a";

function b(a, b) {
    console.log(a, b, c);

    c();

    function c() {
        console.log(a, b, c);
    }
}

b("A", "B");

console.log(a, b, c);