class Shape {

}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    getArea() {
        return this.radius * this.radius * Math.PI
    }
}

var rect1 = new Rectangle(100, 200)
var rect2 = new Rectangle(200, 300)
var c1 = new Circle(20)
var c2 = new Circle(30)

/*
    多态：不同数据类型进行同一个操作，表现出不同的行为
    多态存在的条件:
    1.必须有继承（实现接口）
    2.必须有父类引用指向子类对象
*/

function getShapeArea(shape) {
    console.log(shape.getArea)
}

getShapeArea(rect1)
getShapeArea(c1)

