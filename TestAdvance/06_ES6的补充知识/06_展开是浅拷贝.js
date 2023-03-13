
const names = ["qwe", "asd", "zxc", "bnm", "iop"]
const str = "superb"

// 展开运算符的基本使用     ---可迭代对象
function foo(name1, name2, ...args) {
    console.log(name1, name2, args)
}

foo(...names)   // 将数组names每个元素展开依次传入foo()
foo(...str)

const obj = {
    name: "superb",
    age: 18
}
// foo(...obj) // 在函数调用时，用展开运算符，将对应的展开数据进行迭代

const info = {
    ...obj,
    height: 1.75,
    address: "nanjing"
}
console.log(info)