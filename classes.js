class Human {
	constructor(name, age = 20) {
		// const age = age
		this.age = age
		this.hasShoes = true
		this.name = name
	}

	levelUp() {
		this.age += 1
	}
	toggleShoes() {
		this.hasShoes = !this.hasShoes
	}
	changeName(newName) {
		this.name = newName
		console.log(`My name is now ${this.name}`)
	}
}

const susan = new Human("Susan", 27)

// susan.levelUp()
// console.log(susan.age)
// susan.toggleShoes()

// susan.changeName("Alice")
// console.log(susan)

class Student extends Human {
	constructor(name, age, studying) {
		// super allow us to access the class we are inheriting from
		// It will execute the constructor from the parent class
		super(name, age)
		this.studying = studying
		const randomInteger = Math.floor(Math.random() * 5) + 5
		this.skill = randomInteger
	}

	levelUp() {
		const integerBetweenOneAndTwo = Math.floor(Math.random() * 2) + 1
		this.skill += integerBetweenOneAndTwo
		console.log(
			`Added ${integerBetweenOneAndTwo} points to my skills: ${this.skill}`
		)
	}

	growOlder() {
		super.levelUp()
		this.say(`It's my birthday, i am now ${this.age}`)
	}
	say(sentence) {
		console.log(`${this.name}: ${sentence}`)
	}

	takeTest() {
		return this.skill
	}
}

const bob = new Student("Bob", 38, "Web development")
const alice = new Student("Alice", 28, "Web development")
const john = new Student("John", 46, "Web development")
const foo = new Student("Foo", 67, "Web development")
// const arrayOfStudents = [bob, alice, john, foo]

/**
 * Teacher class
 */

class Teacher extends Human {
	checkTest(student) {
		// console.log(student)
		/**
		 * student.skill or student.takeTest()
		 * gives us the same value
		 */

		if (student.skill >= 10) {
			console.log(`${student.name} passed the test!!`)
		} else {
			console.log(`${student.name} is going to train 💪`)
			student.levelUp()
		}
	}
}

const webTeacher = new Teacher("MDN", 40)

class Classroom {
	constructor() {
		this.students = []
		this.teacher = null
	}
	addStudent(oneStudent) {
		this.students.push(oneStudent)
	}
	addTeacher(teacher) {
		this.teacher = teacher
	}
	testTime() {
		console.log("=== New test ===")
		this.students.forEach((student) => {
			this.teacher.checkTest(student)
		})
	}
}

const webClass = new Classroom()
// arrayOfStudents.forEach(student => webClass.addStudent(student))
webClass.addStudent(bob)
webClass.addStudent(alice)
webClass.addStudent(john)
webClass.addStudent(foo)
webClass.addTeacher(webTeacher)

// console.log(webClass)
// webClass.teacher.checkTest(webClass.students[3])
webClass.testTime()
webClass.testTime()
webClass.testTime()
webClass.testTime()
webClass.testTime()

console.log(webClass instanceof Classroom)
console.log(webTeacher instanceof Human)
console.log(webTeacher instanceof Teacher)
console.log(webTeacher instanceof Student)

// console.log(bob)
// bob.growOlder()
// bob.growOlder()
// bob.growOlder()
// bob.growOlder()
// bob.levelUp()
// bob.levelUp()
// bob.levelUp()
// bob.levelUp()
// bob.levelUp()
// bob.levelUp()

// bob.say("I trained a lot!")
// console.log(bob)
