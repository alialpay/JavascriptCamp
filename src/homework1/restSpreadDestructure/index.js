var sayi1 = 10
sayi1 = "Ali"
let student = {id:1, name:"Ali"}
//console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined, student);

let students = ["Ali Alpay", "Engin Demiroğ", "Büşra"]

//console.log(students)

let students2= [student,{id:2, name:"Merve"}, "Ankara",{city:"İstanbul"}]

//console.log(students2)

//rest
//params... c#
//varArgs... java
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
// showProducts(10, "elma","armut","karpuz")

//spread

let points = [1,2,3,4,50,4,60,54]

console.log(...points)

console.log(Math.max(...points))


console.log(..."abc","d",..."efg","h")


//destructuring

let populations = [10000,20000,30000,[40000,100000]]
let [small, medium, high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category ={id:1, name:"içecek"}

console.log(category.id)
console.log(category["name"])

let{id,name} = category

console.log(id)
console.log(name)
