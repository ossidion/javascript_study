function sayHello(country, time) {
    let greeting;
    const spain  = 'Spain'
    const mexico  = 'Mexico'
    const france  = 'France'

    const isItSpain = country === spain
    const isItMexico = country === mexico
    const isItFrance = country === france


    if (isItSpain) {
        if (time >= 0 && time < 12) {
            greeting = 'buenos dias'
        } else if (time >= 12 && time < 24) {
            greeting = 'buenas noches'
        } else {
            greeting = null
        }   
    } else if (isItMexico) {
        if (time >= 0 && time < 12) {
            greeting = 'buenos dias'
        } else if (time >= 12 && time < 24) {
            greeting = 'buenas noches'
        } else {
            greeting = null
        }
    } else if (isItFrance) {
        if (time >= 0 && time < 12) {
            greeting = 'bon matin'
        } else if (time >= 12 && time < 24) {
            greeting = 'bon soir'
        } else {
            greeting = null
        }      
    } else {
        greeting = null
    }

    // Don't change code below this line
    return greeting;
}