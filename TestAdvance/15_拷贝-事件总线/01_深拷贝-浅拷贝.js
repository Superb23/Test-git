const obj = {
    name: "superb",
    age: 23,
    friend: {
        name: "kobe",
        age: 33
    },
    running: function() { console.log("first") },
    [Symbol()]: "asd"

}


// 1.引用赋值
// const obj1 = obj

// 2.浅拷贝
// 只拷贝最外一层数据，引用会影响被拷贝的对象
const obj2 = {...obj}
console.log(obj2.friend)
obj2.friend.age = 12
console.log(obj2.friend.age)
console.log(obj.friend.age)
for (const key in obj2) {
    console.log(key)
}


// const obj3 = Object.assign({}, obj)
// obj3.friend.age = 99
// console.log(obj.friend.age)


// 3.深拷贝
// 3.1.JSON     函数和Symbol都JSON无法解析
// const obj4 = JSON.parse(JSON.stringify(obj))
// obj4.friend.age = 77
// console.log(obj.friend.age)
