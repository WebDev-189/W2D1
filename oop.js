/**
 * The keyword "this" in a nutshell.
 *
 * "this" is going to be in most cases what is on the left-hand side
 * of the called method.
 *
 */

// console.log(this)

const studentOne = {
	name: "Bob",
	age: 24,
	// This is a method (it's still a function in the end)
	// growOlder: function () {
	// 	this.age++
	// 	console.log(`Happy birthday ${this.name}, you are now ${this.age}`)
	// },
	growOlder: incrementAge,
}
const studentTwo = {
	name: "Alice",
	age: 27,
	// This is a method (it's still a function in the end)
	// growOlder: function () {
	// 	this.age++
	// 	console.log(`Happy birthday ${this.name}, you are now ${this.age}`)
	// },
	growOlder: incrementAge,
}

studentOne.growOlder()

studentTwo.growOlder()
studentTwo.growOlder()
studentTwo.growOlder()

studentOne.growOlder()
studentOne.growOlder()

function incrementAge() {
	this.age++
	console.log(`Happy birthday ${this.name}, you are now ${this.age}`)
}

/**
 * This is not maintanable code
 */
// const studentTwo = {
// 	name: "Alice",
// 	age: 27,
// 	// This is a method (it's still a function in the end)
// 	growOlder: function () {
// 		studentTwo.age++
// 	},
// }

// console.log(studentOne)

const cat = {
	name: "Zouzou",
	hungry: true,
	meow: function () {
		if (!this.hungry) {
			console.log("Meoow")
		} else {
			// function declaration comes with "this" context
			/**
			 * Here the function attack is executed directly by Node, not as a method of cat
			 * So "this" is going to be the Node engine, not the cat.
			 */
			// function attack() {
			// 	console.log(this)
			// 	console.log(this.name, " is slicing things with nails")
			// }
			// attack()

			const attack = () => {
				console.log(this)
				console.log(`${this.name} is slicing things with nails!`)
			}
			attack()
		}
	},
	// meow() {

	// }
}
cat.meow()

const newCat = {
	name: "John",
	meow: function () {
		setInterval(function () {
			console.log(this)
			console.log(`${this.name} says meow`)
		}, 1000)
	},
}

const arrowCat = {
	name: "John",
	age: 5,
	meow: function () {
		setInterval(() => {
			this.age++
			console.log(`${this.name} says meow`)
			console.log(this)
		}, 1000)
	},
}

arrowCat.meow()
