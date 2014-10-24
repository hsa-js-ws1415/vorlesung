/**
 * An den Stellen, wo ADD ONE LINE steht, darf maximal nur eine Zeile stehen in der maximal nur ein Semikolon verwendet wird.
 * Wo EDIT THIS LINE steht darf lediglich die nächste Zeile abgeändert werden.
 *
 * Gut: var a = 2, b = a + 1, c = b;
 * Böse: var a = 2; var b = a + 1; var c = b;
 */
describe("functions", function () {
    
    describe("test 1", function () {
        
        it("should run without errors", function () {
            expect(typeof a).to.equal("function");

            /* EDIT THIS LINE */
            function a() {};

            /* EDIT THIS LINE */
            var b = function () {}, c = b;

            expect(typeof b).to.equal("function");
            expect(typeof c).to.equal("function");

            var number = 0;
            function incrementNumber() {
                number++;
            }

            /* ADD ONE LINE */
            var d = incrementNumber;

            d();
            expect(number).to.equal(1);
        });
        
    });

    describe("test 2", function () {

        it("should run without errors", function () {
            var timesCalled = 0;

            function e() {
                timesCalled++;
                return this;
            }

            expect(e()).to.equal(/* INSERT CODE HERE */window);
            expect(timesCalled).to.equal(1);
        });

    });

    describe("test 3", function () {

        /**
         * Es darf kein neues Object erzeugt werden
         */
        it("should run without errors", function () {
            var o = { number1: 0, number2: 0 };

            function increment() {
                this.number1++;
                this.number2++;
            }

            /* ADD ONE LINE */
            o.increment = increment, o.increment();

            expect(o.number1).to.equal(1);
            expect(o.number2).to.equal(1);
        });

    });

    describe("test 4", function () {

        /**
         * Es darf kein neues Object erzeugt werden
         */
        it("should run without errors", function () {
            var o = { number1: 0, number2: 0 };

            o.increment = function () {
                this.number1++;
                this.number2++;
            };

            function decrement() {
                this.number1--;
                this.number2--;
            }

            /* ADD ONE LINE */
            o.decrement = decrement, o.decrement(), o.decrement();

            o.increment();

            expect(o.number1).to.equal(-1);
            expect(o.number2).to.equal(-1);
        });

    });

    describe("test 5", function () {

        /**
         * Es darf kein neues Object erzeugt werden
         */
        it("should run without errors", function () {
            var o = { number1: 0, number2: 0 };

            o.increment = function () {
                this.number1++;
                this.number2++;
            };

            /* ADD ONE LINE */
            function increment() {o.increment()};

            increment();

            expect(o.number1).to.equal(1);
            expect(o.number2).to.equal(1);
        });

    });

    describe("test 6", function () {

        it("should run without errors", function () {
            var o = { number1: 0, number2: 0 },
                doSomething = function () {
                    o.number1++;
                    o.number2++;
                    expect(this).to.not.equal(o);
                };

            doSomething = doSomething.bind(o);

            /* ADD ONE LINE */
            new doSomething();

            expect(o.number1).to.equal(1);
            expect(o.number2).to.equal(1);
        });

    });

    describe("test 7", function () {

        /**
         * Es darf kein neues Object erzeugt werden
         */
        it("should run without errors", function () {
            var o1 = {},
                o2;

            function doSomething() {
                /* ADD ONE LINE */
                return o2 = o1;
            }

            doSomething(o1);

            expect(o1 === o2).to.equal(true);
        });

    });

    describe("test 8", function () {

        it("should run without errors", function () {
            function returnLength() {
                /* ADD ONE LINE */
                return arguments.length;
            }

            expect(returnLength("a", "b", "c")).to.equal(3);
            expect(returnLength("a", "b", "c", "d")).to.equal(4);
        });

    });

    describe("test 9", function () {

        it("should run without errors", function () {
            function doSomething() {
                /* ADD ONE LINE */
                return i = 0;

            }
            doSomething();

            expect(i).to.equal(0);
        });

    });

    describe("test 10", function () {

        it("should run without errors", function () {
            var i = 0,
                j = 0;

            function increment() {
                /* ADD ONE LINE */
                return;

                i++;
                j++;
            }

            increment();
            increment();
            increment();

            expect(i).to.equal(0);
            expect(j).to.equal(0);
        });

    });

    describe("test 11", function () {

        /**
         *  Führe done() in einem Callback aus, den du an giveMeA() übergibst.
         */
        it("should run without errors", function (done) {
             function giveMeA(callback) {
                 setTimeout(callback, 500);
             }

             /* ADD CODE HERE */
            giveMeA(done);

        });

    });

    describe("test 12", function () {

        it("should run without errors", function () {
            var arr;

            // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

            arr = ["a", "b", "c"]
                .map(/* ADD CODE HERE */ function (letter) { return letter.toUpperCase(); })
                .reduce(/* ADD CODE HERE */ function (prev, letter) { return prev+letter; }, "");

            expect(arr).to.equal("ABC");
        });

    });

});