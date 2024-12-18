// 8 - Return The Middle Character

// function returnMiddleCharacter(string) {
//     const strLen = string.length
//     const strLenHalf = strLen / 2
//     const strLenHalfMinus1 = strLenHalf - 1
//     const strLenHalfPlus1 = strLenHalf + 1
//     let strReturn = ""
//     const strOdd = strLenHalf - 0.5
    
//     if (string.length % 2 === 0) {
//         strReturn = string.slice(strLenHalfMinus1, strLenHalfPlus1)
//     } else {
//         strReturn = string[strOdd]
//     }


//     return console.log(strReturn)
// }


// returnMiddleCharacter("dog");
// // should return "o"

// returnMiddleCharacter("dogs");
// // should return "og"

// returnMiddleCharacter("sweet candy")
// // should return " "

// returnMiddleCharacter("I'll be back");
// // should return "be"

// returnMiddleCharacter("The quick brown fox jumps over the lazy dog");
// // should return "u"



// 9 - Get Nested First And Last

// function getNestedFirstAndLast(array) {
//     let listReturn = []

//     const outerArrayLength = array.length -1
//     const innerArrayLength = array[outerArrayLength].length-1

//     if (array.length > 0) {
//         listReturn.push(array[0][0])
//         listReturn.push(array[outerArrayLength][innerArrayLength])
//     } else if (array.length === 0){
//         listReturn = []
//     }

//     return console.log(listReturn)
// }

// getNestedFirstAndLast([[ 16 ], [ 82 ]]);
// // should return [ 16, 82 ]

// getNestedFirstAndLast([[ 2, 79, 13 ], [ 16, 34, 45 ], [ 21, 9, 98 ]]);
// // should return [ 2, 98 ]

// getNestedFirstAndLast([[ 16, 22 ]]);
// // should return [ 16, 22 ]

// getNestedFirstAndLast([]);
// // should return []




// 11 - Find the "X" in the Grid

function findTheX(grid) {

    let message = "No X found"

    for (let i = 0; i < grid.length; i++) {
        for (let x = 0; x < grid[i].length; x++) {
            if (grid[i][x] === "X") {
                message = `X was found on row ${[i]} and column ${[x]}`
            }
        }
    }

    return console.log(message)
}


findTheX([
    ["S", "S", "S"],
    ["S", "S", "S"] 
  ]);
  // should return: "No X found"
  
  findTheX([
    ["X", "S", "S"]
  ]);
  // should return: "X was found on row 0 and column 0"
  
  findTheX([
    ["S", "S", "S"],
    ["S", "S", "S"],
    ["S", "X", "S"] 
  ]);
  // should return: "X was found on row 2 and column 1"