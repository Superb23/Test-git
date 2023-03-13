
class Person {
    constructor(name, age, height, friend) {
        this.name = name
        this.age = age
        this.height = height
        this.friend =friend
    }
    
    // 实例方法
    [Symbol.iterator]() {
        let index = 0
        return {    // 此处返回的是迭代器
            next: () => {
                if (index < this.friend.length) {
                    return {done: false, value: this.friend[index++] }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

const p1 = new Person("aaa", 12, 156, ["q1", "q2", "q3"])
const p2 = new Person("bbb", 32, 178, ["w1", "w2", "w3"])

for (const item of p1) {
    console.log(item)
    if (item === "q2") {
        break
    }
}