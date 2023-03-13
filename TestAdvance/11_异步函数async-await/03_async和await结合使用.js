
// 普通函数     ------返回的是Promise
function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
            // reject("error")
        }, 2000);
    })
}
// 1.定义一些异步函数
async function test() {
    console.log("test function")
    return "test"
}

async function bar() {
    console.log("bar function")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("bar")
        }, 2000);
    })
}

async function demo() {
    console.log("demo function")

    return {
        then: function(resolve) {
            resolve("demo")
        }
    }
}


// 2.调用的入口async函数
// await不仅后面跟返回Promise的普通函数，还可以跟异步函数
async function foo() {
    const res1 = await requestData("data")
    console.log("res1:",res1)
    const res2 = await test()
    console.log("res2:",res2)
    const res3 = await bar()
    console.log("res3:",res3)
    const res4 = await demo()
    console.log("res4:",res4)
}

foo()