console.log("ini typescript")

//const tuple : [string, number] = ["abc",  90]

type User= {
    name :string
    role : "administrator" | "editor" | "author"
}

let userData : user = {
    name : "Zhuan A"
    role : "administrator"
}


//parent
class Phone {
    brand : string
    size : number

    constructor (
        brand : string,
        size : number
    ) {
        this.brand = brand
        this.size = size
    }
}

class Tablet extend Phone (
    conpatibility : boolean

    constructor(brand:  string,  size: number,  conpatibility:boolean) {
        super(brand,  size)
        this.conpatibility =conpatibility
    }

)

let tabletSamsung: Tablet = new Tablet("Samsung", 24, true)

interface person  {
    name : string
    age : number
    address: string
}

interface Employee extend  person{
    title: string
    salary: number
}

let  person: person = {
    name: "Huan A"
    age: 15,
    address: "Jl. Kenangan no  99"
}

let pns: Employee ={
    title: "Pajak"
    salary: 56,
    name: "Mr.  D"
    age: 50,
    address: "Jl. Rubricon"
}

function  add(number1: number,  number2: number ): {
    
}