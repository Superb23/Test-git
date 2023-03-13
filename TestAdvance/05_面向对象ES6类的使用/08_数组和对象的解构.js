var names = ["qwe", "asd", "zxc", "123"]
var obj = {name: "superb", age: 23, height: 175}

// 1.数组的解构
// var name1 = names[0]
// var name2 = names[1]
// var name3 = names[2]
// var [name1, name2, name3] = names
// console.log(name1, name2, name3)
// 1.1有严格的顺序
// var [name1, , name3] = names
// console.log(name1, name3)
// 1.2解构出数组
// var [name1, ...newName] = names
// console.log(newName)
// 1.3解构的默认值
// var [name1, name2, name3 = "default"] = names
// console.log(name1, name2, name3)

// 2.对象的解构
// name = obj.name
// var {name, age, height} = obj
// console.log(name, age, height)
// 1.1对象的解构没有顺序，根据key解构   -----------------------------重要
// var {height, name, age} = obj
// console.log(name, age, height)
// 1.2对变量进行重命名
// var {height: wHeight, name: wName, age: wAge} = obj
// console.log(wHeight, wName, wAge)
// 1.3默认值
var {
    height: wHeight,
    name: wName,
    age: wAge,
    address: wAddress = "china"
} = obj
console.log(wName, wAge, wHeight, wAddress)
// 1.4对象的剩余内容
var {
    name,
    age,
    ...newObj
} = obj
console.log(newObj)