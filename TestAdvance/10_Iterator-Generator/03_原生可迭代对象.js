// String, Array, Map, Set, arguments对象, NodeList集合 


// 数组
// const names = ["qwe", "asd", "zxc"]
// for (const item of names) {
//     console.log(item)
// }
// console.log(names[Symbol.iterator]())

// Set
// const set = new Set(["qwe", "asd", "zxc"])
// for (const item of set) {
//     console.log(item)
// }
// console.log(set[Symbol.iterator]())


// arguments
// function foo() {
//     for (const item of arguments) {
//         console.log(item)
//     }
// }

// foo(1, "aaa", {name: "superb"})


// 常用方法
// const p1 = Promise.resolve("aaaa")
// const p2 = Promise.resolve("bbbb")
// const p3 = Promise.resolve("cccc")
// const pSet = new Set()
// pSet.add(p1)
// pSet.add(p2)
// pSet.add(p3)
// Promise.all(pSet).then(res => {
//     console.log(res)
// })