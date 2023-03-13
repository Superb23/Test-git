// 严格模式
// "use strict"

var names = ["qwe", "asd", "zxc"]
var nums = [11, 31, 78, 31, 0]

// 1.显示绑定null/undefined，使用的规则是默认绑定
// function foo() {
//     console.log("foo:", typeof this)
// }

// foo.apply("abc")
// // null/undefined为非包装类型，为默认绑定
// foo.apply(null)
// foo.apply(undefined)

// 2.间接函数引用，使用的规则是默认绑定
// var obj1 = {
//     name: "obj111",
//     foo: function() {
//         console.log("foo:", this)
//     }
// }

// var obj2 = {
//     name: "obj222",
// };

// // 一段代码结束后，紧接着是()[]{}，在代码结束后面需要加;

// // obj2.foo = obj1.foo
// // obj2.foo()
// (obj2.foo = obj1.foo)() // 指向window，默认绑定


// 3.箭头函数arrow function
/*
    1.不会绑定this/arguments属性
    2.不能作为构造函数来使用（不能和new一起使用）
*/
// var foo1 = (name, age) => {
//     console.log(name, age)
// }

// 优化一：箭头函数只有一个参数，()可省略
// names.forEach(item => {
//     console.log(item)
// })

// var newNums = nums.filter(item => { // 将数组中的所有偶数取出存入新的数组中
//     return item % 2 === 0
// })

// 优化二：如果函数体中只有一行执行代码(不能带return关键字)，那么{}可省略
// names.forEach(item => console.log(item))

// 优化三：只有一行代码时，这行代码的表达式结果会作为函数的返回值，默认返回
// var newNums = nums.filter(item => item % 2 === 0)

// 优化四：如果默认返回值是一个对象，那么这个对象必须加()
// var arrFn = () => 123    // 返回值的Number类型
// console.log(arrFn())

// var arrFn = () => ({name: "superb"})    // 返回值是对象
// console.log(typeof arrFn())

// 箭头函数实现nums的所有偶数平方和
// var result = nums.filter(item => item % 2 === 0)    //filter()创建一个包含通过测试的数组元素的新数组(返回值为Boolean类型)
//                  .map(item => item * item)      // map()通过对每个数组元素执行函数来创建新数组
//                  .reduce((prevValue, item) => prevValue + item) // reduce()在每个数组元素上运行函数，以生成单个值
// console.log(result)