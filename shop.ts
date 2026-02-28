//2nd Case Study
let fruitName: string = "mango";
function favFruit(name:string):void {
    console.log("My favourite fruit is "+name);
}
favFruit(fruitName);

//this will print the name of the favourite fruit
let a : number = 5;
function doubleValue(num: number):void {
    num = num * 2;
    console.log("The value of the number is: " + num);
}
doubleValue(a);
// this is single line comment
/*
this is the first line of the  multi line comment
this is the second line of the multi line comment
*/
class Person{
    sayHello(yourName:string):void {
        console.log("Hello "+yourName+", how are you?");
    }
}
let anotherPerson = new Person();
anotherPerson.sayHello("Aashrav");
//this prints a greeting saying "Hello Aashrav, how are you?"