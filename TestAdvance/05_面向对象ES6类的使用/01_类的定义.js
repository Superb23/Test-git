// 高内聚低耦合

class Person {
    // 1.构造函数
    // 当我们通过new关键字调用一个Person类时，默认调用class中constructor方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 2.实例方法
    // 本质上放在显示原型上Person.prototype
    running() {
        console.log(this.name + " is running")
    }
    eating() {
        console.log(this.name + " is eating")
    }
}


var p1 = new Person("kobe", 30)
p1.eating()

console.log(Object.getPrototypeOf(p1) === Person.prototype)
console.log(Person.running) // undefined    实例方法被放在显示原型上
console.log(Person.prototype.running)