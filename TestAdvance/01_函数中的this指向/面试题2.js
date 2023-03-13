// 显示绑定(apply/call/bind)能将this绑定给指定对象，箭头函数无this，故显示绑定箭头函数是无效的
var name = "window"

/*
    1.创建一个空对象
    2.将这个空的对象赋值给this
    3.执行函数体中的代码
    4.将这个新对象默认返回
*/
function Person(name) {
    this.name = name
    this.foo1 = function() {
        console.log(this.name)
    }
    this.foo2 = () => console.log(this.name),
    this.foo3 = function() {
        return function() {
            console.log(this.name)
        }
    }
    this.foo4 = function() {
        return () => {
            console.log(this.name)
        }
    }
}
// 实例(instance)
var person1 = new Person("person1")
var person2 = new Person("person2")

person1.foo1()  //this->person1隐式绑定
person1.foo1.call(person2)  //this->person2显示绑定

person1.foo2()  //this->person1上层作用域
person1.foo2.call(person2)  //this->person1上层作用域

person1.foo3()()    //this->window默认绑定
person1.foo3.call(person2)()    //this->window默认绑定
person1.foo3().call(person2)    //this->person2显示绑定

person1.foo4()()    //this->person1上层作用域(隐式绑定)
person1.foo4.call(person2)()    //this->person2上层作用域(显示绑定)
person1.foo4().call(person2)    //this->person1上层作用域(隐式绑定)
