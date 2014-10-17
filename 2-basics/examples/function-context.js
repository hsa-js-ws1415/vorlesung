function a() {
    console.log(this);
}

var b = {
    bbb: a
};

//a();
//b.bbb();
//a();

//var c = {};
//c.ccc = b.bbb;
//c.ccc();

//b.bbb.call(c);

//var d = a.bind(b);
//d();
//d.call(c);

//new d();