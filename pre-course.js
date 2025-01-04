// // Calculate Circle Area

// function calculateCircleArea(r) {
//     let squared = r * r
//     let area = squared * 3.142
//     let answer = area.toFixed(3)
//     let returnAnswer = Number(answer) 
//     return console.log(returnAnswer)
  
//   }

// calculateCircleArea(3) //returns 3.142;




// Find Smallest and Biggest

// function findSmallestAndBiggest(arr) {
//     let myArray = []
//     const min = Math.min(arr)
//     const max = Math.max(arr)
//     myArray.push(min, max)
//     return console.log(myArray)
//   }

// const myArray = [1, 2, 3, 4, 5]
// const min = Math.min(...myArray)
// const max = Math.max(...myArray)
// console.log(min)


// findSmallestAndBiggest([1, 2, 3, 4, 5]) //returns [1, 5];






// function isEvenLength(string) {
//     let answer = false
//     if (string.length % 2 == 0)
//       answer = true
//     return answer
//   }





function areStringsEqualCaseInsensitive(string1, string2) {
    let answer = false
    if (string1.lower === string2.lower) {
      answer = true
    }
    return console.log(answer)
  }



areStringsEqualCaseInsensitive('hello', 'hello') // returns true

areStringsEqualCaseInsensitive('hello', 'HELLO') // returns true

areStringsEqualCaseInsensitive('banANA', 'BANana') // returns true

areStringsEqualCaseInsensitive('hello', 'hella') // returns false

areStringsEqualCaseInsensitive('apple', 'BANANA') // returns false