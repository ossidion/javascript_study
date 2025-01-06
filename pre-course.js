// // // Calculate Circle Area

// // function calculateCircleArea(r) {
// //     let squared = r * r
// //     let area = squared * 3.142
// //     let answer = area.toFixed(3)
// //     let returnAnswer = Number(answer) 
// //     return console.log(returnAnswer)
  
// //   }

// // calculateCircleArea(3) //returns 3.142;




// // Find Smallest and Biggest

// // function findSmallestAndBiggest(arr) {
// //     let myArray = []
// //     const min = Math.min(arr)
// //     const max = Math.max(arr)
// //     myArray.push(min, max)
// //     return console.log(myArray)
// //   }

// // const myArray = [1, 2, 3, 4, 5]
// // const min = Math.min(...myArray)
// // const max = Math.max(...myArray)
// // console.log(min)


// // findSmallestAndBiggest([1, 2, 3, 4, 5]) //returns [1, 5];






// // function isEvenLength(string) {
// //     let answer = false
// //     if (string.length % 2 == 0)
// //       answer = true
// //     return answer
// //   }





// function areStringsEqualCaseInsensitive(string1, string2) {
//     let answer = false
//     if (string1.lower === string2.lower) {
//       answer = true
//     }
//     return console.log(answer)
//   }



// areStringsEqualCaseInsensitive('hello', 'hello') // returns true

// areStringsEqualCaseInsensitive('hello', 'HELLO') // returns true

// areStringsEqualCaseInsensitive('banANA', 'BANana') // returns true

// areStringsEqualCaseInsensitive('hello', 'hella') // returns false

// areStringsEqualCaseInsensitive('apple', 'BANANA') // returns false





// function capitaliseString(string) {
//   const capital = string[0].toUpperCase()
//   // const restOfWord = string.slice(1, )
//   const answer = capital + string.slice(1, )
//   return console.log(answer)
// }


// capitaliseString("a") // returns 'A'

// capitaliseString("word") // returns 'Word'

// capitaliseString("i love coding") // returns "I love coding"



// function getMiddle(string) {
//   let answer = ""
//   const length = string.length
//   const halfLength = length / 2
//   const even1 = halfLength + 1
//   const even2 = halfLength - 1
//   const odd = halfLength - 0.5

//   // answer = string.slice(1, 3)

//   if (length % 2 == 0) {
//     answer = string.slice(even2, even1)   
//   } else {
//     answer = string[odd]
//   }
//   return console.log(answer)
//  }


// getMiddle("and") // returns 'n'

// getMiddle("cloud") // returns 'o'

// getMiddle("chin") // returns 'hi'

// getMiddle("castle") // returns 'st'


// function convertToCamelCase(string) {
//   const myList = string.split(" ")
//   let newList = []
//   for (i = 0; i < myList.length; i++) {
//     let index = myList[i][0].toUpperCase()
//     let consolidated = index + myList[i].slice(1, ) 
//     newList.push(consolidated)
//   }
//   let newString = newList.join("")
//   let firstLetter = newString[0].toLowerCase()
//   let answer = firstLetter + newString.slice(1, )
  

//   return console.log(answer)
//   }




// convertToCamelCase("hello") // returns 'hello'

// convertToCamelCase("hello northcoders") // returns 'helloNorthcoders'

// convertToCamelCase("I love JavaScript") // returns 'iLoveJavascript



// function passwordValidation(password) {
//   let answer = "invalid"
  
//   let passwordLower = password.toLowerCase()
//   let n = passwordLower.includes("n")
//   let c = passwordLower.includes("c")
//   let one = passwordLower.slice(-1)

  
//   let counter = 0

//   if (n == true && c == true && one === "1") {
//     counter += 1
//   }

//   if (counter == 1) {
//     answer = "valid"
//     }  

//   return console.log(answer)
// }


// passwordValidation("northcoders1") // returns 'valid'

// passwordValidation("NORTHCODERS1") // returns 'valid'

// passwordValidation("nope1") // returns 'invalid'

// passwordValidation("northcoders") // returns 'invalid'


// function getEvenNumbers(nums) {
//   let newList = []
//   for (let i = 0; i < nums.length; i ++)
//     if (nums[i] % 2 == 0) {
//       newList.push(nums[i])
//     }
//   return newList
// }


// getEvenNumbers([1, 2, 3]) //returns [2]


// function getLastItems(items, n) {
//   let newList = []
//   let x = n * -1 
//   if (n > 0) {
//     newList = items.slice(x)
//   }
  
//   return console.log(newList)
// }


// getLastItems([1, 2, 3, 4, 5], 1) //returns [5];

// getLastItems([1, 2, 3, 4, 5], 2) //returns [4, 5];

// getLastItems([1, 2, 3, 4, 5], 5) //returns [1, 2, 3, 4, 5];

// getLastItems([1, 2, 3, 4, 5], 0) //returns [];


// function getSandwichFilling(sandwich) {
//   let myList = []
//   let len = sandwich.length

//   if (len > 2) {
//     myList = sandwich.slice(1, -1)
//   }

//   return console.log(myList)
// //   }


