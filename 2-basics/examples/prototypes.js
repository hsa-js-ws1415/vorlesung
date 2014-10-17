function Monster(name) {
    this.name = name;
}
Monster.prototype.name = null;
Monster.prototype.attack = function () { };

function Godzilla(name) {
    // Ruft die Monster-Funktion auf this auf
    Monster.apply(this, arguments);
}
// Erzeugt ein neues Objekt das als Prototyp Monster.prototype hat
Godzilla.prototype = Object.create(Monster.prototype);
Godzilla.prototype.attack = function () {
    // Ruft die attack-Funktion des Monsters auf diesem Objekt auf
    Monster.prototype.attack.apply(this, arguments);
};