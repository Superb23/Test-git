var obj = {
    name: "superb",
    age: 18
}
/*
    configurable:表示属性是否通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
    -当我们直接在一个对象上定义某个属性时，这个属性的configurable为true
    -当我们通过属性描述符定义一个属性时，这个属性的configurable为false
*/
Object.defineProperty(obj, "name", {
    configurable: false     // 告诉js引擎，obj对象的name属性不可以被删除
})

delete obj.name
console.log(obj)

/*
    enumerable:表示属性是否可以通过for-in或者Object.keys()返回该属性
    -当我们直接在一个对象上定义某个属性时，这个属性的enumerable为true
    -当我们通过属性描述符定义一个属性时，这个属性的enumerable为false
*/
Object.defineProperty(obj, "age", {
    enumerable: false       // 告诉js引擎，obj对象的age属性不可以枚举（通过for-in或者Object.keys()返回该属性）
})

// 通过Object.defineProperty添加一个新的属性
Object.defineProperty(obj, "address", {})
delete obj.address
console.log(obj)

console.log(Object.keys(obj))



/*
    writable:表示是否可以修改属性的值
    -当我们直接在一个对象上定义某个属性时，这个属性的writable为true
    -当我们通过属性描述符定义一个属性时，这个属性的writable为false
*/
Object.defineProperty(obj, "name", {
    writable: false,     // 告诉js引擎，obj对象的name属性不可以被修改
    value: "why"        // 告诉js引擎，返回这个value
})
obj.name = "kobe"
console.log(obj.name)




