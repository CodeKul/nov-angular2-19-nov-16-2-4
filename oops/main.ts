import {Car} from './car'
import {Bmw} from './bmw'
import {Animal} from './animal'
import {Tiger} from './tiger'

// let car : Car = new Car('Simple',10,500);

// console.log('Car Speed is - '+car.increaseSpeed());

// var bmw : Bmw = new Bmw('X7',50,600,14);
// console.log('Bmw Speed is - '+bmw.increaseSpeed());

var carBmw : Car = new Bmw('X7',50,600,14);
carBmw.increaseSpeed();

//var bmwCar : Bmw = new Car('Simple',10,500);

var animal : Animal  = new Tiger(); 
animal.walk();