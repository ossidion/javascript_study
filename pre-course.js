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



// function pluraliseKeys(obj) {
//   let newObject = {}

//   for (let key in obj) {
//     let type = typeof obj[key]
//     // console.log(type)
//     if (type === "string") {
//       newObject[key] = obj[key]
//     } else if (type === "object") {

//       // console.log("yes")
//       // if (obj[key].length > 1) {
//         // console.log(obj[key], obj[key].length)
//       let newKeyName = key + "s"
//         // console.log(newKeyName)
//       newObject[newKeyName] = obj[key]
//     } else {
//       newObject[key] = obj[key]
       
//     }
//   }
//   return console.log(newObject)
// }



// pluraliseKeys({
//   name: 'Tom',
//   job: ['writing katas', 'marking'],
//   favouriteShop: [
//   "Paul's Donkey University",
//   "Shaq's Taxidermy Shack",
//   "Sam's Pet Shop"
//   ]
// }) 





// function validMobileNumber(mobileNumber) {
//   let answer = false
//   if (mobileNumber[0] === "0" && mobileNumber[1] === "7") {
//     if (mobileNumber.length == 11) {
//       let restOfNumber = mobileNumber.slice(2, )
//       let isNumber = !isNaN(restOfNumber)
//         if (isNumber === true) {
//           answer = true
//         }
//     }
//   } else if (mobileNumber.slice(0, 4) === "+447") {
//     if (mobileNumber.length == 13) {
//       let restOfNumber = mobileNumber.slice(2, )
//       let isNumber = !isNaN(restOfNumber)
//         if (isNumber === true) {
//           answer = true
//         }
//     }
//   } else if (mobileNumber.slice(0, 5) === "00447") {
//     if (mobileNumber.length == 14) {
//       let restOfNumber = mobileNumber.slice(2, )
//       let isNumber = !isNaN(restOfNumber)
//         if (isNumber === true) {
//           answer = true
//         }
//     }
//   }
//   return console.log(answer)
// }



// validMobileNumber('07726') // returns false

// validMobileNumber('07123456789') // returns true

// validMobileNumber('+447123456789') // returns true

// validMobileNumber('00447123456789') // returns true

// validMobileNumber('0712345678!') // returns false



// function getFactorials(nums) {
  
//   let answerList = []


//   for (let i = 0; i < nums.length; i ++) {
//     let answer = 1
//     if (nums[i] == 0 || nums[i] == 1) {
//       answerList.push(nums[i])
//     } else if (nums[i] > 1) {
//       for (let x = nums[i]; x >= 1; x--) {
//         answer = answer * x
//       }
//       answerList.push(answer)
//     }
//   }
//   return console.log(answerList)
// }

// getFactorials([3]) // returns [6]

// getFactorials([3, 4]) // returns [6, 24]

// getFactorials([1, 5, 2]) // returns [1, 120, 2]

// getFactorials([]) // returns []




// function findLargestNumber(number) {
//   let str = String(number)
//   let sorted = str.split("")
//   sorted.sort()
//   sorted.reverse()
//   return console.log(sorted)
// // }


// findLargestNumber(3) // returns 3

// findLargestNumber(123) // returns 321

// findLargestNumber(937846) // returns 987643

// findLargestNumber(43) // returns 43




// function generateMatrix(number) {
//   let rows = number
//   let columns = number

//   let arr = new Array(rows).fill(null)
//   for (let i = 0; i < rows; i++) {
//     arr[i] = new Array(columns).fill(null)
//   }

//   return console.log(arr)
// }
  // let arr = [null]
  // for (i = 0; i < number.length; i++) {
  //   for (x = 0; x < number.length; x++) {
  //     arr = arr * x
  //   }
  // return console.log(arr)
  // }



// generateMatrix(1) // returns [[null]]

// generateMatrix(2) // returns [[null, null], [null, null]]

// generateMatrix(3) // returns [[null, null, null], [null, null, null], [null, null, null]]



// function findWrongWayFruit(orchard) {
//   let maxCount = 0
//   let elementMaxFreq = ""
//   let answer = 0

//   for (let i = 0; i < orchard.length; i++) {
//     let count = 0

//     for (let x = 0; x < orchard.length; x++) {
//       if (orchard[i] == orchard[x]) {
//         count ++
//       }
//     }

//     if (count > maxCount) {
//       maxCount = count
//       elementMaxFreq = orchard[i]
//     }
//   }

//   if (orchard.length > 2) {
//     for (let i = 0; i < orchard.length; i++) {
//       if (orchard[i] != elementMaxFreq) {
//         answer = i
//       }
//     }  
//   }
  
//   return console.log(answer)
  
// }



// findWrongWayFruit(['apple', 'apple', 'elppa']) // returns 2

// findWrongWayFruit(['apple', 'elppa', 'apple']) // returns 1

// findWrongWayFruit(['banana', 'ananab', 'banana', 'banana']) // returns 1

// findWrongWayFruit(['apple', 'elppa']) // returns 0 as we can't tell which one is the right way round





// function matchDnaPairs(dnaString) {
//   let dnaList = dnaString.split("")
//   // console.log(dnaList)
//   let processedList = []
//   let newCase = ""
//   for (let i = 0; i < dnaList.length; i++) {
//     if (dnaList[i].toUpperCase() == 'G') {
//       newCase = 'GC'
//       processedList.push(newCase)
//     } else if (dnaList[i].toUpperCase() == 'C') {
//       newCase = 'CG'
//       processedList.push(newCase)
//     }  else if (dnaList[i].toUpperCase() == 'T') {
//       newCase = 'TA'
//       processedList.push(newCase)
//     } else if (dnaList[i].toUpperCase() == 'A') {
//       newCase = 'AT'
//       processedList.push(newCase)
//     }
//   }
//   return console.log(processedList)
// }



