// refactored with ES6 syntax using 'class' keyword
class Potion {
    // constructor() is necessary here because we want to be able to supply an atgument to the clase (name)
    // if not intended to received argument, this can be ommited
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    
        if (this.name === 'health') {
            // random number between 30 and 40
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            // random number between 7 and 12
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}


module.exports = Potion;