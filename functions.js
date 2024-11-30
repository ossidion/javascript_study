// function sayHello() {
//     console.log('hello');
// };

// // Functions can also be written as expressions, though we won't use this syntax in this course.

// const sayHello = function () {
//     console.log('hello');
// };


// function sayHello() {
//     console.log('hello');
// };

// sayHello();


// function sayHello(name) {
//     console.log('Hello ' + name + '!');
//   };
  
//   sayHello('Lucy'); // Hello Lucy!
//   sayHello('Sadiq'); // Hello Sadiq!
//   sayHello('Elenia'); // Hello Elenia!


// function greetPerson(greeting, person) {
// console.log(greeting + ' ' + person + '!');
// };

// greetPerson("Hola", "Jamie"); // Hola Jamie!
// greetPerson("Eloise", "Ciao"); // Eloise Ciao! - a developer mistake, but no error will be caused!


// function addNums(a, b) {
//     const total = a + b;
//     return total;
//   };
  
//   // Store return in a variable 'total'.
//   const total = addNums(10, 11);
  
//   console.log(total); // 21


// // Add properties to the animal objectusing the provided parameters as the values for keys called name, species and hasFur. Finally, 
// // return the created animal.

// function createAnimal(name, species, hasFur){
//     const animal = {}
//     // Don't change any code above this line
//     animal.name = name
//     animal.species = species
//     animal.hasFur = hasFur
//     return animal
//   }


let hasAnti = false
const exampleColony = [
    {
        name: "anthony",
        type: "worker"
    },
    {
        name: "dec",
        type: "zombie"
    },
    {
        name: "marie-antoinette",
        type: "queen"
    },
    {
        name: "adam",
        type: "worker"
    }
];


function checkIfHealthyColony(colony, hasAntidote) {
    
    const col = colony;
    const hasAnt = hasAntidote

    let numZombies = 0
    let antidoteStatus = 0
    let colonyHealth = false
    let zombieVariable = 'zombie'
    let locationKey1 = 'type'

    for (const key in col) { 
        const value = col[key].type
        if (value === zombieVariable) {
            numZombies += 1
        }
    }

    if (hasAnt === true) {
        antidoteStatus += 1
    }

    if (numZombies < 1 || antidoteStatus === 1) {
        colonyHealth = true
    }   else {
        colonyHealth = false
    }   
    return colonyHealth
}

    

console.log(checkIfHealthyColony(exampleColony, hasAnti))