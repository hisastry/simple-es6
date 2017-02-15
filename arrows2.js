function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  setTimeout(function(){console.log(`Hello ${this.name}`)}.bind(this), 1000);
}

Person.prototype.sayHelloArrow = function() {
  setTimeout(() => {console.log(`Hello ${this.name} from Arrow function`)}, 1000);
}

var p1 = new Person('Sastry');
p1.sayHello();
p1.sayHelloArrow();
