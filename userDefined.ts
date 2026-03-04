enum Role{Doctor, Admin, Nurse}
interface Staff{
    id : string,
    name : string,
    role : Role,
}
let members : Staff[] = [
    {id : "D1", name : "John", role : Role.Doctor},
    {id : "A1", name : "Lisa", role : Role.Admin},
    {id : "N1", name : "Abel", role : Role.Nurse}
]
function Details() : void {
    for (let Staff of members){
        console.log("Name: "+ Staff.name);
        console.log("Role: "+ Role[Staff.role]);
        console.log("\n");
    }
}
Details();