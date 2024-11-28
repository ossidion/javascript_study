for (let i = 0; i < 3; i++) {
console.log(i)
}

// i++ is another way of writing i = i + 1 - we reassign the value of i to be itself plus one.

// This is a typical way to manage a counter set up in a start expression.

// i++ is also known as an increment by one of i. Similarly, i--, or i = i - 1 is syntax we could use to decrement i by one.

// You can increment or decrement by other amounts using this syntax:

// i += 3 // equivalent to i = i + 3
// i -= 5 // equivalent to i = i - 5

// Running through code and translating it into human language - especially non-linear code like loops - is an extremely important 
// skill. It allows you to interrogate your code, which is particularly important when debugging, or explaining your code to other people.

const todoList = ['do the laundry', 'make dinner', 'mount the spice rack'];

for (let i = 0; i < todoList.length; i++) {
  const job = todoList[i]
  console.log('It\'s time to ' + job)
};

for (let i = todoList.length - 1; i >= 0; i--) {
    // code to execute
    const job = todoList[i]
    console.log('It\'s time to ' + job)
  };


const array = [4, 8, 12, 16, 20, 24, 28, 32];
  
// for (let i = 0; i < array.length; i++){
//     const number = array[i]
//     console.log(number)
//   }
  
// iterate through only the first half of an array.
console.log('iterate through only the first half of an array.')

for (let i = 0; i < array.length /2; i++){
  const number = array[i]
  console.log(number)
}

// ignore the first or last item in the array.
console.log('ignore the first or last item in the array.')

for (let i = 1; i < array.length -1; i++){
  const number = array[i]
  console.log(number)
}

// iterate through only items at even or odd index positions.
console.log('iterate through only items at even or odd index positions.')

for (let i = 0; i < array.length; i+=2){
  const number = array[i]
  console.log(number)
}



// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// for (let i = 0; i < alphabet.length; i++) {
//   console.log('the letter at position ' + i + ' is ' + alphabet[i])
// };



// Use a for loop to iterate over the alphabet array, and reassign every fifth element's value, including the first element, to the
// uppercase version of the letter using .toUpperCase().

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Write your for loop below

for (let i = 0; i < alphabet.length; i += 5) {
  const foo = alphabet[i].toUpperCase();
  alphabet[i] = foo
};


// We're printing name badges, but the ones we have will only fit names with seven characters or fewer. So we need to order some extra large
// name badges - but how many?

const invitees = ['Persephone', 'Jim', 'Angelina', 'Haz', 'Lou', 'Euripedes'];

/* Approach 1 */

let longNameCount = 0

for (let i = 0; i < invitees.length; i++) {
    const currentName = invitees[i]
    if (currentName.length > 7) {
        longNameCount += 1
    }
};

console.log(longNameCount);

/* Approach 2 */

let longNames = []

for (let i = 0; i < invitees.length; i++) {
    const currentName = invitees[i]
    if (currentName.length > 7) {
        longNames.push(currentName)
    }
};

console.log(longNames.length);


// These are the characters at the even indexes of the string.

const string = 'hello'

for (let i = 0 ; i < string.length; i++) {
  if (i % 2 === 0) {
    console.log(string[i])
  }
}


// Write a loop that contains an if statement that would only log each even number in the array.

const numbers = [2, 4, 5, 6, 9, 10, 11, 12]
  // Start writing your code below

for (let i = 0 ; i < numbers.length; i++) {
  const num = numbers[i]
  if (num % 2 === 0) {
    console.log(num)
  }
}

// Write a for loop which finds the index position of the duckling and assigns it to the provided variable 'ducklingHere'.

console.log('ducklingHere.')

// const animals = ['Alligator', 'Fox', 'Armadillo', 'Tiger', 'Duckling', 'Raccoon', 'Chicken', 'Sheep', 'Dog', 'Antelope'];
// let ducklingHere;
// // Start writing your code below

// for (let i = 0 ; i < animals.length; i++) {
//   const string = animals[i]
//   if (string === 'Duckling') {
//     ducklingHere = i
//     console.log(ducklingHere)

//   }
// }


// Use a for loop and conditional logic to count all the animals whose names start with the letter 'A'.

const animals = ['Alligator', 'Fox', 'Armadillo', 'Tiger', 'Anteater', 'Raccoon', 'Chicken', 'Sheep', 'Dog', 'Antelope', 'Albatross', 'Cat', 'Alpaca', 'Ape', 'Anaconda'];
let countAnimals = 0;

// Start writing your code below
for (let i = 0 ; i < animals.length; i++) {
  const string = animals[i]
  if (string[0] === 'A') {
    countAnimals +=1
  }
};

// console.log(counter)




// 
let serialNumbers = [32438, 34193, 149143, 4329429, 98537, 238791, 23492, 298342];

const efficientSerialNumbers = []


for (let i = 0 ; i < serialNumbers.length; i++) {
  const num = serialNumbers[i]
  if (num.toString().length === 6) {
      if (num % 2 === 1) {
          efficientSerialNumbers.push(num)
      }
  }
}

console.log(efficientSerialNumbers)
