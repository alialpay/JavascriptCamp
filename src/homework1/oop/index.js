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
    customer(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    customer(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}