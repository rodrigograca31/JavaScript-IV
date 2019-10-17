/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
// function Airplane(name) {
// 	this.name = name;
// 	this.isFlying = false;
// }
// Airplane.prototype.takeOff = function () {
// 	this.isFlying = true;
// };
// Airplane.prototype.land = function () {
// 	this.isFlying = false;
// };


class Airplane {
	constructor(name) {
		this.name = name;
		this.isFlying = false;
	}

	takeOff() {
		this.isFlying = true;
	}

	land() {
		this.isFlying = false;
	}
}



/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.stomach = [];
// }

// Person.prototype.eat = function (item) {
// 	if (this.stomach.length < 10) {
// 		this.stomach.push(item);
// 	}
// };
// Person.prototype.poop = function () {
// 	this.stomach = [];
// };
// Person.prototype.toString = function () {
// 	return JSON.stringify(this);
// };

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.stomach = [];
	}

	eat(item) {
		if (this.stomach.length < 10) {
			this.stomach.push(item);
		}
	}

	poop() {
		this.stomach = [];
	}

	toString(){
		return `${this.name}, ${this.age}`;
		// return JSON.stringify(this);
	}
}


let neo = new Person({ name: "Neo", age: 20 });
console.log(neo);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// function Car(model, milesPerGallon, tank = 0, odometer = 0) {
// 	this.model = model;
// 	this.milesPerGallon = milesPerGallon;
// 	this.tank = tank;
// 	this.odometer = odometer;
// }

// Car.prototype.fill = function (gallons) {
// 	this.tank += gallons;
// };
// Car.prototype.drive = function (distance) {
// 	// this.tank -=(distance - (distance % this.milesPerGallon)) / this.milesPerGallon;

// 	if (this.tank >= distance / this.milesPerGallon) {
// 		this.odometer += distance;
// 		this.tank -= distance / this.milesPerGallon;
// 	} else {
// 		this.tank = 0;
// 		this.odometer += distance - (distance % this.milesPerGallon);

// 		return `I ran out of fuel at ${this.odometer} miles`;
// 	}
// };


class Car {
	constructor(model, milesPerGallon, tank = 0, odometer = 0) {
		this.model = model;
		this.milesPerGallon = milesPerGallon;
		this.tank = tank;
		this.odometer = odometer;
	}

	fill(gallons) {
		this.tank += gallons;
	}

	drive(distance) {
		// this.tank -=(distance - (distance % this.milesPerGallon)) / this.milesPerGallon;
		if (this.tank >= distance / this.milesPerGallon) {
			this.odometer += distance;
			this.tank -= distance / this.milesPerGallon;
		} else {
			this.tank = 0;
			this.odometer += distance - (distance % this.milesPerGallon);

			return `I ran out of fuel at ${this.odometer} miles`;
		}
	}
}

// const batmobile = new Car("BatMobile", 20);
// batmobile.fill(10);
// batmobile.drive(201);
// console.log(batmobile);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// function Baby(name, favoriteToy) {
// 	Person.call(this, name);
// 	//this.name = name;
// 	this.favoriteToy = favoriteToy;
// }

// Baby.prototype = Object.create(Person.prototype);

// Baby.prototype.play = function () {
// 	return `Playing with ${this.favoriteToy}`;
// };

class Baby extends Person {
	constructor(name, favoriteToy) {
		super(name); // Person.call(this, name);
		// this.name = name;
		this.favoriteToy = favoriteToy;
	}

	play() {
		return `Playing with ${this.favoriteToy}`;
	}
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. The window
  2. The object to the left of the dot (inside a object funtion)
  3. A specific instance of an object created by the constructor
  4. When used with call(), apply() and bind()
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
	module.exports = module.exports || {};
	if (Airplane) {
		module.exports.Airplane = Airplane;
	}
	if (Person) {
		module.exports.Person = Person;
	}
	if (Car) {
		module.exports.Car = Car;
	}
	if (Baby) {
		module.exports.Baby = Baby;
	}
}
