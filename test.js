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




// The function, transferProduct, has been created, but it's currently failing the tests.

// As a function, it takes three arguments, shelf, basket, and product. shelf and basket are objects, containing different products. 

// product is a string representing a product found in shelf. The function should copy this property, both key and value, to basket and delete it from shelf.

// Note: This function does not need to return anything.


function transferProduct(shelf, basket, product) {
    const productToTransfer = shelf[product];
    basket[product] = productToTransfer;
    delete shelf[product];
}


const shelf = { apple: "Keeps the doctor away", lamp: "Shedding light on the situation" };
const basket = { shoe: "Just the one" };

transferProduct(shelf, basket, "apple");

// console.log(shelf) // { lamp: "Shedding light on the situation" }
// console.log(basket) // { shoe: "Just the one", apple: "Keeps the doctor away" }



// function updateStudentGrades(grades) {
//     const gradesVariable = grades
//     let passOrFail = ""

//     if (gradesVariable >= 70) {
//         text = "pass"
//     } else {
//         text = "fail"
//     }
//     return console.log(text) 
// };





// updateStudentGrades({ maths: 85 });
// // should return { maths: "pass" }

// updateStudentGrades({ english: 70 });
// // should return { english: "pass" }

// updateStudentGrades({ science: 60 });
// // should return { science: "fail" }

// updateStudentGrades({ maths: 85, english: 60 });
// // should return { maths: "pass", english: "fail" }