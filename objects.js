// Just like any other value, we can assign an object to a variable. We use curly braces - { } - to enclose all of the data we want to include 
// in our object.

const person = {
    firstName: 'Mezz',
    lastName: 'Guster',
    likesCoding: true,
    hobbies: ['reading', 'pottery', 'cooking']
};

console.log(person.hobbies);
// ['reading', 'pottery', 'cooking']


// Sometimes, the keys of an object prevent us from using this notation. In this example, the keys are the people's names, and the values are
// some imaginary test scores.

const testScores = {
    "Leslie Knope": 85,
    "Ron Swanson": 59,
    "April Ludgate": 67
}

// All object keys are strings - in previous examples, we haven't included quotations marks, but here we must, because the names contains space 
// characters. Without quotation marks, JavaScript wouldn't run the code, but instead give us a syntax error.

// Accessing the value under a key like this with dot notation would also cause a syntax error. We can use bracket notation instead.

const aprilsScore = testScores["April Ludgate"]

console.log(aprilsScore) // 67


// Sometimes the key that we use to access the value might be stored in a variable - this is known as a dynamic key. Again, we must use 
// bracket notation if we are to use the variable to access the value. JavaScript will evaluate the variable, and use it to access the correct 
// value.

const employee = 'Ron Swanson'

const ronsScore = testScores[employee]

console.log(ronsScore) // 59



// Below we have an empty object that represents a geology shop, which sells rocks and other rock related items.

const geologyShop = {}

// The shop owner would like to add the number of rocks for sale as a key-value pair on the geologyShop object. We can use dot notation and the 
// assignment operator to achieve this:

geologyShop.numberOfRocks = 42
console.log(geologyShop) // { numberOfRocks: 42 }

geologyShop.typeOfRocks = ["Lime Stone", "Quarts"]
console.log(geologyShop) 

// If we want to add a property with a dynamic key - the value of the key is stored in a  variable - then we must use bracket notation.

const specialOffer = "Rock of the Week"

geologyShop[specialOffer] = "granite"
console.log(geologyShop) // { numberOfRocks: 42, "Rock of the Week": "granite" }


// Should we need to change values, we can overwrite existing properties using the same assignment operator.

geologyShop.numberOfRocks = 41
geologyShop["Rock of the Week"] = "serpentine" // note the bracket notation when the key contains spaces

console.log(geologyShop) // { numberOfRocks: 41, "Rock of the Week": "serpentine" }


// Changing our objects

const geologyShop = {
    owner: 'Flint Eastwood'
    purchaser: 'Stony Hawk'
}

delete geologyShop.purchaser

console.log(geologyShop) // { owner: 'Flint Eastwood' }

console.log(geologyShop.purchaser) // undefined


// An alternative to deleting a property may be setting its value to null.

// Assigning null as a value is sometimes a more appropriate way of coding the data we want to represent.

// The remaining key can still give meaning to the object.

const geologyShop = {
    owner: 'Flint Eastwood'
    purchaser: 'Stony Hawk'
}

geologyShop.purchaser = null

console.log(geologyShop) // { owner: 'Flint Eastwood', purchaser: null }


const northcoder = { 
    name: 'Alex',
    numberOfPlants: 4
  };
  const propertyToRemove = 'numberOfPlants'
  
  delete northcoder[propertyToRemove]



// Multi Dimensional Objects


// Just like arrays, object values can be any data type, meaning objects can also be nested. Objects that contain other objects are sometimes 
// called multi-dimensional objects.

// We can access properties using dot notation and bracket notation.

const rainforest = {
    name: "Tortuguero",
    country: {
      name: "Costa Rica",
      location: "Central America",
      capitalCity: "San Jose"
    },
    birds: ['toucan', 'macaw', 'hummingbird']
  }


// As JavaScript evaluates expressions as it comes across them, it's possible to chain notation to write code more concisely.

const countryName = rainforest.country.name
const firstBirdSeen = rainforest.birds[0]

// If we use variables to access a property, we must use bracket notation.

const locationKey1 = 'country'
const locationKey2 = 'capitalCity'

const city = rainforest[locationKey1][locationKey2]

console.log(city) // "San Jose"


// Declaring a For In Loop

// A for...in loop can access each property of an object by referencing its keys.

const tree = {
    name: "Oak",
    hasAcorns: true,
    ageInYears: 530,
};

for (const key in tree) { 
    // code to be executed
};

// The syntax is similar to a for loop, but instead of having a counter variable (i) to work with inside the code block, each key of the object 
// is exposed. There are no stop or step expressions - the code block will be run as many times as there are properties in the object.

// Within the code block, we can use the key to dynamically access the values in the object. As key is a variable, we need to use square
// bracket notation.

for (const key in tree) { 
    const value = tree[key]
    console.log(`The tree has a key of ${key} holding the value ${value}`)
    // The tree has a key of name holding the value Oak
    // The tree has a key of hasAcorns holding the value true
    // The tree has a key of ageInYears holding the value 530
};


// Objects are not indexed, so we cannot use for loops on them. (So we Use For In Loops.)




