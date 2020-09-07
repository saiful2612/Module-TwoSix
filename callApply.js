
//  module-26.2

const normalPerson={
    firstName:'Saiful',
    lastName:'Riyaz',
    salary:1000,
    getFullName:function(){
         console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}



// console.log(normalPerson);                  // Getting object with all property

//  console.log(normalPerson.firstName);       // Getting Object 1st(specific) property

// normalPerson.getFullName();                 // Accessing property by the method

// normalPerson.chargeBill(250);
// console.log(normalPerson.salary);           //  Accessing method outside of the object





