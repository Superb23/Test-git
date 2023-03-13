// 创建正则
const re1 = /qwe/ig // 包含qwe
const re2 = /^qwe$/ig   // 字符串为"qwe"
const message = "qwe asd zxc Qwe 123qwe zqWE"

// 1.test()检测某一个字符串是否符合正则的规则
// if (re1.test(message)) {
//     console.log("message符合规则")
// } else {
//     console.log("message不符合规则")
// }
// if (re2.test(message)) {
//     console.log("message符合规则")
// } else {
//     console.log("message不符合规则")
// }

// 2.exec()使用正则执行一个字符串
// const res1 = re1.exec(message)
// console.log(res1)





// 字符串方法
// 1.match()
// const res2 = message.match(re1)
// console.log(res2)
// 2.matchAll()     返回一个迭代器
// matchAll传入的正则修饰符必须加g
const res3 = message.matchAll(re1)
console.log(res3)
console.log(res3.next())
console.log(res3.next())
console.log(res3.next())
console.log(res3.next())
console.log(res3.next())



// 案例
// const inputEl = document.querySelector("input")
// const tipEl = document.querySelector(".tip")

// inputEl.oninput = function() {
//     const value = this.value
//     // console.log(value)
//     if (/^aaaa$/.test(value)) {
//         tipEl.textContent = "输入符合要求"
//     } else {
//         tipEl.textContent = "输入不符合要求"
//     }
// }