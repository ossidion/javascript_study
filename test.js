// 1 - Log To Number

// function logToNumber(num) {
//     const numberVariable = num
//     let counter = 1
//     for (let i = 0; i < numberVariable; i ++) {
//         console.log(counter)
//         counter += 1
//       };
    
    
//     }


//     // return console.log(numberList)

//     logToNumber(1);
//     // should produce 1 log
//     // 1
    
//     logToNumber(3);
//     // should produce 3 logs
//     // 1
//     // 2
//     // 3
    
//     logToNumber(10);
//     // should produce 10 logs
//     // 1
//     // 2
//     // ...
//     // 9
//     // 10




// 2 - Calculate the Rental Cost

// function calculateRentalCost(releaseDate, isMember) {
//     const releaseDateVariable = releaseDate
//     const isMemberVariable = isMember
//     let rentalCost = 0

//     if (releaseDateVariable >= 2020) {
//         rentalCost = 5
//       } else {
//         rentalCost = 4
//       }

//     if (isMemberVariable) {
//         rentalCost = rentalCost - 1
        
//     }
    
    
//     return rentalCost
// // }


// calculateRentalCost(2020, false);
// // should return 5

// calculateRentalCost(2022, true);
// // should return 4

// calculateRentalCost(2018, false);
// // should return 4

// calculateRentalCost(2016, true);
// // should return 3


// 3 - Count The Letters

// function countTheLetters(string, letter) {
//     const stringVariable = string
//     const letterVariable = letter
//     let letterList = stringVariable.split("");
//     let counter = 0


    

//     for (let i = 0; i < letterList.length; i ++) {
//         let value = letterList[i]
//         if (letterVariable === value) {
//             counter += 1
//         }
        
//     }
    
//     return console.log(counter)
// }


// countTheLetters("hello", "h");
// // should return 1

// countTheLetters("northcoders", "o");
// // should return 2

// countTheLetters("hello northcoders team", "e");
// // should return 3

// countTheLetters("javascript", "q");
// // should return 0


// 4 - Sum the 3s and 5s

// function sumTheThreesAndFives(numbers) {
//     let numberVariable = numbers
//     let numbersList = []
//     let finalNumber = 0

//     for (let i = 0; i < numberVariable.length; i ++) {
//         if (numberVariable[i] === 3) {
//             numbersList.push(numberVariable[i])
//         } else if (numberVariable[i] === 5) {
//             numbersList.push(numberVariable[i])
//         }
//     }

//     for (let i = 0; i < numbersList.length; i ++) {
//         finalNumber += numbersList[i]
//     }
//     return console.log(finalNumber)
// }

// sumTheThreesAndFives([]);
// // should return 0

// sumTheThreesAndFives([ 1, 2, 3 ]);
// // should return 3

// sumTheThreesAndFives([ 1, 2, 3, 4, 5 ]);
// // should return 8

// sumTheThreesAndFives([ 5, 5, 5, 3, 3 ]);
// // should return 21



// 5 - Cargo Capacity Checker

// function checkCargoCapacity(cargoItems, maxCapacity) {
// //     const cargoItemsVariable = cargoItems
// //     const maxCapacityVariable = maxCapacity
// //     let weightOfBoxes = cargoItemsVariable.box1 + cargoItemsVariable.box2 + cargoItemsVariable.box3
// //     let text = ``

// //     if (weightOfBoxes <= maxCapacityVariable) {
// //         text = `Cargo hold has enough room for a weight of ${weightOfBoxes}`
// //     } else {
// //         text = `There is not enough room for a weight of ${weightOfBoxes}`
// //     }

// //     return console.log(text)

// //     }


// checkCargoCapacity({ box1: 10, box2: 15, box3: 5 }, 50);
// // should return "Cargo hold has enough room for a weight of 30"

// checkCargoCapacity({ box1: 10, box2: 20, box3: 10 }, 40);
// // should return "Cargo hold has enough room for a weight of 40"

// checkCargoCapacity({ box1: 10, box2: 20, box3: 10 }, 30);
// // should return "There is not enough room for a weight of 40"



// 6 - From Shelf to Basket

// The function, transferProduct, has been created, but it's currently failing the tests.

// As a function, it takes three arguments, shelf, basket, and product. shelf and basket are objects, containing different products. 

// product is a string representing a product found in shelf. The function should copy this property, both key and value, to basket and delete it from shelf.

// Note: This function does not need to return anything.


// function transferProduct(shelf, basket, product) {
//     const productToTransfer = shelf[product]; // dynamic variable (accessed via [] rather than .)
//     basket[product] = productToTransfer;
//     delete shelf[product]
//     console.log(basket[product])
// }


