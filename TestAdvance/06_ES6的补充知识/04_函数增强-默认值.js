function foo(arg1, arg2) {

    // 不严谨
    // arg1 = arg1 ? arg1 : "默认值"
    // arg1 = arg1 || "默认值"

    // 严谨写法
    // arg1 = (arg1 === undefined || arg1 === null) ? "默认值" : arg1
    // ES6新增写法
    // arg1 = arg1 ?? "默认值"
}

// 设置默认值，不会对null
function foo1(arg1 = "defalut", arg2) {

}


/*
    默认参数的注意事项：
    1.有默认参数的形参尽量写到后面
    2.有默认参数的形参，是不会计算在length之内(并且后面所有的参数都不会计算在length之内)
    3.剩余参数放在默认参数的后面
*/

function baz(age, name = "defalut") {

}
baz(18)
console.log(baz.length)


// 默认参数的解构

// function bar({name, age} = {name: "kobe", age: 18}) {   // 解构
//     console.log(name, age)
// }

function bar({name = "kobe", age = 18} = {}) {  // 解构一个空对象，但是name和age是undefined，可设置默认值
    console.log(name, age)
}

bar()