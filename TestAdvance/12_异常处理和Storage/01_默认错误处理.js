/* 
    throw抛出一个异常
    函数中的代码遇到throw之后，后续代码都不会再执行
*/
function foo() {
    console.log("function1")
    throw new Error("error1")
    console.log("function2")
}

// foo()
// 捕获异常
try {
    foo()
} catch (error) {
    console.log(error.message, error.name, error.stack)
} finally {     // 无论是否存在异常，都会执行
    console.log("无论有无error都会执行")
}