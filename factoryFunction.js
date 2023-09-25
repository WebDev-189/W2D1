/**
 * This is one of the old way to create Classes
 * I like to show it because there is a bit less abstraction
 */

function Person(name, age) {
	// The next line is done automatically or you
	// Because of the "new" keyword
	// const this = {}

	this.name = name
	this.age = age

	// The next line is done automatically or you
	// Because of the "new" keyword
	// return this

	this.say = function (sentence) {
		console.log(sentence)
	}

	this.growOlder = function () {
		this.age++
		this.say(`${this.name} is now ${this.age} years old.`)
	}

	this.greet = function (person) {
		// this.say(`Here is the person received as argument:`, person)
		this.say(`${this.name} greets ${person.name}`)
	}
}

const susan = new Person("Susan", 45)
const monika = new Person("Monika", 28)
console.log(susan)
monika.say("I'm learning 'this'")

monika.greet(susan)
