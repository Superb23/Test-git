// 1.flat的使用：
// 将一个数组，按照指定的深度遍历，将遍历到的元素和子数组中的元素组成一个新的数组，进行返回
const nums = [10, 20, [11, 22], 111, [1, 2, 3], [[31, 21], [45, 77]]]
const newNums1 = nums.flat(1)   // 传入遍历的深度
console.log(newNums1)
const newNums2 = nums.flat(2)
console.log(newNums2)

// 2.flatMap()使用映射函数映射每个元素，然后将结果压缩成一个新数组
const messages = [
    "hello world superb",
    "aaa sss ddddd",
    "asd 123"
]
// 先进行map，再进行flat操作
// const newMessages = messages.map(item => item.split(" "))
// const finalMessages = newMessages.flat(1)
// console.log(finalMessages)

const finalMessages = messages.flatMap(item => item.split(" "))
console.log(finalMessages)