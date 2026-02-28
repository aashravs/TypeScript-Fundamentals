//6th Case study
function processTransaction(amount:number,description:string | undefined, isCredit:boolean):void{
    if(amount<0){
        throw new Error("amount is less than 0");
    }
    if(description==undefined){
        description = "description not provided";
    }
    let type = isCredit ? "Credit" : "Debit";
    console.log("Summary of Transaction:");
    console.log("Type: ",type);
    console.log("Amount: ",amount);
    console.log("Description: ",description);
}
processTransaction(4000,"salary",true);