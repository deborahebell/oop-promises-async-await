// const dog = {
//     name: "Light",
//     goodBoy: true
// };


// const dogTwo = {
//     name: 'Rusty'
//     dogColor: 'golden'
// };

// dogTwo._proto_ = dog;

// console.log(dog);
// console.log(dogTwo);

// console.log(dogTwo.goodBoy);
// console.log(dogTwo.name);

// //Make two objects and one object should inherit from the other

// const designer = {
//     name: "Kanye"
//     desType: "fashion"
//     color: "black"
// };

// const designerTwo = {
//     name: "Virgil"
//     age: "35"
// };

// designerTwo._proto_ = designer;

// console.log(designer);
// console.log(designerTwo);
// console.log(designerTwo.desType);
// console.log(designerTwo.color);

// //Constructor Functions

// let stacy = new user('stacy')
// let lizzie = new user('lizzie')

// //new-user is optional name for the function

// console.log(stacy.name);
// console.log(izzie.name);

// function bodyParts(name, action, location) {
//     this.name = name;
//     this.action = action;
//     this.location = location;
//         this.intro = function(){
//         console.log("Please take care of your" + this.name + "!")
//     };
//     //return this
// };

// let ankles = new bodyParts('tibia', 'walk','distal');
// let arms = new bodyParts('ulna','lift', 'proximal');
// let torso = new bodyParts('abdomen','stabilize','medial')

// console.log(ankles);
// console.log(ankles.name);

// console.log(arms)
// console.log(arms.name)

// console.log(torso)
// console.log(torso.name)

// // make a constructor function
// // make 3 new variables with that constructor function

class GithubProfile {
    constructor(username,name,url){
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro() {
        console.log(`My name is ${this.name} and  my username is @${this.username}`);
    }
}
fetch('https://api.github.com/users/deborahebell')
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);
    let githubURL = data.url;
    console.log(githubURL);
    let githubUsername = data.login;
    console.log(githubUsername);
    let githubName = data.name;
    

    let deb = new GithubProfile(githubUsername, githubName,githubURL);
    console.log(deb);

    deb.intro();

});

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

willIGetNewPhone.then(result => {
    console.log(result);
})