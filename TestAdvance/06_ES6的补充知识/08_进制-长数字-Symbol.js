// 1.进制
console.log(100)
console.log(0b100)  // 二进制
console.log(0o100)  // 八进制
console.log(0x100)  // 十六进制

// 2.长数字     ----->数字过长使用连接符_
const num = 100_0000_0000_0000
console.log(num)

//---------------------------------------------------------
// ES6之后可以使用Symbol生成一个独一无二的值    保证key唯一
// const s1 = Symbol()
// const obj = {
//     [s1]: "qwe"
// }

// const s2 = Symbol()
// obj[s2] = "asd"

// function foo(obj) {
//     const key = Symbol()
//     obj[key] = function() {}
//     delete obj[key]
// }
// foo(obj)
// console.log(obj)


const s1 = Symbol()
const s2 = Symbol()

const obj = {
    name: "superb",
    age: 23,
    [s1]: "qwe",
    [s2]: "asd"
}

console.log(Object.keys(obj))   // 获取key(不能获取由Symbol生成的key)
console.log(Object.getOwnPropertySymbols(obj))
const symbolKeys = Object.getOwnPropertySymbols(obj)    // 获取由Symbol生成的key
for(const key of symbolKeys) {
    console.log(obj[key])
}

// description
const s3 = Symbol("aaaa")   // Symbol()可以传入description参数
console.log(s3.description)

// 通过Symbol.for()生成相同的Symbol值
const s4 = Symbol.for(s3.description)
const s5 = Symbol.for(s3.description)
console.log(s4 === s5)