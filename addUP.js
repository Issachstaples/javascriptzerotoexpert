let N = 10;
class = Spell {
 constructor(name, value1,
  value2) {
  this.name = name;
  this.value1 = value1;
  this.value2 = value2;
 }
}
const firstSpell = new Spell(
 "spell1", "fail", "pass");


console.log(firstSpell.name);
