// // 定义生成器函数
// function* foo() {
//     console.log("内部代码:foo1")
//     yield "aaa"
//     console.log("内部代码:foo2")
//     console.log("内部代码:foo3")
//     yield "bbb"
//     console.log("内部代码:foo4")
//     yield "ccc"
//     return undefined

// }

// // 调用生成器函数，返回一个生成器对象
// const generator = foo()
// // 调用next方法
// console.log(generator.next())   // { done: false, value: "aaa" }
// console.log(generator.next())   // { done: false, value: "bbb" }
// console.log(generator.next())   // { done: false, value: "ccc" }
// console.log(generator.next())   // { done: true, value: undefined }     当done为true时，表示迭代器迭代结束



// // 定义生成器函数
// function* foo() {
//     console.log("内部代码:foo1")
//     yield "aaa"
//     console.log("内部代码:foo2")
//     console.log("内部代码:foo3")
//     return "bbb"
//     console.log("内部代码:foo4")
//     yield "ccc"
//     return undefined

// }

// // 调用生成器函数，返回一个生成器对象
// const generator = foo()
// // 调用next方法
// // 中间位置直接return----------------------------------------
// console.log(generator.next())   // { done: false, value: "aaa" }
// console.log(generator.next())   // { done: true, value: "bbb" }    当done为true时，表示迭代器迭代结束
// console.log(generator.next())   // { done: true, value: undefined }
// console.log(generator.next())   // { done: true, value: undefined }


// function* foo(name0) {      // 第一个next想要传入的参数，一般放在函数的参数里
//     console.log("内部代码:foo1", name0)
//     const name1 = yield "aaa"       // yield接收next传入的参数
//     console.log("内部代码:foo2", name1)
//     console.log("内部代码:foo3", name1)
//     const name2 = yield "bbb"
//     console.log("内部代码:foo4", name2)
//     yield "ccc"
//     return undefined

// }

// // 调用生成器函数，返回一个生成器对象
const generator = foo("first")
// 调用next方法
// 给函数每次执行时，传入参数------------------------------
console.log(generator.next())   // 第一个next想要传入的参数，一般放在函数的参数里
console.log(generator.next("superb"))
console.log(generator.next("kobe"))
console.log(generator.next())



// 提前结束
function* foo(name0) {      // 第一个next想要传入的参数，一般放在函数的参数里
    console.log("内部代码:foo1", name0)
    const name1 = yield "aaa"       // yield接收next传入的参数
    console.log("内部代码:foo2", name1)
    console.log("内部代码:foo3", name1)
    const name2 = yield "bbb"
    console.log("内部代码:foo4", name2)
    yield "ccc"
    return undefined

}

// 调用生成器函数，返回一个生成器对象
// const generator = foo("first")

// 1.generator.return提前结束函数
// console.log(generator.next())
// console.log(generator.return("superb"))     // return立即结束
// console.log(generator.next("kobe"))
// console.log(generator.next())

// 2.generator.throw向函数抛出一个异常
// console.log(generator.next())
// console.log(generator.throw(new Error("next2 error")))     // 给生成器函数内部抛出一个异常
// console.log(generator.next("kobe"))
// console.log(generator.next())
