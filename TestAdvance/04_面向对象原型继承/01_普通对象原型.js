var obj = {
    name: "superb",
    age: 23
}

console.log(obj)

/*
    每个对象都有一个特殊的内置属性[[prototype]]，这个特殊的对象可以指向另一个对象
*/

// 获取对象原型
console.log(obj.name, obj.age)
console.log(obj.__proto__)
console.log(Object.getPrototypeOf(obj)) // 获取对象原型
console.log(obj.__proto__ === Object.getPrototypeOf(obj))

// 通过get返回某个属性对应的value值时，优先在自己的对象中查找，若找到则返回，没找到则在原型对象中查找
