//Question1

const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const item of myArray) {
        console.log(`${greetText}${item}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);



//Question2 
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar')); 
console.log(capitalize('nodeJs')); 



//Question3
const capitalize1 = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize1);

console.log(capitalizedColors); 


//Question4
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20); 



//Question5 
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);    
console.log(calculateProduct); 



//Question6 
//This is base Car class
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year; 
    }

    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}
//This is subclass extending Car
class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Protiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());



