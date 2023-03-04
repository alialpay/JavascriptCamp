class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1,"12345")

//protoryping
customer.name ="ali"
console.log(customer.name)

Customer.bisey="bisey"
console.log(Customer.bisey)


console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}

/////////////////////////////////////////

console.log("map foreach gibi")
let products = [
    {id:1, name:"acer", unitPrice:15000},
    {id:2, name:"asus", unitPrice:16000},
    {id:3, name:"hp", unitPrice:13000},
    {id:4, name:"dell", unitPrice:18000},
    {id:5, name:"casper", unitPrice:12000}
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("<ul>")

// console.log()
// products.map(product=>{
//     console.log(product)
//     console.log('<li>${product.name}</li>')
// })


console.log("filter yeni bir array çıkarıyor")

let filteredProducts = products.filter(product=>product.unitPrice>13000)
console.log(filteredProducts)


console.log("reduce bir accumulator görevi görür sepet toplamı vs için kullanılır")

let cartTotal = products.reduce((acc, product)=>acc + product.unitPrice, 0) //  0 başlangıç değeri
console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice*1.18)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)