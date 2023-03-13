

var names = ["qwe", "asd", "zxc", "123"]

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

    // 3.类方法（静态方法）
    // 本质上是加到Person类上的
    static randomPerson() {
        var randomName = names[Math.floor(Math.random() * names.length)]
        // return new Person(randomName, Math.floor(Math.random() * 100))
        return new this(randomName, Math.floor(Math.random() * 100))    // this指向Person类
    }
}

var p1 = new Person()
p1.running()
console.log(Person.randomPerson())
console.log(p1)
