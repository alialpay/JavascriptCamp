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