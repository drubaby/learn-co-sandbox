function doNothing() {}

function sayHello() {
  console.log('Hello!')
}

function sayHelloToIsabel() {
  console.log("Hello, Isabel!")
  }
  
function doSomething(thing) {
  console.log(thing)
}

doSomething('anything')

function sayHelloTo(firstName) {
  console.log('Hello, ${firstName}!')
}
  
sayHelloTo('Isabel')
sayHelloTo("Jane")
sayHelloTo("R2-D2")
sayHelloTo(1)

function say(greeting, firstName) {
  console.log('${greeting}, ${firstName}!')
}

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`)
}

say("Goodbye", "Julio")