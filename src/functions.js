function addToCart(productName="elma", quantity) {
    console.log("sepete eklendi : ürün : " + productName + " adet: " + quantity )
}

// undefined: ben aslında yoğum

// addToCart()
addToCart(10)
// addToCart(15)

let sayHello = ()=>{
    console.log("hello world")
}

sayHello()


let sayHello2= function (){
    console.log("hello world 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    console.log("sepete eklendi : ürün:" + productName + " adet:" + quantity )
}

addToCart2("Elma",5,10)

let product1 = {productName: "Elma",unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "Elma",unitPrice:10, quantity:5}
let product3 = {productName: "Elma",unitPrice:10, quantity:5}

product2 = product3
product2.productName = "Karpuzz"

console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2
sayi2 = 100

console.log(sayi1)

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName: "Elma",unitPrice:10, quantity:5},
    {productName: "Ananas",unitPrice:10, quantity:5},
    {productName: "Ayva",unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { // rest operatörü: "..." gönderinlen değerleri array içine alır
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}


add(20,30)
// add(20,30,40)
// add(20,30,40,50)


// spread

// veriler backendden array halinden gelecek:
// ... üç nokta ile veriyi ayırırız
let numbers = [20,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

// spread ayrıştırır, rest toparlar

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu", pop:"20M"},
    {name:"Marmara", pop:"300M"},
    {name:"Karadeniz", pop:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Rize","Ordu"]
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.pop)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
( {productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
 = {productName: "Ayva",unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
