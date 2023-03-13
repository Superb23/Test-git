const obj = {
    name: "superb",
    age: 23,
    height: 1.75,
    address: "nanjing"
}

// 1.获取所有的key
const keys = Object.keys(obj)
console.log(keys)

// 2.Object.values
const values = Object.values(obj)
console.log(values)

// Object.entries
// 1.对对象操作
const entries = Object.entries(obj) // 将对象的每个<key,value>组合成一个数组，将这些数组组合成一个大数组
console.log(entries)
for (const entry of entries) {
    const [key, value] = entry
    console.log(key, value)
}

const info = Object.fromEntries(entries)    // 转回对象
console.log(info)

// 2.对数组/字符串操作
console.log(Object.entries(["qwe", "asd"])) // 将数组的<索引,元素>组合成一个数组，将这些数组组合成一个大数组
console.log(Object.entries("superb"))   // 将字符串的每一位<索引,字符>组合成一个数组，将这些数组组合成一个大数组


