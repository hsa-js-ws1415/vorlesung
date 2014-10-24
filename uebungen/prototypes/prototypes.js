/**
 * Bearbeite ausschließlich die Stellen, an denen ADD CODE HERE steht
 */
describe("prototypes", function () {
    var godzilla;
    var godzilla1;
    var godzilla2;
    
    describe("test 1", function () {

        it("should run without errors", function () {

            /* ADD CODE HERE */
            function Godzilla() {}
            Godzilla.prototype.health = 10;

            godzilla = new Godzilla();
            /* END */

            expect(godzilla).to.be.an.instanceof(Godzilla);
            expect(godzilla.health).to.equal(10);
            expect(godzilla.hasOwnProperty("health")).to.equal(false);
        });

    });

    describe("test 2", function () {

        it("should run without errors", function () {

            /* ADD CODE HERE */
            function Godzilla() {}
            Godzilla.prototype.health = 10;

            godzilla = new Godzilla();
            godzilla.health = 20;
            /* END */

            expect(godzilla).to.be.an.instanceof(Godzilla);
            expect(godzilla.health).to.equal(20);
            delete godzilla.health;
            expect(godzilla.health).to.equal(10);
        });

    });

    describe("test 3", function () {

        it("should run without errors", function () {

            /* ADD CODE HERE */
            function Godzilla() {}
            Godzilla.prototype.victims;

            godzilla1 = new Godzilla();
            godzilla2 = new Godzilla();
            /* END */


            expect(godzilla1).to.be.an.instanceof(Godzilla);
            expect(godzilla1.victims).to.equal(godzilla2.victims);
        });

    });

    describe("test 4", function () {

        it("should run without errors", function () {

            /* ADD CODE HERE */
            function Godzilla() { this.victims = [] }

            godzilla1 = new Godzilla();
            godzilla2 = new Godzilla();
            /* END */

            godzilla1.victims.push("Human");

            expect(godzilla1.victims).to.contain("Human");
            expect(godzilla2.victims).to.have.length(0);
        });

    });

    describe("test 5", function () {

        it("should run without errors", function () {

            /* ADD CODE HERE */
            function Monster() {}
            function Godzilla() {}
            Godzilla.prototype = Object.create(Monster.prototype);

            godzilla = new Godzilla();
            /* END */

            expect(godzilla).to.be.an.instanceof(Godzilla);
            expect(godzilla).to.be.an.instanceof(Monster);
        });

    });

    describe("test 6", function () {

        it("should run without errors", function () {

            var hasBeenCalled = false;

            function Monster() {
                hasBeenCalled = true;
                this.victims = [];
            }

            /* ADD CODE HERE */
            function Godzilla() {
                Monster.apply(this);
            }
            Godzilla.prototype = Object.create(Monster.prototype);

            godzilla = new Godzilla();
            /* END */

            expect(godzilla).to.be.an.instanceof(Godzilla);
            expect(godzilla).to.be.an.instanceof(Monster);
            expect(godzilla.hasOwnProperty("victims")).to.equal(true);
            expect(hasBeenCalled).to.equal(true);
        });

    });

});