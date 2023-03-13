/*
    var允许重复声明变量，let/const不允许重复声明变量
    const关键字(constant)   表示保存的数据一旦被赋值，就不能修改
    (但如果赋值的是引用类型，那么可以通过引用找打对应的对象，修改对象的内容)
*/

// let message1 = "why"
// message1 = 123

// // 2.const
// const message2 = 234
// // message2 = ""

// // 赋值引用类型
// const obj = {
//     name: "superb",
//     age: 18
// }
// // obj = {} //不能修改obj赋值的地址

// obj.name = "kobe"
// obj.age = 33

//---------------------------------------------------------------
// 1.var声明的变量会进行作用域提升
// console.log(message)    // 可以访问，但未被赋值
// var message = "hello"

// // 2.let/const
// console.log(msg1)   // 不可访问，但已经提前被创建出来
// let msg1 = 123
// const msg2 = {}

//---------------------------------------------------------------
// 暂时性死区TDZ

// let/const不添加到window


// 块级作用域，使用let/const/function/class声明的变量是有块级作用域
{
    let age = 12
    const message = "qwe"
    class Person {
        
    }
    function foo() {
        
    }
}

// console.log(age)
// console.log(message)
// const p = new Person()
console.log(foo)    // 函数也拥有块级作用域，但由于引擎会对函数的声明进行特殊的处理，所以外面依然能访问到