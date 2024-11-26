// Accessing the length of an array

// As arrays are zero-indexed, the last element will always be at an index position one less than its length. 

// Like accessing the last character in a string, this is the typical way of finding the last element of the array.

const lastStop = trainStations[trainStations.length - 1]; // 'Hull'


// The .push array method adds an element to the end of an array. This changes, or mutates, the existing array.

const blueLine = ['Byker', 'Chillingham Road', 'Walkergate', 'Wallsend']

blueLine.push('Hadrian Road')

console.log(blueLine) // ['Byker', 'Chillingham Road', 'Walkergate', 'Wallsend', 'Hadrian Road']


blueLine.push('Howdon', 'Percy Main')

console.log(blueLine) // ['Byker', 'Chillingham Road', 'Walkergate', 'Wallsend', 'Hadrian Road', 'Howdon', 'Percy Main']


// Similarly, the .unshift array method will add elements to the beginning of the array.

const greenLine = ['Jarrow', 'Bede', 'Simonside', 'Tyne Dock']

greenLine.unshift('Hebburn')

console.log(greenLine) // ['Hebburn', 'Jarrow', 'Bede', 'Simonside', 'Tyne Dock']


// The .pop array method allows us to remove the element at the end of an array. This changes, or mutates, the existing array.

const yellowLine = ['West Street', 'City Hall', 'Cathedral', 'Castle Square']

yellowLine.pop()

console.log(yellowLine) // ['West Street', 'City Hall', 'Cathedral']


// Similarly, the .shift array method allows us to remove the element at the start of an array.

yellowLine.shift()

console.log(yellowLine) // ['City Hall', 'Cathedral']


// Slicing

// The .slice method is used to select part of an array - also known as a slice! You can choose where to start and end the slice,
// by providing index positions as arguments.

const shoppingList = ['broccoli', 'chocolate', 'mushrooms', 'baked beans', 'butter', 'tomatoes']

const firstThreeItems = shoppingList.slice(0, 3)
console.log(firstThreeItems) // ['broccoli', 'chocolate', 'mushrooms']

const lastThreeItems = shoppingList.slice(-3)
console.log(lastThreeItems) // ['baked beans', 'butter', 'tomatoes']


// Unlike the array methods that we have seen so far that mutate the original array, .slice creates a new array. 

// The original array is unaffected - no mutation takes place. In our example, shoppingList still retains all six
// elements - we've created new variables to assign our slices to.

// also check out these array methods: .includes, .indexOf, .reverse and .splice.




