/* 
    new出来的对象，具有隐式原型，它指向构造函数的显示原型，该显示原型中的constructor指向这个构造函数
    在构造函数的原型上加入方法，new得到的所有对象都可调用，且不会重复创建该方法
*/

function Student(name, age) {
    this.name = name
    this.age = age

    // 1.方式一：编写函数时，会创建很多个函数对象
    // this.eating = function() {
    //     console.log(this.name + "is eating")
    // }
}

// 当我们多个对象拥有共同的值时，我们可以将它放到构造函数对象的显示原型
// 由构造函数创建出来的所有对象，都会共享这些属性
Student.prototype.eating = function() {
    console.log(this.name + " is eating")
}

var stu1 = new Student("superb", 23)
var stu2 = new Student("why", 18)
var stu3 = new Student("kobe", 20)

/* 
    在构造函数的原型上加入方法，new得到的所有对象都可调用，且不会重复创建该方法
*/
stu1.eating()

// 函数的原型对象中的属性constructor指向函数
var StudentPrototype = Student.prototype
console.log(StudentPrototype)
console.log(StudentPrototype.constructor)
console.log(StudentPrototype.constructor === Student)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

// 重写原型对象
Student.prototype = {
    message: "hello world",
    info: {name: "nike", age: 17},
    running: function() {},
    constructor: Student    // 将重写的原型对象指向构造函数
}

var stu4 = new Student()
console.log(stu4.message)
