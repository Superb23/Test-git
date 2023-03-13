
const obj = {
    name: "superb",
    age: 19,
    friend: {
        name: "kobe",
        age: 30
    }
}

// 1.赋值引用
// const obj1 = obj

// 2.浅拷贝 ---------只拷贝表面一层
// const obj2 = {
//     ...obj
// }
// obj2.age = 23
// console.log(obj, obj2)

// obj2.friend.age = 66
// console.log(obj.friend.age, obj2.friend.age)    // obj2.friend记录的是friend对象的引用

// 3.深拷贝 -----------完全拷贝
// 方式一：第三方库
// 方式二：自己实现

// 方式三：利用现有的js机制，实现深拷贝JSON
const obj3 = JSON.parse(JSON.stringify(obj))    // 利用JSON对obj对象进行序列化和反序列化得到新的对象

obj3.friend.age = 10
console.log(obj.friend.age, obj3.friend.age)