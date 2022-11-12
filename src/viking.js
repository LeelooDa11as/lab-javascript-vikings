// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return (this.strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`${this.name} has received ${damage} points of damage`);
        else 
            return (`${this.name} has died in act of combat`);
    }

    battleCry() {
        return ("Odin Owns You All!");
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0)
            return (`A Saxon has received ${damage} points of damage`);
        else
            return (`A Saxon has died in combat`);
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const vAttacker = Math.floor(this.vikingArmy.length * Math.random());
        //console.log(` ${this.vikingArmy[vAttacker]}`);
        const sVictim = Math.floor(this.saxonArmy.length * Math.random());
        //console.log(`{this.saxonArmy[]}`);
        const victim = this.saxonArmy[sVictim];
        const damage = this.vikingArmy[vAttacker].strength;
        let action = victim.receiveDamage(damage);

        if (!(victim.health > 0))
            this.saxonArmy.splice(sVictim, 1);
        return action;
    }
    saxonAttack() {
        const sAttacker = Math.floor(this.saxonArmy.length * Math.random());
        const vVictim = Math.floor(this.vikingArmy.length * Math.random());
        const victim = this.vikingArmy[vVictim]
        const damage = this.saxonArmy[sAttacker].strength;
        let action = victim.receiveDamage(damage);

        if (!(victim.health > 0))
            this.vikingArmy.splice(vVictim, 1);
        return action;
    }
    showStatus() {
        if (this.saxonArmy.length == 0)
            return "Vikings have won the war of the century!";
        else if (this.vikingArmy.length == 0)
            return "Saxons have fought for their lives and survived another day...";
        else
            return "Vikings and Saxons are still in the thick of battle.";
    }
    showArmies(){
        return `Viking Army has ${this.vikingArmy.length} soldiers. Saxon Army has ${this.saxonArmy.length} soldiers `
    }
    beginsGame() {
        const die = Math.floor(2 * Math.random());
        return die;
    }
}
/*
let game = new War();
let pepe = new Viking("Pepe", 100, 23);
let adele = new Viking("Adele", 137, 17);

let william = new Saxon(100, 18);
let johna = new Saxon (120, 25);

game.addViking(pepe);
game.addViking(adele);
game.addSaxon(william);
game.addSaxon(johna);
die = game.beginsGame();
while (true){
    console.log(game.vikingAttack());
    let status = game.showStatus();
    console.log(status);
    console.log(game.showArmies());
    if (status != "Vikings and Saxons are still in the thick of battle.")
        break;
    console.log(game.saxonAttack());
    status = game.showStatus();
    console.log(status);
    console.log(game.showArmies());
    if (status != "Vikings and Saxons are still in the thick of battle.")
        break;
}*/
