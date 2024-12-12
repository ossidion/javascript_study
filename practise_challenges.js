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

// function findFirstOdd(numbers) {
//     let nums = numbers
//     let moduloResult = 0
//     let result = 0
//     let oddNumbers = []

//     for (let i = 0 ; i < nums.length; i++) {
//         result = nums[i];
//         moduloResult = nums[i] % 2
//         if (moduloResult > 0) {
//             oddNumbers.push(result)
//         } else { continue }

//     return oddNumbers[0]
//     }
// }

    

// console.log(findFirstOdd([4,4,6]))



//  a function that takes a user object and returns the value of the password key from that object.

// function retrievePassword(user) {
//     return user.password
//     }


// console.log(retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' }))


//  A function that takes an object, and a string of the name of a key on that object.

// It should return the value of that key.

// function retrieveKey(object, key) {
//     return object[key]
//     }

// console.log(retrieveKey({ name: 'Sam' }, 'name'))
// // returns 'Sam'
// retrieveKey({ password: 'Chips!' }, 'password');
// // returns 'Chips!'


// This function will take an array of values, and should return an array of all the even length strings.

// Anything that's not a string, or not a string of even length, should not be returned in the array.

// If there are no even length strings, it should return an empty array.

// function findEvenLengthStrings(items) {
//     let stringList = []

//     for (let i = 0; i < items.length; i++) {
//         if (typeof items[i] == 'string') {
//             stringList.push(items[i])
//         }
//     }
    
//     let wordLength = 0
//     let wordModulo = 0
//     let evenList = []

//     for (let i = 0; i < stringList.length; i++) {
//         wordLength = stringList[i].length
//         wordModulo = wordLength % 2

//         if (wordModulo === 0) {
//             evenList.push(stringList[i])
//         }
//     }
   
//     return evenList
// }

// console.log(findEvenLengthStrings(['hi', 'bye']))
// // returns ['hi']

// console.log(findEvenLengthStrings(['bye']))
// // returns []

// console.log(findEvenLengthStrings(['keepOnlyMe', 'notMe', 4]))
// // returns ['keepOnlyMe']





// A function that takes a string, and returns true if it is a palindrome, and false if it is not.

// (A palindrome is a word that, when reversed, is exactly the same. e.g. "madam" or "racecar")


// function isThisAPalindrome(str) {
//     let string = str
//     let reverseString = string.split('').reverse().join('');
//     let palindrome = true
//     if (reverseString === string) {
//         palindrome = true
//     } else {
//         palindrome = false
//     }
//     return palindrome

// }

// console.log(isThisAPalindrome('yay'))
// // returns true

// console.log(isThisAPalindrome('no'))
// // returns false




// A function that takes an array of numbers and returns the biggest and smallest in an object.

// function findBiggestAndSmallest(numbers) {
//     let numList = []
//     let nums = numbers

//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] === 'number') {
//                 numList.push(nums[i])
//             }
//         }

//     let maxNumber = 0
//     let minNumber = 0

//     let listLength = numList.length
   
//     maxNumber =  Math.max(...numList)
//     minNumber =  Math.min(...numList)
//     let numObject = {}
    
//     if (listLength > 0) {
//         numObject = {
//             biggest : maxNumber,
//             smallest : minNumber
//         }
//     }
    
//     return numObject
// }


// console.log(findBiggestAndSmallest([]))

// returns { biggest: 100, smallest: 1 }





// a function that takes a single positive integer as its argument. If the number is prime, it should return true. 

// Otherwise, it should return false.

// A prime number is a number that is divisible only by itself and 1 - for example 2, 3, 5, 7, 11. 

// The number 1 is not a prime.)

// function checkIsPrime(num) {
//     let number = num
//     let answer = 0
//     let answerList = [1]
    
//     for (let i = 0; i < 10; i++) {
//         answer = num / i
//         answerList.push(answer)
//     }

//     let wholeNumber = 0
//     let wholeNumbersList = []

//     for (let i = 0; i < answerList.length; i++) {
//         wholeNumber = answerList[i]
//         if (Number.isInteger(wholeNumber)) {
//             wholeNumbersList.push(wholeNumber)
//         }
//     }

