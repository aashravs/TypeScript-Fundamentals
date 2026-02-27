var myName : string = "Aashrav";
var score1 : number = 78;
var score2 : number = 86;
var sum :number = score1 + score2;
console.log("Name:"+myName);
console.log("Score 1:"+score1);
console.log("Score 2:"+score2);
console.log("Average of scores:"+(sum/2));
//this will print the name and scores in the console
var str : string = "1";
var str2: number = <number><any>str;
console.log(typeof str2);
//this will print the value of str2 which is 1, but it is of type number due to type assertion