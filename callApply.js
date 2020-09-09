
//  module-26.2

const normalPerson={
    firstName:'Saiful',
    lastName:'Riyaz',
    salary:1000,
    getFullName:function(){
         console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary=this.salary-amount;
        return this.salary;
    },
    houseRent: function(cost,serviceCharge,extra){
        this.salary=this.salary-cost-serviceCharge-extra;
        return this.salary;
    }
}




// console.log(normalPerson);                  // Getting object with all property

//  console.log(normalPerson.firstName);       // Getting Object 1st(specific) property

// normalPerson.getFullName();                 // Accessing property by the method

// normalPerson.chargeBill(250);
// console.log(normalPerson.salary);           //  Accessing method outside of the object

// 26.3

const heroPerson={
    firstName:'Hero',
    lastName: 'balam',
    salary:2500
}

const frndlyPerson={
    firstName:'Hero',
    lastName: 'Golam',
    salary:3000
}

// const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);       // Apply of ' bind ' 
// heroChargeBill(110);                                                 //  Call  new function         
// console.log(heroPerson.salary);                


// 26.4

// normalPerson.chargeBill.call(frndlyPerson,340);                          // Apply of 'call'
// normalPerson.chargeBill.call(heroPerson,500);
// console.log(frndlyPerson.salary);
// console.log(heroPerson.salary);


// const savings= normalPerson.houseRent.call(heroPerson,600,100,30);
// console.log(savings);          // console.log(heroPerson.salary) gives us same result


// const deposit= normalPerson.houseRent.apply(frndlyPerson,[1500,250,40]);      // Apply of 'Apply'
// console.log(deposit);

//  26.5

var name='saiful';

function add(num1, numb2){
    var result =num1+numb2 ;
    // console.log('inside=',result);       // Inside variable can call inside 
    // console.log(name);                   // Outside variable can call inside 
    function double(num){
        return num*2;
    }
    var total= double(result);
    return total;
}

//  console.log(result)                   // Inside variable cann't call outside

// var sum= add(12,21);
// console.log(sum);

// console.log(name);                    // Outside variable can call outside   

// 26.6

class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary
    }
}

// const heroPerson= new person('Hero', 'Balam',2000)
// console.log(heroPerson);


//  26.7







