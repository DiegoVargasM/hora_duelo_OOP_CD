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
		target.res -= this.power
	}
}

/* Create second child class for effects */
class Effect extends Card {
	constructor(name, cost, definition, stat, magnitude) {
		super(name,cost)
		this.name = name
		this.cost = cost
		this.definition = definition
		this.stat = stat
		this.magnitude = magnitude
	}
	play(target) {
		if (target instanceof Unit) {
			if (this.magnitude >= 0 && this.stat == "poder") {
				target.power += this.magnitude
			} else if (this.magnitude >= 0 && this.stat == "resiliencia") {
				target.res += this.magnitude
			} else if (this.magnitude < 0 && this.stat == "poder") {
				target.power -= this.magnitude
			} else {
				target.res -= this.magnitude
			}
		}
    	else {
        	throw new Error( "Target must be a unit!" );
		}
	}
}

/* Iniciar objetos */

const blackBeltNinja = new Unit("Ninja Cinturon Negro", 5, 4, 5)
const algDificil = new Effect("Algoritmo difícil",2,"Aumenta la resistencia del objetivo en 3","resiliencia", +3)
const rechazoProm = new Effect("Rechazo de promesa no manejado", 1, "Reduce la resistencia del objetivo en 2", "resiliencia", -2)
const pairProg = new Effect("Programación en pareja", 3, "Aumenta el poder del objetivo en 2", +2)

/* Escenario */
/* Primera jugada */
const redBeltNinja = new Unit("Ninja Cinturon Rojo", 3, 3, 4)
console.log(`El jugador uno invoca la carta ${redBeltNinja.name}`)
console.log(redBeltNinja)
algDificil.play(redBeltNinja)
console.log(`El jugador uno usa ${algDificil.name} en ${redBeltNinja.name}`)
console.log(algDificil.definition)
console.log(redBeltNinja)
