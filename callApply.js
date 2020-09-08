
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







