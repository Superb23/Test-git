// 普通函数
// function foo() {

// }


// 生成器函数       执行会返回一个generator对象
// function* foo() {

// }



// 异步函数     执行会返回一个Promise
// async function foo() {

// }

// const bar = async function() {}
// const baz = async () => {}
// class Person {
//     async eating() {}
// }


async function foo() {
    // 1.返回普通值     ----------------------------最常见
    return 123  // => Promise.resolve(123)

    // 2.返回Promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("aaaa")
    //     }, 2000);
    // })
    // 3.返回一个thenable对象
    // return {
    //     then: function(resolve, reject) {
    //         resolve("qqqq")
    //     }
    // }
}

const p = foo()
p.then(res => {
    console.log(res)
})




/* 
    在异步函数中有抛出异常（产生错误），这个异常不会被浏览器立即处理
    进行如下处理：Promise.reject(error)
*/
async function bar() {
    console.log("11111111")
    // "qwe".filter()  // 异常
    throw new Error("异常!!!")
    console.log("22222222")

    return 123
}

bar().then(res => {
    console.log(res)
}).catch(err => {   // 捕获异常
    console.log("err:", err)
})

