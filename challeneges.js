// const tutors = {
//     'Sarah': { numberOfPets: 1 },
//     'Jim': { numberOfPets: 2 },
//     'Rayhaan': { numberOfPets: 0 },
//     'Róisín': { numberOfPets: 6 },
//     'Maddie': { numberOfPets: 2 },
//     'Paul': { numberOfPets: 0 }
//   }
  
//   let totalPets = 0
//   // Start typing below this line
  
//   for (const key in tutors) {
//     const value = tutors[key].numberOfPets
//     totalPets += value
  
  
//   }
//   console.log(totalPets)
  
//   const sarahPets = tutors['Sarah'].numberOfPets
//   const jimPets = tutors['Jim'].numberOfPets
//   const rayhaanPets = tutors['Rayhaan'].numberOfPets
//   const róisínPets = tutors['Róisín'].numberOfPets
//   const maddiePets = tutors['Maddie'].numberOfPets
//   const paulPets = tutors['Paul'].numberOfPets

//   totalPets += sarahPets
//   totalPets += jimPets
//   totalPets += rayhaanPets
//   totalPets += róisínPets
//   totalPets += maddiePets
//   totalPets += paulPets
//   console.log(totalPets)
  
  
  
//     console.log(totalPets)



// const tutorPetTypes = {
//   'Sarah': ['cat'],
//   'Jim': ['dog', 'dog'],
//   'Joe': ['mouse'],
//   'Róisín': ['cat','cat','cat','cat','cat','dog'],
//   'Edd': ['lizard', 'cat'],
//   'Lewis': ['bearded dragon', 'tortoise']
// }

// let totalCats = 0
// // Start typing below this line
// for (const key in tutorPetTypes) {
//   const value = tutorPetTypes[key]
//   for (let i = 0; i < value.length; i++) {
//     const num = value[i]
//     if (num === 'cat') {
//       totalCats += 1
//     }
//   }
// }

// console.log(totalCats)

// // console.log(totalPets)



function sortTheKitchen(kitchen) {
  for (const key in kitchen) {
      const value = kitchen[key]
      if (typeof value === "string") {
          kitchen[key] = value.toLowerCase();
      }  
  }

  let shelves = 0
  
  delete kitchen.hoover
  if (kitchen.shelvesInCupboards && kitchen.shelvesNotInCupboards) {
      shelves = kitchen.shelvesInCupboards + kitchen.shelvesNotInCupboards 
  } else if (kitchen.shelvesInCupboards) {
      shelves = kitchen.shelvesInCupboards
  } else if (kitchen.shelvesNotInCupboards) {
      shelves = kitchen.shelvesNotInCupboards
  }
  delete kitchen.shelvesInCupboards
  delete kitchen.shelvesNotInCupboards
  kitchen.totalShelves = shelves


          

  console.log(kitchen);
  // Don't change the code below this line
  return kitchen;
}



  