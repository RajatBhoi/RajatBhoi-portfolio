//console.log("Rajat");
const marvel_heros = ["Thor","Deadpool","Hulk"]
const dc_heros = ["Flash","Batman","Doom"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);

const allnewheros = [...marvel_heros,...dc_heros]
//console.log(allnewheros);

//const another_array = [1,2,3,[4,5,6],7,[8,9,[3,6]]]
//const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);



//console.log(Array.isArray("Rajat"));
//console.log(Array.from("Rajat"));
const JSuser = {
    name: "Rajat",
    age: 27,
    location: "Balangir",
    email: "rajat@skillrevive.com",
    isLoggedIn:false,
    lastloginDays: ["Monday","Thursday"]
}

/*console.log(typeof JSuser.email);
console.log(JSuser["email"]);
JSuser.email="rajat.bhoi@google.com"
Object.freeze(JSuser)
JSuser.email="rajat@outlook.com"
console.log(JSuser);*/
JSuser.greeting =function(){
    console.log("Hello JS user");
}

JSuser.greetingtwo =function(){
    console.log(`Hello JS user ,${this.name}`)
}

console.log(JSuser.greetingtwo());