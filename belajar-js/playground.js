console.log("Hello")
console.log("Hari".length)


let text = "apple, Banana, Kiwi";
console.log(text.slice(-4, -1))
console.log(text.substring(7, 13))
console.log(text.substr(8, 7));


let sentence = "Please visit Microsoft, Microsoft, Microsoft";
let newText = sentence.replace("Microsoft", "Salt academy");
let newtTextReplaceAll = sentence.replaceAlll("Microsoft", "Salt academy");
console.log(newText)
console.log(newtTextReplaceAll)

console.log(text.toUpperCase())
console.log(text.toLowerCase())

let text1 = "hello"
let text2 = "Dunia!!!"
console.log("${text1} apa aja ${text2}")
console.log(text1 + "" + text2)

let text3 = "5";
connsole.log(text3.padStart(7, "num"))

let text4 = "HELLO WORD";
console.log(text4.charAt(6))

let text5 = "abcdef"
console.log(text5.charCodeAt(0))

let text6 = "apple,  banana,  kiwi, mango";