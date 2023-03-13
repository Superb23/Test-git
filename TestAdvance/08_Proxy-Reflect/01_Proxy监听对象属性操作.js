const obj = {
    name: "superb",
    age: 23,
    height: 1.75
}


// 监听属性的操作


// 使用defineProperty监听对象属性的操作     Object.defineProperty存储属性描述符
// 无法监听新增和删除属性的操作

// 1.只针对一个属性
// let _name = obj.name
// Object.defineProperty(obj, "name", {
//     set: function(newValue) {
//         console.log(`监听name的设置,值${newValue}`)
//         _name = newValue
//     },
//     get: function() {
//         console.log("监听name的获取")
//         return _name    // 此处必须返回name,不然访问不到obj.name
//     }
// })
// console.log(obj.name)
// obj.name = "kobe"


// 2.监听所有的属性：遍历所有的属性，对每一个属性使用defineProperty
// const keys = Object.keys(obj)
// for (const key of keys) {
//     let value = obj[key]
//     Object.defineProperty(obj, key, {
//         set: function(newValue) {
//             console.log(`监听${key}的设置,值为${newValue}`)
//             value = newValue
//         },
//         get: function() {
//             console.log(`监听${key}的获取`)
//             return value  
//         }
//     })
// }
// console.log(obj.name)
// obj.name = "kobe"
// console.log(obj.age)
// obj.age = 33


// 3.Proxy类创建代理对象，通过代理对象来完成所有操作，代理对象可以监听对原对象的操作
// const p = new Proxy(target, handle)  在handle中进行监听
// 3.1 创建Proxy对象
const objProxy = new Proxy(obj, {   // 捕获器
    set: function(target, key, value) {
        console.log(`监听${key}的设置值${value}`)
        target[key] = value
    },
    get: function(target, key) {
        console.log(`监听${key}的获取`)
        return target[key]
    },
    deleteProperty: function(target, key) {
        console.log(`监听${key}的删除`)
        delete target.key
    },
    has: function(target, key) {
        console.log(`监听in判断${key}属性`)
        return key in target
    }

})
// 3.2 对obj的所有操作，应该去操作objProxy
// console.log(objProxy.name)
// objProxy.name = "kobe"
// console.log(objProxy.name)
// objProxy.address = "nanjing"    // 新增属性

// delete objProxy.name
// console.log("name" in objProxy)