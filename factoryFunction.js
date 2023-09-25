function Person(name, age) {
	// const this = {}

	// return this
	this.name = name
	this.age = age

	this.levelUp = function () {
		this.age++
		console.log(`${this.name} is now ${this.age} years old.`)
	}
}

// const cat = {
//   name: 'Illiu',
//   age: 1
// }

// const anotherCat = new cat

const studentOne = new Person("Bob", 25)
const studentTwo = new Person("Alice", 27)
studentOne.levelUp()
studentOne.levelUp()
studentOne.levelUp()
studentOne.levelUp()
console.log(studentOne, studentTwo)