//     let filteredWholeNumbersList = new Set(wholeNumbersList);

//     filteredWholeNumbersList = [...filteredWholeNumbersList]

//     let primeNumber = false

//     if (filteredWholeNumbersList.length === 2) {
//         primeNumber = true
//     }
        

//     return primeNumber
// }


// checkIsPrime(11)
// // returns true

// // console.log(checkIsPrime(4))
// // returns false





// Your greetGuest function will take a string of a first name and should return a string of a greeting with the
// capitalised name, as shown in the example below.

// function greetGuest(name) {

//     let nameVar = name
//     let lowerName = nameVar.toLowerCase()
//     let lowerNameLength = lowerName.length
//     let greeting = ""
//     if (lowerNameLength >= 1) {
//         let firstLetter = lowerName[0].toUpperCase()
//         let restOfName = lowerName.slice(1, )
//         let capitalizedName = firstLetter + restOfName
//         greeting = `Hello ${capitalizedName}!`
//     } else if (lowerNameLength < 1){
//         greeting = "Hello !"

//     }

//     return greeting
// }

// greetGuest("Douglas");
// // returns 'Hello Douglas!'

// greetGuest("maddie");
// // returns 'Hello Maddie!'

// greetGuest("JASMINE");
// // returns 'Hello Poonam!'

// greetGuest("");
// // returns 'Hello Poonam!'




// The findTicketPrices function will take a string, and should return a value of true if the string contains a number, 
// and false if it does not.

// function findTicketPrices(emailString) {
//     let email = emailString
//     let counter = 0
//     const stingList = email.split(" ")
//     let result = false
//     for (let i = 0; i < stingList.length; i++) {
//         if (!isNaN(stingList[i])) {
//             counter += 1
//         }
//     }
//     if (counter > 0) {
//         result = true
//     }
//     return result
// }

// findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
// // returns true

// findTicketPrices("I would be willing to pay 30 for a ticket");
// // returns true

// findTicketPrices("Thanks for making this event pay what you can afford!");
// // returns false


// The makeGuestList function takes an object with a name property whose value will be a string consisting of a first name and a
// last name, separated by a space. The function should return an object.

// The function removes the name property, replace it with firstName and lastName properties.

// function makeGuestList(person) {
//     const personFullName = person.name
//     const nameList = personFullName.split(" ");
//     person.firstName = nameList[0]
//     person.lastName = nameList[1]
//     delete person.name

    
//     return console.log(person)
//     }

// makeGuestList({ name: "Hannah Fry", age: 46 });
// // should return { firstName: "Hannah", lastName: "Fry", age: 46 }

// makeGuestList({ name: "Paul Erdős", age: 46 });
// // should return { firstName: "Paul", lastName: "Erdős", age: 46 }



// The function trackAttendees takes an attendee object and a string representing how much they are willing to pay.

// It should return a modified attendee object, with an added property key of paidForTicket and value of the amount the attendee
// is willing to pay.

// function trackAttendees(person, ticketCost) {
//     const personVariable = person
//     let ticketCostVariable = parseInt(ticketCost)
    
//     person.paidForTicket = ticketCostVariable

//     return console.log(person)
    
//     }


// trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25');
// // should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }

// trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0');
// // should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }

// trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13');
// // should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }





// The isPartyViable function will be called with an array of guest objects. Each of those objects has a paidForTicket property 
// with a number representing how much they are willing to pay for their ticket.

// It should return a boolean value of false if not enough people are attending or attendees don't spend enough money on tickets, 
// and true if enough people are attending and they spend enough money on tickets.

// function isPartyViable(guests) {
//     let guestVariable = guests
//     const guestList = []
//     let numberOfGuests = false
//     let totalTicketIncome = 0
//     let ticketValueRequired = false
//     let answer = false
//     for (let i = 0; i < guests.length; i++) {
//         guestList.push(guestVariable[i])
//     }

//     if (guestList.length >= 5) {
//         numberOfGuests = true
//         // console.log(guestList)

//     }

//     for (let i = 0; i < guestList.length; i++) {
//         let guest = guestList[i]
        
//         const value = guest.paidForTicket
//         totalTicketIncome += value
        
//     }
    


//     if (totalTicketIncome >= 100) {
//         ticketValueRequired = true
//     }