// const shelf = { apple: "Keeps the doctor away", lamp: "Shedding light on the situation" };
// const basket = { shoe: "Just the one" };

// transferProduct(shelf, basket, "apple");

// console.log(shelf) // { lamp: "Shedding light on the situation" }
// console.log(basket) // { shoe: "Just the one", apple: "Keeps the doctor away" }




// 7 - Update the Student's Grades

// This function takes an object containing a subject key and a grade value expressed as a number out of 100.

// Iterate through the grades object, and for each subject:

// If the grade number value is 70 or above, amend the value to "pass".
// Otherwise, change the grade to "fail".
// The function should return the updated grades object.

function updateStudentGrades(grades) {
    for (const key in grades) {             // Iterate through each key of the 'grades' object.
        const grade = grades[key]           // Store the value of this iteration of the keys in variable 'grade'.
        if (grade >= 70) {              
            grades[key] = "pass"            // Accessing the value of this iteration of the properties and updating it with 'pass'.
        } else {
            grades[key] = "fail"            // Accessing the value of this iteration of the properties and updating it with 'fail'.
        }
    }

    
    return console.log(grades)
}

updateStudentGrades({ maths: 85 });
// should return { maths: "pass" }

updateStudentGrades({ english: 70 });
// should return { english: "pass" }

updateStudentGrades({ science: 60 });
// should return { science: "fail" }

updateStudentGrades({ maths: 85, english: 60 });
// should return { maths: "pass", english: "fail" }




// 8 - Return The Middle Character

// This function takes a string of at least one character, and it should return the middle character(s) from that string.

// If the string is of odd length, the function should return a single character. If the string is of even length, 
// it should return the middle two characters concatenated together.

// function returnMiddleCharacter(string) {
//     const stringLength = string.length  // Getting length of string.
//     const halfStringLength = string.length / 2  // Halving the length of the string.
//     const halfStringLengthMinusOne = halfStringLength - 1   // Storing halfsting length -1 for even length string.
//     const halfStringLengthPlusOne = halfStringLength + 1    // Storing halfsting length +1 for even length string.
//     const oddString = halfStringLength - 0.5    // Storing halfsting length -0.5 for odd length string.
//     let stringReturn = ""
    
//     if (stringLength % 2 === 0) {   // If even conditional
//         stringReturn = string.slice(halfStringLengthMinusOne, halfStringLengthPlusOne)  // Slice two middle characters if even length. 
//     } else (stringReturn = string[oddString])   // Slice middle character if odd length.
    
//     console.log(stringReturn)
// }

// returnMiddleCharacter("dog");
// // should return "o"

// returnMiddleCharacter("alexanders");
// // should return "og"

// returnMiddleCharacter("sweet candy")
// // should return " "

// returnMiddleCharacter("I'll be back");
// // should return "be"

// returnMiddleCharacter("The quick brown fox jumps over the lazy dog");
// // should return "u"





// 9 - Get Nested First And Last

// This function takes a multi-dimensional array as an argument. It should return an array containing the first element of
// the first nested array, and the last element of the last nested array. If the input array only contains one nested array,
// the first and last element will come from the same array.

// If the original input array is empty (i.e. no nested arrays within it), then the function should return an empty array.

// function getNestedFirstAndLast(array) {
    
// let arrayList = []  // Initialize empty list to store results. This will be returned as empty array if 'array' argument is empty.

//     if (array.length > 0) {     // Condition so that we only execute block if more than 0 otherwise program crash.
//                                 // i.e. will be trying to seek arrayLength - 1 below for our 'arrayEnd' variable, which won't exist if 0. 
//         const arrayLength = array.length    // Store length of array in variable.
//         const arrayEnd = arrayLength - 1    // Store length of array - 1 in variable to access last element in outer array.
//         const nestedArray = array[arrayEnd] // Store last list in variable and access it in line below. 
//         const nestedArrayEnd = nestedArray.length -1    // Store length of last list - 1 in variable to access last element in inner list.

//         arrayList.push(array[0][0])     // Accessing and pushing list 0 and integer 0 of nested array.
//         arrayList.push(array[arrayEnd][nestedArrayEnd]) // Accessing and pushing final list and final integer of nested array. 
//     }

//     console.log(arrayList)
// }

// getNestedFirstAndLast([[ 16 ], [ 82 ]]);
// // should return [ 16, 82 ]

// getNestedFirstAndLast([[ 2, 79, 13 ], [ 16, 34, 45 ], [ 21, 9, 98 ]]);
// // should return [ 2, 98 ]

