// console.log("five" * "twenty")
console.log(5 * 20);


// Declaring and initializing a variable:
const greeting = "Hello there!"


// modulo for expressing odd and even numbers. 
 let odd = 15 % 2 // = 0.5 (1)
 let even = 14 % 2 // = 0


// Interpolation (f strings in Python). 
const team = 'red'
const player1Score = 25
const player2Score = 31

const description = `The ${team} team scored ${player1Score + player2Score} points` // Note the third type of quotation marks.
// The red team scored 56 points


// Accessing the last character in the string i.e. find length of string then minus one as string starts at 0. 
const blogPost = '...and that\'s how I learned how to access the last character in a string!'
const lastCharacter = blogPost[blogPost.length - 1] // '!'


// Strict Equality
const userPassword = 'iamthecoolest123'
const guessedPassword = 'iamahacker123'

const isPasswordCorrect = userPassword === guessedPassword // false

// and (Python) === && (JavaScript)
const userPIN = 1234
const guessedPIN = 1234

const isPINCorrect = userPIN === guessedPIN // true

const accountBalance = 100
const requestedWithdrawal = 200

const hasSufficientFunds = accountBalance >= requestedWithdrawal // false

const canMakeWithdrawal = isPINCorrect && hasSufficientFunds // false


//The syntax for the OR operator is ||
const accountBalance = 100
const requestedWithdrawal = 200

const hasSufficientFunds = accountBalance >= requestedWithdrawal // false

const hasOverdraft = true

const canMakeWithdrawal = hasSufficientFunds || hasOverdraft // true


//The logical operator for NOT, ! is often referred to as the bang operator because this punctuation mark is called a 'bang' in American English.

// When used in front of a boolean, the expression will evaluate to the opposite value.

// We can check if two values are not equal with the strict inequality operator, !==:

const accountFunds = 300

const isAccountNotEmpty = accountFunds !== 0 // true

