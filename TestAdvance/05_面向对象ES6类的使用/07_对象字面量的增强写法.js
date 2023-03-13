/* 
    1.属性的增强
    2.方法的增强
*/

var name = "superb"
var age = 23
var key = "address"

var obj = {
    // 1.属性增强
    // name: name,
    // age: age
    name,
    age,
    // 2.方法增强
    // running: function() {
    //     console.log(this)
    // }
    running() {
        console.log(this)
    },
    // 3.计算属性增强
    // address: "南京"
    [key]: "南京"
}

function foo() {
    var message = "hello world"
    var info = "hi, jack"

    // return {message: message, info: info}
    return {message, info}
}

var result = foo()
console.log(result.message, result.info)