// getSandwichFilling(['bread', 'bacon', 'bread']) //returns ['bacon']

// getSandwichFilling(['bread', 'halluomi', 'lettuce', 'bread']) //returns ['halluomi', 'lettuce']

// getSandwichFilling(['a', 'b', 'c', 'd']) //returns ['b', 'c']

// getSandwichFilling(['bread', 'tomato', 'lettuce', 'cheese', 'patty', 'bread'])



// function removeItem(items, n) {
//   let newList = []
//   for (let i = 0; i < items.length; i ++) {
//     if (i != n) {
//       newList.push(items[i])
//     }
//   } 

//   return console.log(newList)
// }


// removeItem([1, 2, 3], 1) //returns [1, 3]

// removeItem([3], 0) //returns []

// removeItem([1, 2, 3, 4, 5, 6, 7,], 5)




// function isItemOmnipresent(arrayOfArrays, item) {
//   let answer = false
//   let one = arrayOfArrays[0].includes(item)
//   let two = arrayOfArrays[1].includes(item)
//   let three = arrayOfArrays[2].includes(item)

//   if (one === true && two === true && three == true) {
//     answer = true
//   }



//   return console.log(answer)
// // }


// isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 3) //returns true, present in all

// isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 9) //returns false, not present in any

// isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 4) //returns false, only present in two arrays



// function createUserString(userObj) {
//   str = "name: " + userObj.name + ", age: " + userObj.age + ", language: " + userObj.language
//   return console.log(str)
// }


// const userObj = { 
//   name: 'Callum', 
//   age: 31, 
//   language: 'JavaScript' 
// }

// createUserString(userObj) // returns 'name: Callum, age: 31, language: JavaScript';





// function getAlbumProperties(obj) {
//   let newList = Object.keys(obj)


//   return console.log(newList)
// }


// getAlbumProperties({a: 'foo', b: 'bar', c: 'car'}) //returns ['a', 'b', 'c'];





// function getNorthcodersNames(northcoders) {
//   // let newList = Object.values(northcoders[name])
//   let name = ""
//   let newList = []

//   for (let i = 0; i < northcoders.length; i ++)
//   //   name = northcoders[i].name
//     newList.push(northcoders[i].name)

//   return console.log(newList)
// }

// const northcoders = [
//   {
//     name: 'Callum',
//     age: 31,
//     language: 'JavaScript'
//   },
//   {
//     name: 'Carrie',
//     age: 32,
//     language: 'JavaScript'
//   }
// ];

// getNorthcodersNames(northcoders) //returns ['Callum', 'Carrie'];




// function deleteManyPasswords(users) {

//   for (let i = 0; i < users.length; i ++) {
//     delete(users[i].password)
  
//   }
//   return console.log(users)

// }


// deleteManyPasswords([
//   { name: 'Barry', password: 'ilovetea' },
//   { name: 'Sandeep', password: 'ilovecoffee' },
//   { name: 'Kavita', password: 'ilovepie' }
// ]) 

// // returns [
// //  { name: 'Barry' }, 
// //  { name: 'Sandeep' }, 
// //  { name: 'Kavita' }
// //  ]



// function countTheObjects(array) {
//   let counter = 0
//   for (let i = 0; i < array.length; i ++) {
//     let arrayCheck = Array.isArray(array[i])
//     if (arrayCheck === false) {
//       if (array[i] != null) {
//         // console.log("null here")
//         if (typeof array[i] === "object") {
//           counter ++
//         }
//       }
//     }
//   }
  
  
//   return console.log(counter)
  
// }
  




// countTheObjects([1, 2, 3, 'hi']) //returns 0;

// countTheObjects([{}, {}]) //returns 2;s

// countTheObjects([1, 2, 3, 'hi', {}, {}, [], null]) //returns 2;



// function translateKey(student, keyToChange, translation) {
//   student[translation] = student[keyToChange]
//   delete student[keyToChange]

//   newObject = {}
//   for (key in student) {
//     newObject[key] = student[key]
//   }

//   return console.log(newObject)
// }



// const student = {
//   prénom: 'Carla',
//   surname: 'Bruni',
//   job: 'Artist'
// }
// const keyToChange = 'prénom'
// const translation = 'firstName'

// translateKey(student, keyToChange, translation) /* should return the following:

// {
//   firstName: 'Carla',
//   surname: 'Bruni,
//   job: 'Artist'
// } */



function pluraliseKeys(obj) {
  let newObject = {}

  for (let key in obj) {
    let type = typeof obj[key]
    // console.log(type)
    if (type === "string") {
      newObject[key] = obj[key]
    } else if (type === "object") {

      // console.log("yes")
      if (obj[key].length > 1) {
        // console.log(obj[key], obj[key].length)
        let newKeyName = key + "s"
        // console.log(newKeyName)
        newObject[newKeyName] = obj[key]
      } else {
        newObject[key] = obj[key]
      } 
    }
  }
  return console.log(newObject)
}



pluraliseKeys({
  name: 'Tom',
  job: ['writing katas', 'marking'],
  favouriteShop: [
  "Paul's Donkey University",
  "Shaq's Taxidermy Shack",
  "Sam's Pet Shop"
  ]
}) 