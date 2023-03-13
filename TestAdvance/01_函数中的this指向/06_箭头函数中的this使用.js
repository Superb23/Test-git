// 普通函数中的this
// function foo() {
//     console.log("foo:", this)
// }

// foo()
// foo.apply("aaa")

// 箭头函数中没有this
// var bar = () => {
//     console.log("bar:", this)
// }
// bar()   // 作用域内无this，前往上层作用域(全局)中找到this=>window
// bar.apply("aaa")    // 通过apply调用也没有this

// this的查找规则                 -------------------重要

// var obj = {
//     name: "obj",
//     foo: function() {
//         var bar = () => {
//             console.log("bar:", this)
//         }
//         return bar
//     }
// }

// var fn = obj.foo()  // 返回bar()
// fn.apply("aaa")     // 箭头函数无this，前往上层作用域(function)，此时this=>obj

// 代码块才形成作用域，obj = {}，此处{}不形成作用域

// var obj = {
//     name: "obj",
//     foo: () => {
//         var bar = () => {
//             console.log("bar:", this)
//         }
//         return bar
//     }
// }

// var fn = obj.foo()  // 返回bar()
// fn.apply("aaa")// 箭头函数无this，前往上层作用域(function,箭头函数)，再往上层作用域(全局)，此时this=>window