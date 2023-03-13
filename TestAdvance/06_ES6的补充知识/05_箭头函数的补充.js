

// function foo() {}
// console.log(foo.prototype)  // new foo() -> f.__proto__ = foo.prototype
// console.log(foo.__proto__)  // -> Function.prototype

// 箭头函数没有显示原型，所以不能作为构造函数，无法new实例对象
// 箭头函数不绑定this,arguments,super
var bar = () => {}
console.log(bar.__proto__ === Function.prototype)
