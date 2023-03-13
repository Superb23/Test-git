/*
    纯函数：
        确定的输入，一定会产生确定的输出；
        函数在执行过程中，不能产生副作用；
*/

// var names = ["qwe", "asd", "zxc", "iop"]

// 1.slice:纯函数
// var newNames = names.slice(0, 2)
// console.log(newNames)
// console.log(names)

// 2.splice:操作数组(不是纯函数)
// var deletaNames = names.splice(1, 2)    // 返回被删除的元素数组
// console.log(deletaNames)
// console.log(names)  // 对原数组进行了修改


//-------------------------------------------------------------------------------
/*
    柯里化(Currying)
        是把接收多个参数的函数，变成接收一个单一参数（最初函数的第一个参数）的函数，
        并且返回接受余下的参数，而且返回结果的新函数的技术
    
    只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数
    f(a, b, c) --> f(a)(b)(c)
*/

function foo1(x, y, z) {
    console.log(x + y + z)
}
foo1(1, 2, 3)

function foo2(x) {
    return function (y) {
        return function (z) {
            console.log(x + y + z)
        }
    }
}
foo2(1)(2)(3)

// 箭头函数的写法
// function foo3(x) {
//     return y => {
//         return z => {
//             console.log(x + y + z)
//         }
//     }
// }
var foo3 = x => y => z => console.log(x + y + z)
foo3(1)(2)(3)


// 封装函数：自动转化柯里化过程             -----------难度
function hyCurrying(fn) {
    function curryFn(...args) {
        // 第一类操作：继续返回一个新的函数，继续接收参数
        // 第二类操作：直接执行fn函数
        if (args.length >= fn.length) {
            fn(...args)
        } else {
            return function(...newArgs) {
                return curryFn(...args.concat(newArgs))
            }
        }
    }
    return curryFn
}

var fooCurry = hyCurrying(foo1)
fooCurry(1)(2)(3)