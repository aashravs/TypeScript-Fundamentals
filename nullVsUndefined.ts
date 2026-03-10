type Profile = {
    username : string;
    bio : string |null;
    avatarUrl? : string;
};
let userA : Profile = {
username : "aashrav",
bio : null,
}
let userB : Profile= {
    username:"vikram",
    bio : "' i am passionate'",
    avatarUrl : "www.linkedin.com/vikram",
}
function ShowProfile(user : Profile):void{
    let userbio = user.bio === null ? "default bio" : user.bio;
    let userUrl = user.avatarUrl === undefined ? "default url" : user.avatarUrl;
    console.log("The username is " + user.username + " bio is "+userbio+" and url is " +userUrl);
}
ShowProfile(userA);
ShowProfile(userB);
