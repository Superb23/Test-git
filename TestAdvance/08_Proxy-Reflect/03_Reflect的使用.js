/* 
    Reflect反射，一个对象，实例方法，提供更多的对象方法(像Object中操作对象的方法)
    Object，一个类，可用类方法
*/

const obj = {
    _name: "superb",
    set name(newValue) {
        console.log("this:", this)  // 默认obj
        this._name = newValue
    },
    get name() {
        return this._name    
    }
}

// Object.defineProperty(obj, "name", {
//     configurable: false
// })


// delete obj.name
// if (obj.name) {
//     console.log("name没有删除成功")
// } else {
//     console.log("name删除成功")
// }

// if (Reflect.deleteProperty(obj, "name")) { 
//     console.log("name删除成功")
// } else {
//     console.log("name没有删除成功")
// }


//----------------------------------------------------------
// Reflect和Proxy
// const objProxy = new Proxy(obj, {
//     set: function(target, key, newValue, receiver) {
//         // target[key] = newValue
//         // 好处一：代理对象的目的是不操作原对象
//         // 好处二：Reflect.set方法有返回Boolean值，可以判断本次操作是否成功
//         // 好处三：receiver就是外层Proxy对象，Reflect.set/get最后一个参数，可以决定对象访问器setter/getter的this指向
//         console.log("proxy中设置方法被调用")
//         const isSuccess = Reflect.set(target, key, newValue)
//         // const isSuccess = Reflect.set(target, key, newValue, receiver)  // 改变this->Proxy

//     },
//     get: function(target, key, receiver) {
//         console.log("proxy中设置方法被调用")
//         return Reflect.get(target, key, receiver)
//     }
// })

// objProxy.name = "kobe"
// console.log(objProxy.name)



//----------------------------------------------------------
// Reflect和construct
function Person(name, age) {
    this.name = name
    this.age = age
}

function Student(name, age) {
    // Person.call(this, name, age)
}

// const stu = new Student("superb", 23)
const stu = Reflect.construct(Person, ["superb", 23], Student)
console.log(stu.__proto__ === Student.prototype)