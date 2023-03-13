const arr1 = [11, 12, 31, 22, 89]
const arr2 = ["qqq", "aaa", "zzz"]

function* createArrayIterator(arr) {
    yield* arr      // yield* 可迭代对象，依次迭代这个可迭代对象
}

// const arr1Gen = createArrayIterator(arr1)
// console.log(arr1Gen.next())
// console.log(arr1Gen.next())
// console.log(arr1Gen.next())
// console.log(arr1Gen.next())
// console.log(arr1Gen.next())
// console.log(arr1Gen.next())



class Person {
    constructor(name, age, height, friend) {
        this.name = name
        this.age = age
        this.height = height
        this.friend =friend
    }
    
    // 实例方法
    // [Symbol.iterator]() {
    //     let index = 0
    //     return {    // 此处返回的是迭代器
    //         next: () => {
    //             if (index < this.friend.length) {
    //                 return {done: false, value: this.friend[index++] }
    //             } else {
    //                 return { done: true }
    //             }
    //         }
    //     }
    // }
    *[Symbol.iterator]() {          //--------------------------------重点
        // yield* this.friend
        // yield* Object.keys(this)
        yield* Object.entries(this)
    }
}

const p2 = new Person("bbb", 32, 178, ["w1", "w2", "w3"])
// for (const item of p2) {
//     console.log(item)
// }

const pIterator = p2[Symbol.iterator]()
console.log(pIterator.next())
console.log(pIterator.next())
console.log(pIterator.next())
console.log(pIterator.next())
console.log(pIterator.next())