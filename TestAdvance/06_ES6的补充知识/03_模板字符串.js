const name = "superb"
const age = 23

// 模板字符串(`  ${}  `)
const info = `my name is ${name}, age is ${age}`

// 标签模板字符串的用法
function foo(...args) {
    console.log("参数:", args)
    console.log(args[0])
}

// 整个模板字符串被拆分，第一个元素是数组(被模板字符串拆分的字符串组合)，后面的元素是一个个模板字符串传入的内容
foo`my name is ${name}, age is ${age}, ${1.75}`