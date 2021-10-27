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
showProducts()



/*
console.log("Merhaba kodlama.io")

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)


const euroDun = 11.2

//euroDun = 11 // bu olmuyor

console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu kredisi","özel kredisi"]

console.log("<ul")
for (let i= 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
    
}
console.log("</ul")
*/