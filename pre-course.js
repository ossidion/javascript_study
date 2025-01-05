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



function passwordValidation(password) {
  let answer = "invalid"
  
  let passwordLower = password.toLowerCase()
  let n = passwordLower.includes("n")
  let c = passwordLower.includes("c")
  let one = passwordLower.slice(-1)

  
  let counter = 0

  if (n == true && c == true && one === "1") {
    counter += 1
  }

  if (counter == 1) {
    answer = "valid"
    }  

  return console.log(answer)
}


passwordValidation("northcoders1") // returns 'valid'

passwordValidation("NORTHCODERS1") // returns 'valid'

passwordValidation("nope1") // returns 'invalid'

passwordValidation("northcoders") // returns 'invalid'