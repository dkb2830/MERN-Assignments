class Ninja {
    constructor(ninjaName, ninjaHealth){
        this.name = ninjaName
        this.health = ninjaHealth
        this.strength = 3
        this.speed = 3
    }
    sayName() {
        this.name;
    }
    showStats() {
        this.name;
        this.health;
        this.strength;
        this.speed;
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(wisdom) {
        super(200, 10, 10, wisdom);
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in a month, two programmers can do in two months");
    }
}

