//4th Case Study
let score: number = 10;

if (score > 5) {
    let score: number = 15; 
    console.log("Inside block: " + score);
}

console.log("Outside block: " + score);
const country : string = "India";

//country = "USA";
//Cannot assign to 'country' because it is a constant
score = 20;
console.log("Your score is "+score);