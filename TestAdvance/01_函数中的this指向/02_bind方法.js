function foo() {
    console.log(this)
}

var obj = {
    name: "superb"
}

// bind()方法创建一个新的绑定函数   （了解）
var bar = foo.bind(obj) // 将foo()函数绑定到obj对象，且obj对象中无foo()函数对象
bar()