const Character = require('./Character');
const Potion = require('./Potion');

// extends keyword allows method inheritance from Character to Player
class Player extends Character {
    constructor(name = '') {
        // call parent constructor here and pass name to Character class
        super(name);

        // this.name = name;

        // this.health = Math.floor(Math.random() * 10 + 95);
        // this.strength = Math.floor(Math.random() * 5 + 7);
        // this.agility = Math.floor(Math.random() * 5 + 7);


        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        // remove item from array at specified index and move to new array, save value in new array index 0 to potion variable
        const potion = this.getInventory().splice(index, 1)[0];

        switch(potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}


// inherit prototype methods from Character constructor
// Player.prototype = Object.create(Character.prototype);

// returns an object with various player properties
// Player.prototype.getStats = function() {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// returns the inventory array or false if empty
// Player.prototype.getInventory = function() {
//     if (this.inventory.length) {
//         return this.inventory;
//     }
//     return false;
// };

// Player.prototype.addPotion = function(potion) {
//     this.inventory.push(potion);
// };

// Player.prototype.usePotion = function(index) {
//     // remove item from array at specified index and move to new array, save value in new array index 0 to potion variable
//     const potion = this.getInventory().splice(index, 1)[0];

//     switch(potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// };

module.exports = Player;