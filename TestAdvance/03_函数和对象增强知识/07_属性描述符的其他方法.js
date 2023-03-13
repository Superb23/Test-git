var obj = {
    name: "superb",
    age: 18
}

// 1.获取属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, "name"))
console.log(Object.getOwnPropertyDescriptors(obj))

// 2.阻止对象的扩展
Object.preventExtensions(obj)
obj.address = "南京市"
console.log(obj)

// 3.密封对象(不能进行配置)
Object.seal(obj)
delete obj.name
console.log(obj)

// 4.冻结对象(不能进行写入)
Object.freeze(obj)
obj.name = "kobe"
console.log(obj)

