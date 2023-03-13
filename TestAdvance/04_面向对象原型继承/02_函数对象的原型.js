/*
    1.将函数看作是一个普通对象，它具有__proto__(隐式原型)   --->get某属性对应的value时，会向上查找到原型中
    2.将函数看作是一个函数，它具有prototype(显示原型)   --->用来构建对象时，给对象设置隐式原型
*/

function Foo() {
    // 1.创建空的对象
    // 2.将Foo的prototype原型（显示原型）赋值给空对象的__proto__（隐式原型）
}

console.log(Foo.prototype)

var f1 = new Foo()
var f2 = new Foo()
var f3 = new Foo()
console.log(f1.__proto__)
console.log(f1.__proto__ === Foo.prototype)
console.log(f2.__proto__ === f3.__proto__)