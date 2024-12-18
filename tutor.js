// // const tutorAges = {
// //     "Lee": 30,
// //     "Rich": 26,
// //     "Christian": 30,
// //     "Jodie": 25,
// //     "Roisin": 24
// //   };
  
// //   const tutorsAgedThirty = []
// //   for (const key in tutorAges) {
// //     const tutor = tutorAges[key]
// //     if (tutor === 30) {
// //       tutorsAgedThirty.push(tutor)
// //     }
// //   }


// // console.log(tutorsAgedThirty)



// const tutorPetTypes = {
//     'Sarah': ['cat'],
//     'Jim': ['dog', 'dog'],
//     'Joe': ['mouse'],
//     'Róisín': ['cat','cat','cat','cat','cat','dog'],
//     'Edd': ['lizard', 'cat'],
//     'Lewis': ['bearded dragon', 'tortoise']
//   }
  
//   let totalPets = 0
//   for (const key in tutorPetTypes) {
//     let value = tutorPetTypes[key]
//     for (i = 0; i < value.length; i++){
//       if (value[i] === "cat") {
//         totalPets += 1
//       }
//     }
//   }
  

// console.log(totalPets)




function sortTheKitchen(kitchen) {

    let totalShelves = 0

    for (const key in kitchen) {
        if (typeof kitchen[key] === "string") {
            let stringToChange = kitchen[key]
            stringToChange = stringToChange.toLowerCase()
            kitchen[key] = stringToChange
        } else if (key === "shelvesInCupboards") {
            totalShelves += kitchen[key]
        } else if (key === "shelvesNotInCupboards") {
            totalShelves += kitchen[key]
        }
    }
    
    delete kitchen.hoover

    kitchen.totalShelves = totalShelves

    delete kitchen.shelvesInCupboards
    delete kitchen.shelvesNotInCupboards




    // Don't change the code below this line
    return console.log(kitchen);
}


kitchen = {
    hasFridge: true,
    favouriteAppliance: 'KeTtlE',
    food: 'eGgS',
    shelvesInCupboards: 3,
    shelvesNotInCupboards: 2,
    petName: 'RhuBarB',
    hoover: 'DysOn'
  };


sortTheKitchen(kitchen)

