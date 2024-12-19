function arrayDiff(a, b) {
    c = []
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            c.push(a[i])
        }
    }   
    return console.log(c)
}



// arrayDiff([1,2], [1])

arrayDiff([1,2,2,2,3],[2])