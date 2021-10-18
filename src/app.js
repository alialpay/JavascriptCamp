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