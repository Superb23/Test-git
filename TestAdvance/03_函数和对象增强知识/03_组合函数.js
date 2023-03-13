/*
    组合函数
*/

function double(num) {
    return num * 2
}

function pow(num) {
    return num ** 2
}

// 封装函数：传入多个函数，自动将多个函数依次调用
function composeFn(...fns) {
    // 1.边界判断(edge case)
    var length = fns.length
    if (length <= 0) return
    for (var i = 0; i < fns.length; i++) {
        var fn = fns[i]
        if (typeof fn !== "function") {
            throw new Error(`position ${i}fn must be function`)  // 抛出异常
        }
    }
    // 2.返回新的函数
    return function(...args) {
        var result = fns[0].apply(this, args)
        for (var i = 1; i < fns.length; i++) {
            var fn = fns[i]
            result = fn.apply(this, [result])
        }
        return result
    }
}

var newFn = composeFn(double, pow)
console.log(newFn(100))



//------------------------------------------------------------了解即可
var obj = {
    message: "hello world"
}

// console.log(message)
// with语句可拓展作用域链
with(obj) {
    console.log(message)
}



//------------------------------------------------------------了解即可
/* 
    eval()函数，可将传入的字符串当作JavaScript代码运行
    eval会将最后一句执行语句的结果，作为返回值
*/

var codeString = `var name = "superb";
                    console.log(name);
                    "abc";`
var result = eval(codeString)
console.log(result)


