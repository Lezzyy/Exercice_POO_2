// EXERCICE 2
function Guerrier(name, attack, defense, health) {
  this.name = name;
  this.attack = attack;
  this.defence = defense;
  this.health = health;
  this.combat = function(Ennemi) {
    Ennemi.health -= this.attack;
    alert(Ennemi.name+" "+this.name);
    alert(this.name+" "+this.health);
  };
}
var attaquant = new Guerrier("John", 3, 2, 10);
var defenseur = new Guerrier ("Jim", 4, 3, 10);


function Magicien (name, attack, defense, health, mana){
  this.name = name;
  this.attack = attack;
  this.defence = defense;
  this.health = health;
  this.mana = mana;
  this.soin = function (){
    if (this.mana>=10){
      this.mana-=10;
      this.health+=10;
  alert(this.name+" "+this.health);
    }
  };
}
var mage= new Magicien ("Merlin", 7, 5, 30, 30);

attaquant.combat(mage);
defenseur.combat(mage);
mage.soin();
attaquant.combat(defenseur);
mage.soin();

mage.soin();
mage.combat(attaquant);
mage.soin();
attaquant.combat(mage);
mage.soin();
defenseur.combat(mage);
mage.soin();
mage.combat(defenseur);
mage.soin();
defenseur.combat(mage);
mage.soin();
