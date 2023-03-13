class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    running() {
        console.log("running~")
    }
    eating() {
        console.log("eating~")
    }
}
/* 
    super.method()调用一个父类方法
    super()调用一个父类constructor(只能在我们的constructor)
    super调用父类的构造函数，必须在子类构造函数中使用this或返回默认对象前
*/

class Student extends Person{
    constructor(name, age, sno, score) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.sno = sno
        this.score = score
    }

    // running() {
    //     console.log("running~")
    // }
    // eating() {
    //     console.log("eating~")
    // }
    studying() {
        console.log("studying~")
    }
}
class Teacher extends Person{
    constructor(name, age, title) {
        // this.name = name
        // this.age = age
        super(name, age)
        this.title = title
    }

    // running() {
    //     console.log("running~")
    // }
    // eating() {
    //     console.log("eating~")
    // }
    teaching() {
        console.log("teaching~")
    }
}

var stu1 = new Student("kobe", 30, 100, 99)
stu1.eating()
stu1.running()
stu1.studying()