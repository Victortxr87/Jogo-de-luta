class Character{
   
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

   
    constructor(name){
        this.name = name;
    }


get life() {
    return this._life;
}
set life(newlife){
    this._life = newlife <0 ? 0 : newlife;
}

}

class knight extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character{
    constructor(){
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}



class Stage {

constructor(fighter1, fighter2, fighter1E1, fighter2E1, logObject) {

    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1E1 = fighter1E1;
     this.fighter2E1 = fighter2E1;
     this.log = logObject;
}

start(){

    this.update();
    this.fighter1E1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
    this.fighter2E1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
}

update() {

    this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
    let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1E1.querySelector('.bar').style.width = `${f1pct}%`;


    this.fighter2E1.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
    let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2E1.querySelector('.bar').style.width = `${f2pct}%`;

}

doAttack(attacking, attacked) {

    if(attacking.life <= 0 || attacked.life <= 0) {

       this.log.addMessage(`Atacando cachorro morto`);
       return;
    }
    let attackFactor = (Math.random() * 2).toFixed(2);
    let defenseFactor = (Math.random() * 2).toFixed(2);


    let actualAttack = attacking.attack * attackFactor;
    let actualdefense = attacked.defense * defenseFactor;

    if(actualAttack > actualdefense) {
    attacked.life -= actualAttack;
    this.log.addMessage(`${attacking.name} Causou ${actualAttack.toFixed(2)} de dano em ${attacked.name} `);
    } else {
         this.log.addMessage(`${attacked.name} Conseguiu defender`);
    }



    this.update();

}

}

class Log {

    list = [];

    constructor(listE1) {

        this.listE1 = listE1;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {

        this.listE1.innerHTML = '';

        for ( let i in this.list) {
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

}
