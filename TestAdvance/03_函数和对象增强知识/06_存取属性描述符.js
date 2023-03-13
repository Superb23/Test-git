// vue2响应式原理
var obj = {
    name: "superb"
}

/* 
    对obj对象中的name添加描述符(存取属性描述符)
    get:获取属性时会执行的函数，默认为undefined
    set:设置属性时会执行的函数，默认为undefined
*/
var _name = ""
Object.defineProperty(obj, "name", {
    configurable: true,
    enumerable: false,
    set: function(value) {          // 对某个属性的设置过程进行监听
        console.log("set方法被调用了", value)
        _name = value
    },
    get: function() {               // 对某个属性的值获取过程进行监听
        console.log("get方法被调用了")
        return _name
    }
})

obj.name = "kobe"
obj.name = "jame"

console.log(obj.name)