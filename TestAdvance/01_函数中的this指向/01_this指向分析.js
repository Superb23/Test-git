/*
    "use strict"
    严格模式下，独立调用的函数中的this指向的是undefined
 */

// 1.直接调用
// 普通函数被独立调用--->默认绑定--->window
function foo() {
    console.log(this)
}
foo()

/*
    1.创建新的空对象
    2.将this指向这个空对象
    3.执行函数体中的代码
    4.没有显示返回非空对象时，默认返回这个对象
*/ 
// new绑定  指向这个创建新的空对象
function func() {
    this.name = "superb"
    console.log(this)
}
new func()

// 2.将foo放到一个对象中，再调用
// 隐式绑定--->obj
var obj = {
    name: "superb",
    bar: foo
}
obj.bar()


// 函数定义在对象中，但是独立调用--->默认绑定--->window
var baz = obj.bar
baz()

// 高阶函数，独立调用--->默认绑定--->window
function test(fn) {
    fn()
}
test(obj.bar)



// 3.通过call/apply调用     （掌握）
// 执行函数，并且强制this就是obj对象    显示绑定

// call     第一个参数：绑定this；参数列表：后续的参数以多参数的形式传递，作为实参
// foo.call(obj, "name", 18, 1.75)

// apply    第一个参数：绑定this；第二个参数：传入额外实参，以数组形式
// foo.apply(obj, ["name", 18, 1.75])
