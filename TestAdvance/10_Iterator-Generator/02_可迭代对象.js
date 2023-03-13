// const infos = {
//     friends: ["superb", "kobe", "aaa"]

// }


// 给infos创建一个迭代器，迭代infos中的friends
// let index = 0
// const infosIterator = {
//     next: function() {
//         // done
//         // value
//         if (index < infos.friends.length) {
//             return { done: false, value: infos.friends[index++] }
//         } else {
//             return { done: true }
//         }
//     }
// }
// console.log(infosIterator.next())
// console.log(infosIterator.next())



/* 
    将infos变成一个可迭代对象
    1.必须实现一个特定函数:[Symbol.iterator]
    2.这个函数需要返回一个迭代器(这个迭代器用于迭代当前对象)
*/
const infos = {
    friends: ["superb", "kobe", "aaa"],
    
    [Symbol.iterator]: function() {
        let index = 0
        return {
            next: () => {
            // done
            // value
                if (index < this.friends.length) {
                    return { done: false, value: this.friends[index++] }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

// 可迭代对象必然具备下面特点
// 可迭代对象必然有一个[Symbol.iterator]函数        -------重要
// const iterator = infos[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())

// const num = [1, 2, 3, 4, 5]
// const numIterator = num[Symbol.iterator]()
// console.log(numIterator.next())

// 可迭代对象可以进行for of操作
// for (const item of infos) {
//     console.log(item)
// }


// 迭代infos中的key/value
const info = {
    name: "superb",
    age: 23,
    height: 1.75,

    [Symbol.iterator]: function() {
        const entries = Object.entries(this)    // 返回一个数组，数组元素为[key, value]
        // const keys = Object.keys(info)
        let index = 0
        return {
            next: () => {
                if (index < entries.length) {
                    return { done: false, value: entries[index++] }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

// info对象
for (const item of info) {
    console.log(item)
}