class Person {
    // 1.实例属性
    // 对象属性：public
    height = 1.75

    // 对象属性：private    程序员间的约定
    // _weight = 130   // 可访问，但是约定_开头的变量不访问
    // ES13新增     私有属性
    #weight = 110


    // 2.类属性(static)
    // public
    static num = 999
    // private
    static #cout = 777

    constructor(name, age) {
        this.name = name
        this.age = age
        this.address = "nanjing"
    }

    // 3.静态代码块
    static {
        console.log("hello world")
    }
}

const p = new Person("kobe", 33)
console.log(p)
console.log(p.height, p.address, p.name)