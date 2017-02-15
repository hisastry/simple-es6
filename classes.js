class Person {
   constructor(name){
     this.name = name;
   }

   sayHello(){
     console.log(`My name is ${this.name}`);
   }
}

var p = new Person('Sastry');
p.sayHello();

console.log(p.__proto__ === Person.prototype);
