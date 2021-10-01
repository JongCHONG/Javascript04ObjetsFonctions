//01 - Object
console.log("01 - Object \n")

var cat = {
	name: "Garfield",
	age: 3,
	isCute: true,
}
console.log(cat)
console.log("")

//02 - Combine
console.log("02 - Combine \n")

var cat2 = {
    name: "Jerry",
	age: 8,
	isCute: false,
}
var cats = [cat, cat2]
console.log(cats)
console.log(cat.age)
console.log(cat2["isCute"])
console.log("")

//03 - Even
console.log("03 - Even \n")

function checkIfEven(num) {
    if (num % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
checkIfEven(2)
checkIfEven(45)
checkIfEven(68)
console.log("")

//04 - Compare
console.log("04 - Compare \n")

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num 1 is bigger")
    } else if (num1 < num2) {
        console.log("num 2 is bigger")
    } else {
        console.log("Both are the same")
    }
}
compare(42,38)
compare(2,98)
compare(8,8)
console.log("")

//05 - Add up
console.log("05 - Add up \n")

function addUp(num) {
    var result = 0
    var i = 1
    while (i <= num) {
        result = result + i
        i++
    }
    console.log(result)
}
addUp(12)
console.log("")

//06 - Time
console.log("06 - Time \n")

function format(num) {
    var h = 0
    var m = 0
    var s = 0

    h = num / 3600
    m = (num / 60) % 60
    s = num % 60
    console.log(Math.floor(h) + ":" + Math.floor(m) + ":" + s)

}
format(7200)
console.log("")

//Bonus
console.log("Bonus \n")

function generatePassword(num) {
    var random = 0
    var min = 65
    var max = 90
    var i
    var mdp = ""

    if (num < 6 || num > 15) {
        console.log("Error")
    } else {
        for (i = 0; i < num; i++) {
            random = Math.floor(Math.random() * (max - min + 1) + min)
            mdp = mdp + String.fromCharCode(random)
            console.log(random)
        }
        console.log(mdp)
    }
}
generatePassword(6)
console.log("")

//Bonus II
console.log("Bonus II \n")

function launchDice(numberofDice) {
    var i
    var somme = 0
    var random = 0
    var min = 1
    var max = 6
    var result = 0

    for (i = 1; i <= numberofDice; i++) {
        random = Math.floor(Math.random() * (max - min + 1) + min)
        // console.log(random)
        somme = somme + random
        if (result == 0) {
            result = random
        } else {
            result = result + " + " + random
        }
    }
    console.log(result + ' = ' + somme)
    return somme
}

var joueur1 = launchDice(5)
var joueur2 = launchDice(5)

if (joueur1 > joueur2) {
    console.log(joueur1 + " ! Joueur 1 YOU WIN!")
    console.log(joueur2 + " ! Joueur 2 YOU LOSE!")
} else if (joueur1 < joueur2) {
    console.log(joueur2 + " ! Joueur 2 YOU WIN!")
    console.log(joueur1 + " ! Joueur 1 YOU LOSE!")
} else {
    console.log("Nobody win...")
}

