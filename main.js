/* Create parent class */
class Card {
	constructor(name, cost) {
		this.name = name
		this.cost = cost
	}
}

/* Create first child class for units */
class Unit extends Card {
	constructor(name, cost, power, res) {
		super(name, cost)
		this.power = power
		this.res = res
	}
	attack(target) {
		//reduce target res by power
	}
}

/* Create second child class for effects */
class Effect extends Card {
	constructor(name, cost, stat, magnitude, amount ) {
		super(name, cost)
		this.stat = stat
		this.magnitude = magnitude
		this.amount = amount
		this.text = console.log(`${this.magnitude} the target's\n ${this.stat} by ${}`)
	}
	play(target) {
		if( target instanceof Unit ) {
        // implementa el texto de carta aquí
    	} else {
        	throw new Error( "Target must be a unit!" );
    }
	}
}