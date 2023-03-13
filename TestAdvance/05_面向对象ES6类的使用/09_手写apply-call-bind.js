
// foo.__proto__ === Function.prototype
function foo(name, age) {
    console.log(this, name, age)
}

// foo当作一个对象，获取apply方法
foo.apply("qwe", ["superb", 23])
// console.log(Function.prototype === foo.__proto__)
// console.log(Function.prototype.apply === foo.__proto__.apply)
// foo.call("asd", "kobe", 18)

// 封装函数
function execFn(thisArg, otherArgs, fn) {
    // 1.获取thisArg，并确保是一个对象类型
    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

    // thisArg.fn = this
    Object.defineProperty(thisArg, "fn", {
        enumerable: false,
        configurable: true,
        value: fn
    })
    thisArg.fn(...otherArgs)

    delete thisArg.fn
}

// 1.给函数对象添加方法
Function.prototype.hyapply = function(thisArg, otherArgs) {
    // // console.log(this)   // ->当前调用的函数对象

    // // 1.获取thisArg，并确保是一个对象类型
    // thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

    // // thisArg.fn = this
    // Object.defineProperty(thisArg, "fn", {
    //     enumerable: false,
    //     configurable: true,
    //     value: this
    // })
    // thisArg.fn(...otherArgs)

    // delete thisArg.fn
    execFn(thisArg, otherArgs, this)
}

foo.hyapply(123, ["asd", 12])



Function.prototype.hycall = function(thisArg, ...otherArgs) {
    // console.log(this)   // ->当前调用的函数对象

    // // 1.获取thisArg，并确保是一个对象类型
    // thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg)

    // // thisArg.fn = this
    // Object.defineProperty(thisArg, "fn", {
    //     enumerable: false,
    //     configurable: true,
    //     value: this
    // })
    // thisArg.fn(...otherArgs)

    // delete thisArg.fn
    execFn(thisArg, otherArgs, this)
}
foo.hycall("qwe", "superb", 18)




