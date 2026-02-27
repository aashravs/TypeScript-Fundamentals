var city:string = "Bengaluru";
var temperature : number = 25;
var isRaining = true;
function weatherReport(city:string,temperature:number,isRaining:boolean):void{
    console.log("In the city "+city+" it is "+temperature+" degrees celesius. Is it raning? "+isRaining);
}
weatherReport(city,temperature,isRaining);
