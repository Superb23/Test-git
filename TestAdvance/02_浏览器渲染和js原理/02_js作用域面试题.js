// 面试题一
// var n = 100
// function foo() {
//     n = 200
// }
// foo()

// console.log(n)


// 面试题二
// var n = 100
// function foo() {
//     console.log(n)  // undefined    按顺序执行，此时该作用域内n还未赋值
//     var n = 200
//     console.log(n)
// }

// foo()


// 面试题三
// var n = 100

// function foo1() {
//     console.log(n)
// }

// function foo2() {
//     var n = 200
//     console.log(n)  // 200
//     foo1()      // 100
// }

// foo2()

// 面试题四
// var n = 100
// function foo() {
//     console.log(n)  // undefined
//     return
//     var n = 200
// }
// foo()

// 面试题五
// function foo() {
//     var a = b = 100
// }
// foo()
// console.log(b)  // b没用var定义，被视为全局变量window.b = b，故此处可访问到b=100
// console.log(a)  // 无法访问到a
