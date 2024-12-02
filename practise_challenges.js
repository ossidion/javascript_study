// // Greet Friend

// function greetFriend(name) {
//     const name1 = name
//     const greeting = `Hello ${name1}!`
//     return greeting
//     }


// greetFriend("Douglas");


// A function that takes a single integer and returns a string of "odd" if it is an odd number, or "even" if it is even.

function oddOrEven(num) {
    const num1 = num % 2
    let result = ""
    if (num1 === 0) {
        result = "even";
    } else {
        result = "odd";
    }

    return result
}


// console.log(oddOrEven(13))



// takes an array of numbers and returns the first odd number.

// If there are no odd numbers, the function should return undefined.

function findFirstOdd(numbers) {
    let nums = numbers
    let moduloResult = 0
    let result = 0
    let oddNumbers = []

    for (let i = 0 ; i < nums.length; i++) {
        result = nums[i];
        moduloResult = nums[i] % 2
        if (moduloResult > 0) {
            oddNumbers.push(result)
        } else { continue }

    return oddNumbers[0]
    }
}

    

console.log(findFirstOdd([4,4,6]))