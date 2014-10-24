/**
 * An den Stellen, wo ADD ONE LINE steht, darf maximal nur eine Zeile stehen in der maximal nur ein Semikolon verwendet wird.
 *
 * Gut: var a = 2, b = a + 1, c = b;
 * Böse: var a = 2; var b = a + 1; var c = b;
 */
describe("types", function () {

    describe("test 1", function () {

        it("should run without errors", function () {
            expect(a).to.equal(undefined);

            /* ADD ONE LINE */
            var b = new Number("3"), a = 2;

            expect(typeof b).to.equal("object");
            expect(b == 3).to.equal(true);

            function doSomething() {
                /* ADD ONE LINE */
                c=4;
            }
            doSomething();

            expect(c).to.equal(4);
        });

    });

    describe("test 2", function () {

        /**
         * Es darf maximal nur ein Object erzeugt werden
         */
        it("should run without errors", function () {
            /* ADD ONE LINE */
            var c = {a:1};

            expect(c).to.be.an.instanceof(Object);
            expect(c.a).to.equal(1);

            /* ADD ONE LINE */
            c.a = undefined;

            expect(c.a).to.equal(undefined);
            expect(c.hasOwnProperty("a")).to.equal(true);

            /* ADD ONE LINE */
            delete c.a;
            expect(c.hasOwnProperty("a")).to.equal(false);
        });

    });

    describe("test 3", function () {

        /**
         * Es dürfen maximal nur 3 Arrays erzeugt werden.
         * Zum Nachschlagen von Array-methoden: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
         */
        it("should run without errors", function () {
            /* ADD ONE LINE */
            var d = new Array(1, 2, 3), e = d;

            expect(d).to.eql([1, 2, 3]);
            expect(d === e).to.equal(true);

            /* ADD ONE LINE */
            d.push(4);

            expect(d).to.eql([1, 2, 3, 4]);
            expect(e).to.eql([1, 2, 3, 4]);

            /* ADD ONE LINE */
            d = [1, 2, 3, 4];

            expect(d).to.eql([1, 2, 3, 4]);
            expect(e).to.eql([1, 2, 3, 4]);
            expect(d === e).to.equal(false);

            /* ADD ONE LINE */
            var f = new Array(100);

            expect(f).to.be.instanceOf(Array);
            expect(f.length).to.equal(100);
        });

    });

    describe("test 4", function () {

        it("should run without errors", function () {
            /* ADD ONE LINE */
            var g = 3, h = "1";

            expect(typeof g).to.equal("number");
            expect(typeof h).to.equal("string");
            expect(g + h).to.equal("31");
            expect(h - g).to.equal(-2);
        });

    });

    describe("test 5", function () {

        it("should run without errors", function () {
            /* ADD ONE LINE */
            var i = 0;

            expect(typeof i).to.equal("number");
            expect(i == false).to.equal(true);

            /* ADD ONE LINE */
            var j = "";

            expect(typeof j).to.equal("string");
            expect(j == false).to.equal(true);

            /* ADD ONE LINE */
            var k = null;

            var hasBeenCalled = false;

            expect(typeof k).to.equal("object");
            if (!k) {
                hasBeenCalled = true;
            }
            expect(hasBeenCalled).to.equal(true);
        });
    });
});