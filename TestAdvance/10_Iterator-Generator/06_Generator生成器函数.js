/*
    生成器，函数的控制、使用，让我们更加灵活的控制函数什么时候继续执行、暂停执行        (一种特殊的迭代器)

    生成器函数
        1.function*
        2.通过yield关键字来控制函数的执行流程
        3.默认在执行时，返回一个生成器对象
            要想执行函数内部的代码，需要生成器对象调用next()方法
            当遇到yield时会中断执行
*/

// 定义生成器函数
function* foo() {
    console.log("foo1")
    yield
    console.log("foo2")
    console.log("foo3")
    yield
    console.log("foo4")

}

const generator = foo()
// 调用next方法
generator.next()
console.log("-----------")
generator.next()
console.log("-----------")
generator.next()
console.log("-----------")
generator.next()
console.log("-----------")