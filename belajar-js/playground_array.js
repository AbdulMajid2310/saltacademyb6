const fruits = ("Banana", "Orange", "Apple", "Mango");
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.push("Kiwi")
console.log(fruits);

fruits.shift()
console.log(fruits);

fruits.unshift("Durian");
console.log(fruits)

fruits[1] = "Strawberry"
console.log(fruits);

delete fruits[1]
console.log(fruits)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tebias", "Linus"];

//for(i-0; i<myGirls.length; i++) {
//    console.log(myGilrs[1])
// }

const myChildren = myBoys.concat(myGilrs);
console.log(myChildren)
console.log(myChildren.sort())

const numbers = [45, 4, 9, 16, 25];
//console.log(numbers.length) //5
for (i = 0; i < numbers.length; i++) {
    console.log(i)
}

//numbers.forEach(myFunction)

// number