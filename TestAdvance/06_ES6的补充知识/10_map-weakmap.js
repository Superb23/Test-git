/* 
    Map，用于存储映射关系
*/

// 1.对象类型的局限性：不可以使用复杂类型作为key
// 对象类型[info1]和[info2]作为关键字都会转为字符串类型，且相同，故后者会覆盖前者
const info1 = {name: "superb"}
const info2 = {age: 18}

// const obj = {
//     address: "nanjing",
//     [info1]: "qwe",
//     [info2]: "hehhh"
// }
// console.log(obj)

// 2.Map映射类型
// 可用于对象作为key
const map = new Map()
map.set(info1, "1111")
map.set(info2, "aaaa")
console.log(map)

// map属性
console.log(map.size)
// map方法
// map.delete(info1)
// console.log(map)

// console.log(map.has(info1))

// console.log(map.has(info1))
// map.clear()
// console.log(map)

// foreach获取value
map.forEach(item => {   
    console.log(item)
});

// forof获取数组[key, value]
for (const item of map) {
    const [key, value] = item   // 解构
    console.log(value)
}


// WeakMap
// 1.WeakMap只存放对象类型
// 2.WeakMap对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收
// WeakSet不可遍历
let obj1 = {name: "qwe"}
let obj2 = {name: "asd"}

const weakMap = new WeakMap()
weakMap.set(obj1, "qqqqq")
weakMap.set(obj2, "aaaaa")

obj1 = null
obj2 = null