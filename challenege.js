const tutors = {
    'Sarah': { numberOfPets: 1 },
    'Jim': { numberOfPets: 2 },
    'Rayhaan': { numberOfPets: 0 },
    'Róisín': { numberOfPets: 6 },
    'Maddie': { numberOfPets: 2 },
    'Paul': { numberOfPets: 0 }
  }
  
  let totalPets = 0
  // Start typing below this line
  
  for (const tutor in tutors) {
    const value = tutor.numberOfPets
    totalPets += value
    console.log(value)
  }
  
  //   console.log(totalPets)