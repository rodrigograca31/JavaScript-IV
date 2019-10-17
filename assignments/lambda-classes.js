// CODE here for your Lambda Classes

class Person {
	constructor(args) {
		this.name = args.name
		this.age = args.age
		this.location = args.location

		//this = (...args); ???
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`
	}
}

console.log(new Person({
	name: "rodrigo",
	age: 25,
	location: "Portugal"
}));

class Instructor extends Person {
	constructor(args) {
		super(args);
		this.speciality = args.speciality;
		this.favLanguage = args.favLanguage;
		this.catchPhrase = args.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}`;
	}

	// grade(student = Person()) {
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}

	randomGrade(student) {
		let valueToAdd = 0;
		
		// if(student.grade + valueToAdd > 100 || student.grade + valueToAdd < 1){
		// 	this.randomGrade(student);
		// } else {
		// 	student.grade += valueToAdd
		// }

		do {
			valueToAdd = Math.floor(Math.random() * 200) + -100;
		} while (student.grade + valueToAdd > 100 || student.grade + valueToAdd < 1);

		student.grade += valueToAdd;
	}
}

const alex = new Instructor({
	name: 'Alex',
	age: 30,
	location: 'UK?'
});

console.log(alex);

class Student extends Person {
	constructor(args) {
		super(args);
		this.previousBackground = args.previousBackground;
		this.favSubjects = args.favSubjects || [];
		this.grade = args.grade || Math.floor(Math.random() * 100) + 1;
	}

	listsSubjects() {
		this.favSubjects.forEach(function (currItem) {
			console.log(currItem);
		});
		// console.log([...this.favSubjects]);
	}

	PRAssignment(subject) {
		return `${student.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject) {
		return `${student.name} has begun sprint challenge on ${subject}`;
	}

	graduate() {
		// if (this.grade >= 70) {
		// 	console.log(`${this.name} has graduated! Congrats!`);
		// } else {
		// 	console.log(`${this.name} you failed the graduation!`);
		// }
		// (new Instructor()).randomGrade(this);
		return this.grade >= 70;
	}
}

const nick = new Student({
	name: 'Nick',
	age: 20,
	location: 'Germany',
	favSubjects: ["HTML", "CSS", "JS"]
});

console.log(nick);
nick.listsSubjects();


class ProjectManager extends Instructor {
	constructor(args) {
		super(args);
		this.gradClassName = args.gradClassName;
		this.favInstructor = args.favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
	}

	debugsCode(student = Student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

const remi = new ProjectManager({
	name: "Remi",
	age: 20,
	location: "UK"
});
console.log(remi);

remi.debugsCode(nick, "JS Classes")

console.log(`${nick.name} has grade: ${nick.grade}`);
// alex.randomGrade(nick);

while (!nick.graduate()) {
	console.log(nick.graduate());
	alex.randomGrade(nick);
}

console.log(nick.graduate());
console.log(`${nick.name} has grade: ${nick.grade}`);


console.log("THE END");
