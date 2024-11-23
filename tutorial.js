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


// The truthy values in JavaScript are:

// true itself
// any string except an empty string - ''
// any number other than 0 (negative numbers included)
// objects and arrays

const review = 'The food was nice but the atmosphere was terrible';
const postsRemaining = 20;

if (review && postsRemaining) {
    console.log("Thanks for your review! You have 19 posts remaining.");
};


// There are six falsy values in JavaScript.

// false
// 0
// an empty string ''
// NaN
// undefined
// null (the absence of data)


// Ternary if Statements

// If Statement:

if (buzzerPressed) {
    response = 'Sorry, your journey ends here'
  } else {
    response = 'You are through to the next round'
  }

  // Refactored into Ternary:

  let response = buzzerPressed ? 'Sorry, your journey ends here' : 'You are through to the next round'


//   Switch Statements

//  allow us to execute code based on a set of conditions, known as cases.

// They can be a clearer way of managing the flow of your code than if-else statements when you have several conditions.

let isWeekend;

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    isWeekend = false
    break;
  case 'Saturday':
  case 'Sunday':
    isWeekend = true
    break;
  default:
    console.log(day + ' is not a valid day')
};

// A switch statement starts with the switch keyword, and a set of parentheses () that wrap an expression.

// These are followed by a code block containing cases - a set of conditions, one of which will match the expression.
// Each case may contain code to execute, or it may fall through to the next case. If this isn't desired, the break 
// keyword can be used at the end of each case to stop any more code in the switch statement executing.

// If none of the cases match, then the default case will execute.

let lastName;

switch (firstName) {
  case 'Justin':
    lastName = 'Bieber'
    break;
  case 'Samuel':
    lastName = 'Jackson'
    break;
  case 'Adele':
    lastName = null
    break;
  default:
    console.log('Who even are you?')
}



