
function magicalSortingHat(names) {
    const houses = []

    for(let name of names) {
        let length = name.length

        if(length < 6)
            houses.push("Gryffindor")
        else if(length < 8)
            houses.push("Hufflepuff")
        else if(length < 12)
            houses.push("Ravenclaw")
        else
            houses.push("Slytherin")
    }

    return houses;
}


const names = ["Ravi", "Aadesh", "Arpit", "Ramesh", "Suresh", "Nagarjuna", "Venkatesh", "Krishnanendu", "Venkateshwar"]

const houses = magicalSortingHat(names)

console.log("Names\tHouses")
for(let i = 0; i < names.length; i++) {
    console.log(`${names[i]}\t${houses[i]}`)
}
