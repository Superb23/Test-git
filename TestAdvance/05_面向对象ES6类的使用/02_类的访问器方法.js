class Person {
    // 通常约定：以_开头的属性和方法，是不在外界访问
    constructor(name, age) {
        this._name = name
        this.age = age
    }

    set name(value) {   
        console.log("设置name")
        this._name = value
    }
    get name() {
        console.log("获取name")
        return this._name
    }
}

var p1 = new Person("kobe", 30)
console.log(p1.name)
p1.name = "superb"
console.log(p1.name)


// 访问器的应用场景
// 一种封装思想
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    get position() {    // 封装好position属性
        return {x: this.x, y: this.y}
    }
    get size() {    // 封装好size属性
        return {width: this.width, height: this.height}
    }
}

var rect = new Rectangle(10, 20, 100, 200)
console.log(rect.position)
console.log(rect.size)