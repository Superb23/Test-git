// 定义函数
// function foo() {

// }

// 自定义属性
// foo.message = "hello world"
// console.log(foo.message)

// 默认函数对象中已经有的属性
// 1.name
// console.log(foo.name)

// 2.length属性：参数的个数(形参)
// function bar(a, b) {    // (形参)

// }
// console.log(bar.length)

// 剩余参数
// function dome(...args) {

// }
// dome("qwe", "asd", "zxc")



//----------------------------------------------------------
// function foo(m, n) {
    // arguments    类似数组对象
    // console.log(arguments)
    // console.log(arguments[1])

    // for (var i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i])
    // }

    // for (var arg of arguments) {
    //     console.log(arg)
    // }

    // 将arguments转成数组  ES6
    // var newArgs1 = Array.from(arguments)
    // console.log(newArgs1)
    // var newArgs2 = [...arguments]
    // console.log(newArgs2)

    // 将arguments转成数组
    // var newArgs3 = [].slice.apply(arguments)
    // var newArgs3 = Array.prototype.slice.apply(arguments)
    // console.log(newArgs3)   
// }

// foo(11, 22, 33, 44)


// slice方法    slice(start, end)截取数组的一段
// var names = ["qwe", "asd", "zxc", "123"]
// var newNames = names.slice()    // this->names      slice()不加参数，表示截取整个数组，浅拷贝
// console.log(newNames)



//----------------------------------------------------------
// 箭头函数中没有arguments
// function foo() {
//     var bar = () => {
//         console.log(arguments)  // 箭头函数在使用arguments会去上层作用域查找
//     }   
//     bar()
// }

// foo(111, 222, 333)



//----------------------------------------------------------
/* 
    剩余参数 rest parameters
    剩余参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参
    arguments对象不是一个真正的数组，rest参数是一个真正的数组，可以进行数组的所有操作
*/
// function foo(num1, num2, ...otherNums) {
//     // otherNums数组
//     console.log(otherNums)  // 剩余参数
// }
// foo(11, 22, 33, 44, 55)




