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
            function a() {}

            /* EDIT THIS LINE */
            var c = function () {}, b = function () {};

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

            expect(e()).to.equal(window);
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
            increment.call(o);
            increment();
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
            o.increment = decrement;
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
            increment = o.increment.bind(o);
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
            new doSomething()
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
                o2 = o1;
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
                i = 0;
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

});
