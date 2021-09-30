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
    var h
    var m
    var s

    h = num / 3600
    m = (num - 3600) / 60
    s = num - 3600 - 60
    console.log(Math.floor(h) + ":" + Math.floor(m) + ":" + s)
}
format(3700)