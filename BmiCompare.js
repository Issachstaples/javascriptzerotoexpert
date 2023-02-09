const Person = function(name,
 weight, height) {
 this.name = name;
 this.weight = weight;
 this.height = height;

}
const Mark = new Person("Mark", 78,
 1.69);
const John = new Person("John", 92,
 1.95);
const Mark2 = new Person("Mark2",
 95, 1.88);
const John2 = new Person("John2",
 85, 1.76);

function bmiCalc(weight, height) {
 this.weight = weight;
 this.height = height;
 return weight / (height ** 2);
}
/*console.log(bmiCalc(John.weight, John.height));*/
//var markIsHigher = TRUE;
let johnScore = bmiCalc(John.weight,
 John.height);
let markScore = bmiCalc(Mark.weight,
 Mark.height);
let john2Score = bmiCalc(John2
 .weight, John2.height);
let mark2Score = bmiCalc(Mark2
 .weight, Mark2.height);

/*console.log(johnScore, markScore,
 john2Score, mark2Score);*/
function compareBmi() {
  if  (markScore >= johnScore) {
    console.log("results:", John.name, johnScore, Mark.name, markScore, "Mark is the fattest!");
    let markIsHigher = true;
  } else {
     console.log("results:" , Mark.name, markScore, John.name, johnScore, "John is the fatty boy!");
  }
    if (mark2Score >= john2Score) {
     console.log("results2:", John2.name, john2Score, Mark2.name, mark2Score, "Mark2 is the chubby boy!!");
     let mark2IsHigher = true;
    } else {
       console.log("results2:", Mark2.name, mark2Score, John2.name, john2Score, "John2 is a chunky monkey!!");
    }
}
compareBmi();
