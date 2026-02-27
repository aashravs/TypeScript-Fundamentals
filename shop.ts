let fruitName1: string = "banana";
let fruitName2: string = "mango";
function printProduct(name:string):void {
    console.log("Product: "+name);
}
printProduct(fruitName1);
printProduct(fruitName2);
//this will print the product name

class Store{
    open():void {
        console.log("The shop is open");
    }
}
let store = new Store();
store.open();
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