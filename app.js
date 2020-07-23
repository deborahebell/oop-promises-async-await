//object oriented programming

const dog = {
    name: "Light",
    goodBoy: true
    gender: "girl"

};

const dogTwo ={
    name: 'Rusty'
    color: 'golden'
};

dogTwo._proto_ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

//Make two objects and one object should inherit from the other

const designer = {
    name: "Kanye"
    desType: "fashion"
    color: "black"
};

const designerTwo = {
    name: "Virgil"
    age: "35"
};

designerTwo._proto_ = designer;

console.log(designer);
console.log(designerTwo);
console.log(designerTwo.desType);
console.log(designerTwo.color);

//Constructor Functions

let stacy = new user('stacy')
let lizzie = new user('lizzie')

//new-user is optional name for the function

console.log(stacy.name);
console.log(izzie.name);

function bodyParts(name, action, location) {
    this.name = name;
    this.action = action;
    this.location = location;

    //return this
};

let ankles = new bodyParts('tibia', 'walk','distal');
console.log(ankles);
console.log(ankles.name);

let arms = new bodyParts('ulna','lift', 'proximal');
let torso = new bodyParts('abdomen','stabilize','medial')

console.log(arms)
console.log(arms.name)

console.log(torso)
console.log(torso.name)

// make a constructor function
// make 3 new variables with that constructor function