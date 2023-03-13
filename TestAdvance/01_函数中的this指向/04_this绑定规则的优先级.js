/*
    优先级：new > bind > apply/call > 隐式绑定 > 默认绑定
*/

function foo() {
    console.log(this)
}


// 1.显示绑定的优先级高于隐式绑定

// 1.1apply()高于默认绑定
// var obj = {
//     foo: foo
// }
// obj.foo.apply("aaa")

// 1.2bind()高于默认绑定
// var bar = foo.bind("aaa")
// var obj = {
//     name: "superb",
//     baz: bar
// }
// obj.bar()

// 2.new绑定优先级高于隐式绑定
// var obj = {
//     name: "superb",
//     foo: function() {
//         console.log("foo:", this)
//         console.log(this === obj)
//     }
// }

// new obj.foo()

// 3.new/显示
// 3.1new不可以和apply/call一起使用
// 3.2new绑定优先级高于bind
// var bindFn = foo.bind("aaa")
// new bindFn()

// 4.bind/apply优先级
// bind优先级高于apply/call
// var bindFn = foo.bind("aaa")
// bindFn.apply("bbb")
// bindFn.call("ccc")
