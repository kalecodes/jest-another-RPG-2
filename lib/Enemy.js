const Character = require('./Character');
const Potion = require('./Potion');

// extends keyword allows method inheritance from Character to Enemy
class Enemy extends Character {
    constructor(name, weapon) {
        // call parent constructor here
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;