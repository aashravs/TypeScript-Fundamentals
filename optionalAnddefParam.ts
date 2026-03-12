// 13th case study
function describePerson(name : string, age? : number) : void {
    if(typeof(age) === "number"){
    console.log(`Name: ${name} | Age: ${age}`);
    }
    else{
    console.log(`Name: ${name} | Age: Unkown`);
    }
};
function calculatePrice(basePrice : number, discount : number = 0.1) : number{
    return basePrice * discount;
};
describePerson("Aashrav");
describePerson("Abhimanyu", 20);
console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 0.5)); 
