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