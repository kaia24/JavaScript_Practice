class Ninja{
    constructor(name){
        this.name=name;
        this.health=10;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        return this;
    }
    drinkSake () {
        this.health += 10;
        return this;
    }
}
class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom-10;
    }
    speakWisdom(){
        const sake = super.drinkSake();
        sake;
        console.log("wise message!!");

    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake ();
ninja1.showStats();

const sensei1 = new Sensei("Hyabusa");
sensei1.sayName();
sensei1.showStats();
sensei1.drinkSake ();
sensei1.showStats();