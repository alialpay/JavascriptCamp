console.log('hello world');
//
let faiz = 0.3;
faiz=1;
console.log(faiz);
//const faizC = 0.3;
//faizC=1;            //faizC const tanımlandığı için hata verir
//console.log(faizC);

/* 
    Primitives      Reference
    -String         -Object
    -Number         -Array
    -Boolean        -Function
    -undefined
    -null;
*/

let name ="Ali";
let age =27;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;
//

let person = {
    ad :"Ali",
    yas :27
}
person.ad='Veli'
person['ad'] = 'Aliii'
console.log(person)     //{ad: 'Aliii', yas: 27}
//

let seciliRenk = ['red', 'blue'];
seciliRenk[2] = 1           //arraye veri eklemek
console.log(seciliRenk);        //(3) ['red', 'blue', 1]
console.log(seciliRenk.length); //3

//Functions


function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);

}

greet('Ali', 'Alpay');      // hello Ali Alpay
greet('Marry');             // hello Marry undefined

//
function square(number) {
    return number*number;
}
console.log(square(5))      //25