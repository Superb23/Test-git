// const nums = [123, 231, "qwe", "iop"]
// console.log(names.at(-1))



// const obj = {
//     name: "superb",
//     age: 18,
//     __proto__: {
//         address: "nanjing"  // 在对象的隐式原型上，不在对象属性内
//     }
// }

// console.log(obj.name, obj.age)
// console.log(obj.address)

// // 逐渐被弃用   实例方法
// console.log(obj.hasOwnProperty("name"))
// console.log(obj.hasOwnProperty("address"))

// // ES13新增     类方法(静态方法)
// console.log(Object.hasOwn(obj, "name")) // 判断对象是否有某个自己的属性
// console.log(Object.hasOwn(obj, "address"))


const info = Object.create(null)    // 创建一个Object对象，该实例对象的隐式原型指向null
info.name = "superb"
// hasOwnProperty是实例方法，在实例对象方法中没有则去其隐式原型中查找hasOwnProperty方法，但此时info的隐式原型指向null，无法调用该方法
// console.log(info.hasOwnProperty("name"))

console.log(Object.hasOwn(info, "name"))