// matchDnaPairs('G') // returns ['GC']
// matchDnaPairs('GAT') // returns ['GC', 'AT', 'TA']
// matchDnaPairs('GYTC') // returns ['GC', 'TA', 'CG']
// matchDnaPairs('gat') // returns ['GC', 'AT', 'TA']



// function sumNums(str) {
//   let counter = 0 
//   const regex = /[1-9]+/g
//   const matches = str.match(regex)
//   if (matches != null) {
//     for (let i = 0; i < matches.length; i++) {
//       counter += Number(matches[i])
//     }
//   }
  
//   return console.log(counter)
// // }


// sumNums('') // returns 0
// sumNums('abcdef') // returns 0
// sumNums('1') // returns 1
// sumNums('123') // returns 123
// sumNums('1hello2') // returns 3
// sumNums('12hiya!3') // returns 15



// function testValidCountdown(str) {
//   let answer = false
//   const regex1 = /[aeiou]{3,}/
//   const regex2 = /[^aeiou]{4,}/
//   const regex3 = /^[a-z]{9}$/
  
//   const matches1 = regex1.test(str)
//   const matches2 = regex2.test(str)
//   const matches3 = regex3.test(str)
//   if (matches1 && matches2 && matches3) {
//     answer = true
//   }
//   return console.log(answer)
// // }



// testValidCountdown('aaabbbccc') // returns true
// testValidCountdown('eeeedddff') // returns true
// testValidCountdown('aeiouwxyz') // returns true

// testValidCountdown("aeiouaxyz") // returns false (not enough consonants)
// testValidCountdown("aabbbcccd") // returns false (not enough vowels)
// testValidCountdown("aeiouvwxyz") // returns false (more than 9 characters)
// testValidCountdown("aeicdfg") // returns false (fewer than 9 characters)



// function extractRepoName(str) {
//   let answer = ""
//   const regex = /[^A-Z]/g
//   // const regex = /^[^https://github.com/northcoders/]$/g
//   const matches = str.match(regex)
//   const joined = matches.join("")
//   const myList = joined.split("/")
//   let lastElement = myList[myList.length-1]
//   let secondToLastElement = myList[myList.length-2]
//   if (lastElement == 'settings') {
//     answer = secondToLastElement
//   } else {
//     answer = lastElement
//   } 
//   return console.log(answer)

// // }


// extractRepoName("https://github.com/northcoders/intro-week") // returns "intro-week"

// extractRepoName("https://github.com/northcoders/remote-git-workshop") // returns "remote-git-workshop"

// extractRepoName("https://github.com/myAccount/notes") // returns "notes"

// extractRepoName("https://github.com/myAccount/notes/settings") // returns "notes"


// function testExact2ConsecutiveLs(str) {
//   const regex = /[ll]/g
//   const matches = str.match(regex);
//   let answer = false
//   if (matches.length != 2) {
//     answer = false
//   } else {
//     answer = true
//   }

//   return console.log(answer);
// }

// testExact2ConsecutiveLs("ll") // returns true
// testExact2ConsecutiveLs("bells") // returns true
// testExact2ConsecutiveLs("aaaallasdows") // returns true

// testExact2ConsecutiveLs("mile") // returns false
// testExact2ConsecutiveLs("welll") // returns false
// testExact2ConsecutiveLs("lolly") // returns false




// function validatePin(str) {
//   let answer = false
//   const regex = /[0-9]{4,6}/
//   const matches = str.match(regex)
//   if (matches != null) {
//     if (matches.length >= 4 || matches.length <= 6) {
//       answer = true
//     }
//   }
//   return console.log(answer)
// }


// validatePin("3542") // returns true
// validatePin("19073") // returns true
// validatePin("876487") // returns true

// validatePin("abcdei") // returns false
// validatePin("h23456") // returns false
// validatePin("75839502") // returns false



// function excludeWords(str) {
//   // const regex = /^((?!.*north.*).)*$/g
//   // const regex = / ./
//   // const matches = str.match(regex)
//   const strList = str.split(" ")
//   // console.log(strList)
//   let myList = []
//   for (let i = 0; i < strList.length; i++) {
//     if (strList[i] != "north" && strList[i] != "coders") {
//       myList.push(strList[i])
//     } 
//   }
//   let answer = myList.join(", ")
//   return answer
// }


// excludeWords("I live in a house") // returns "I live in a house."
// excludeWords("My brother lives in the north of England.") // returns "My brother lives in the of England."
// excludeWords("IBM hired a lot of coders lately.") // returns "IBM hired a lot of lately."
// excludeWords("I study at Northcoders.") // returns "I study at Northcoders."


// Study this one! (and question prior to this on regex pre-coursel list)
function matchUniqueDigits(str) {
  const regex = /(.+)(?=.*\1)/gm
  const matches = regex.test(str)
  let answer = true

  if (matches) {
    answer = false
  }


  return console.log(answer)
}


matchUniqueDigits("2") // returns true
matchUniqueDigits("1234") // returns true

matchUniqueDigits("00") // returns false
matchUniqueDigits("123452") // returns false