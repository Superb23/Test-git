/* 
    集合set
    元素不可重复
*/

// const set = new Set()
// console.log(set)

// set.add(123)
// set.add("superb")
// set.add({name: "kobe", age: 12})
// console.log(set)


// 应用场景：数组去重
// const names = ["qwe", "asd", "zxc", "asd", "123"]

// const newName = []
// for (const item of names) {
//     if (!newName.includes(item)) {
//         newName.push(item)
//     }
// }
// console.log(newName)

// const newNamesSet = new Set(names) // 自动去重
// console.log(newNamesSet)
// const newNames = Array.from(newNamesSet)    // 将集合转为数组
// console.log(newNames)


// set属性
// console.log(set.size)
// set方法
// console.log(set.delete("superb"))   // delete()删除与传入值相同的元素，并返回执行结果Boolean
// console.log(set)
// console.log(set.has(123))   // has()是否包含与传入值相同的元素，并返回结果Boolean
// set.clear() // clear()清空集合
// console.log(set)

// set.forEach(item => {
//     console.log(item)
// });

//--------------------------------------------------------------------------------
// Weak Reference(强引用) Strong Reference(弱引用)



// WeakSet和Set
// 1.WeakSet只存放对象类型
// 2.WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收
// WeakSet不可遍历，所存储的对象不能获取
let obj1 = new Object()
let obj2 = new Object()
let obj3 = new Object()

const weakSet = new WeakSet()
weakSet.add(obj1)
weakSet.add(obj2)
weakSet.add(obj3)
