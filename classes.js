class Human {
	constructor(name, age) {
		this.name = name
		if (typeof age !== "number" || age < 0) {
			throw Error(`${age} is not a valid value for a Human age.`)
		}
		this.age = age
		this.hasShoes = true
	}

	talk(sentence) {
		console.log(`${this.name} says: ${sentence}`)
	}

	growOlder() {
		this.age++
	}

	changeName(newName) {
		console.log(`old name: ${this.name}`)
		this.name = newName
		console.log(`new name: ${this.name}`)
	}

	sayMyName() {
		this.talk(`I am the one who's ${this.name}!`)
	}
}

const bob = new Human("Bob", 20)
bob.talk("I am bob!")
bob.changeName("Sam")
bob.sayMyName()

class Student extends Human {
	constructor(name, age, subject) {
		super(name, age)
		// this.name = name
		// this.age = age
		this.subject = subject
		this.skillLevel = Math.floor(Math.random() * 4)
	}

	trains() {
		this.skillLevel += Math.floor(Math.random() * 2) + 1
	}

	growOlder() {
		super.growOlder()
		this.talk(`It was my birtday, i'm now ${this.age} years old`)
		this.talk(this.skillLevel)
		this.trains()
		this.talk(this.skillLevel)
		this.trains()
		this.talk(this.skillLevel)
	}
}

const totoro = new Student("Totoro", 28, "Web Dev")
const bobo = new Student("Boboro", 19, "Web Dev")
const chalio = new Student("Chalio", 32, "Web Dev")

console.log(`Totoro starting skill level: ${totoro.skillLevel}`)

// totoro.growOlder()

class Teacher extends Human {
	constructor(name, age) {
		super(name, age)
		delete this.hasShoes
	}

	skillCheck(student) {
		if (student.skillLevel >= 10) {
			this.talk(`Congratulation ${student.name}!`)
		} else {
			this.talk("Training time!")
			student.trains()
			student.talk(`My new skill level is: ${student.skillLevel}`)
			this.skillCheck(student)
		}
	}
}

// function sum (a, b) {}

const mdn = new Teacher("MDN", Infinity)

class Classroom {
	constructor() {
		this.students = []
		this.teacher = null
	}

	addStudent(student) {
		this.students.push(student)
	}
	addTeacher(teacher) {
		this.teacher = teacher
	}

	testTime() {
		for (const student of this.students) {
			this.teacher.skillCheck(student)
		}
	}
}

console.log("=========== CLASSROOM TIME ============")

const myClassRoom = new Classroom()
myClassRoom.addStudent(totoro)
myClassRoom.addStudent(bobo)
myClassRoom.addStudent(chalio)
myClassRoom.addTeacher(mdn)

myClassRoom.testTime()

console.log(mdn)

const anotherStudent = new Student("studentName", -6)