// getNestedFirstAndLast([[ 16, 22 ]]);
// // should return [ 16, 22 ]

// getNestedFirstAndLast([]);
// // should return []




// 10 - Add Job Title

// This function takes an array of objects representing graduates with three properties, name, course and graduationYear.

// The function should add a new property to each object called jobTitle with a value based on the graduate's course and graduationYear:

// If the course is Software Development and the graduationYear is before 2020, their jobTitle should be "Senior Software Developer".
// If the course is Software Development and the graduationYear is 2020 or after, their jobTitle should be "Junior Software Developer".
// If the course is Data Engineering and the graduationYear is before 2020, their jobTitle should be "Senior Data Engineer".
// If the course is Data Engineering and the graduationYear is 2020 or after, their jobTitle should be "Junior Data Engineer".
// The function should then return the array of graduates with the new property on each object.

// function addJobTitle(graduates) {
//     const seniorSoftwareDeveloper = "Senior Software Developer" 
//     const juniorSoftwareDeveloper = "Junior Software Developer"
//     const seniorDataEngineer = "Senior Data Engineer"
//     const juniorDataEngineer = "Junior Data Engineer"


//     for (let i = 0; i < graduates.length; i ++) {
//         if (graduates[i].course === "Software Development") {   // Acccessing the course property object iteration and expressing conditional. 
//             if (graduates[i].graduationYear < 2020) {           // Accessing graduation year of object iteration and expressing conditional. 
//                 graduates[i].jobTitle = seniorSoftwareDeveloper // Declaring new property within current object iteration.
//             } else {
//                 graduates[i].jobTitle = juniorSoftwareDeveloper
//             }
//         } else {
//             if (graduates[i].graduationYear < 2020) {
//                 graduates[i].jobTitle = seniorDataEngineer
//             } else {
//                 graduates[i].jobTitle = juniorDataEngineer
//             }
            
//         }
        
//     }
//     return console.log(graduates)
// }

// addJobTitle([{ name: "Jonny JavaScript", course: "Software Development", graduationYear: 2018 }]);
// // should return [
// //   { 
// //     name: "Jonny JavaScript",
// //     course: "Software Development",
// //     graduationYear: 2018,
// //     jobTitle: "Senior Software Developer"
// //   }
// // ]

// addJobTitle([{ name: "Petra Python", course: "Data Engineering", graduationYear: 2022 }]);
// // should return [
//  //  { 
// //     name: "Petra Python",
// //     course: "Data Engineering",
// //     graduationYear: 2022,
// //     jobTitle: "Junior Data Engineer"
// //   }
// // ]

// // addJobTitle([
// //   { name: "Jonny JavaScript", course: "Software Development", graduationYear: 2020 },
// //   { name: "Petra Python", course: "Data Engineering", graduationYear: 2019 }
// //   ]);
// // should return [
// //    { 
// //      name: "Jonny JavaScript", 
// //      course: "Software Development",
// //      graduationYear: 2020,
// //      jobTitle: "Junior Software Developer"
// //    },
// //    { 
// //      name: "Petra Python",
// //      course: "Data Engineering",
// //      graduationYear: 2019,
// //      jobTitle: "Senior Data Engineer"
// //    }
// // ]



// 11 - Find the "X" in the Grid

// This function takes a multi-dimensional array as an argument. Hidden somewhere within this array, there may be the letter X.

// If there is no X in any nested array, the function should return a string of: "No X found"

// Otherwise, the function should return a string stating the row and column of where the X was found: "X was found on row Y and 
// column Z"

// function findTheX(grid) {

//     let xFoundMessgae = "No X found"

//     for (let i = 0; i < grid.length; i ++) {            // Loop through rows.
//         for (let x = 0; x < grid[i].length; x ++) {     // Loop through the columns within each row iteration. 
//             if (grid[i][x] === "X") {                   // Conditional if current position is = "X".
//                 xFoundMessgae = `X was found on row ${[i]} and column ${[x]}`   // Using current iterations [i][x] to provide
//                                                                                 // element position.   
//             }
//         }
//     }

//     return console.log(xFoundMessgae)
// // }

//     findTheX([
//   ["S", "S", "S"],
//   ["S", "S", "S"] 
// ]);
// // should return: "No X found"

// findTheX([
//   ["X", "S", "S"]
// ]);
// // should return: "X was found on row 0 and column 0"

// findTheX([
//   ["S", "S", "S"],
//   ["S", "S", "S"],
//   ["S", "X", "S"] 
// ]);
// // should return: "X was found on row 2 and column 1"