//     if (numberOfGuests && ticketValueRequired){
//         answer = true
//     }

//     return console.log(answer)
// }

// let guests = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 2 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//   ]
//   isPartyViable(guests);
//   // should return false
  
// guests = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 2 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//     { name: "kev", paidForTicket: 6 },
//     { name: "sarah", paidForTicket: 11 },
//   ]
//   isPartyViable(guests);
//   // should return false
  
// guests = [
//     { name: "diya", paidForTicket: 15 },
//     { name: "amul", paidForTicket: 20 },
//     { name: "saleh", paidForTicket: 2 },
//     { name: "philippa", paidForTicket: 30 },
//     { name: "kev", paidForTicket: 26 },
//     { name: "sarah", paidForTicket: 11 },
//   ]
//   isPartyViable(guests);
//   // should return true.




// The orderSupplies function takes two arguments: a supplies object with keys of party
// supplies and values of the cost of that supply, and the number of guests attending.

// It should return a number showing the total cost of ordering one of each item per guest!

// function orderSupplies(supplies, guests) {
//     let counter = 0
//     for (const key in supplies) {
//         const value = supplies[key]
//         counter += value
//     }
//     counter = counter * guests
//     return counter
// }

// orderSupplies({ cake: 2, iceCream: 7 }, 2);
// // should return 18

// orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20);
// // should return 160




// The function calculateTables takes two arguments, the number of guests and the number of seats around a table.

// It should return an object with two properties: a key of tables with the value of the number tables, and a key of
// remainingGuests with a value of the number of guests without a seat who will need to be added to one of the other tables.

// function calculateTables(guests, seats) {

//     const remainingGuests = guests % seats
//     const numberOfGuestsWithSeats = guests - remainingGuests
//     const numberOfTables = numberOfGuestsWithSeats / seats

//     const tableObject = {

//     }
    
//     tableObject.tables = numberOfTables
//     tableObject.remainingGuests = remainingGuests



//     return tableObject
//     }


// calculateTables(4, 2);
// // should return { tables: 2 , remainingGuests: 0 }

// calculateTables(14, 6);
// // should return { tables: 2 , remainingGuests: 2 }

// calculateTables(26, 5);
// // should return { tables: 5 , remainingGuests: 1 }




// Northdrivers Taxi Company™️ have asked for your help writing a function which will calculate the cost of getting to the party! 

//Journeys are priced as follows:

// Journeys up to 3 minutes long have a flat base rate cost of £5
// Every minute after the first 3 will cost an extra 70p
// The length of the journey is always rounded up to a whole number of minutes
// The calculateTaxiFare function should take a number representing the length of a taxi journey in seconds, and return a number
// representing the cost of that journey in pence.

// function calculateTaxiFare(seconds) {
//     let extraFare = 0
//     let fare = 0

//     let minutes = seconds / 60
//     minutes = Math.ceil(minutes)

//     if (minutes > 3) {
//         extraFare = minutes - 3
//         extraFare = extraFare * 70
//         fare = 500 + extraFare
//     } else {
//         fare = 500
//     }
    
// //     return console.log(fare)
// // }

// calculateTaxiFare(150);
// // should return 500

// calculateTaxiFare(360);
// // should return 710

// calculateTaxiFare(491);
// // should return 920




// a function which will select the winners based on two factors: how much they paid,
// and their seat number. If both of these numbers are odd, the attendee wins a prize!

// The pickWinners function will be passed an array of numbers representing ticket costs
// as its only argument. The index position represents the seat number.

// Your task is to return an array of objects. Each object should contain two keys.
// The first key is seat with a value of the odd index. The second key is ticketCost with a 
// value of the ticket price at that index in the input array.

function pickWinners(numbers) {
    let list = []
    let objectArray = []
    let object = {}
    
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 1) {
            if (numbers[i] % 2 === 1) {
                list.push(i)
                list.push(numbers[i])
            }
        }
    }

    for (let i = 0; i < list.length; i++) {
        let i[seat] = {}
        object.seat = list[i]
        object.ticketCost = 
        new Object 
    }
    return console.log(list)
}
pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
pickWinners([1, 6, 13, 8, 29, 50])
// should return []