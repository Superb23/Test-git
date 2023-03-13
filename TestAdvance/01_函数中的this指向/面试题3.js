// 显示绑定(apply/call/bind)能将this绑定给指定对象，箭头函数无this，故显示绑定箭头函数是无效的
var name = "window"

function Person(name) {
    this.name = name
    this.obj = {
        name: "obj",
        foo1: function() {
            return function() {
                console.log(this.name)
            }
        },
        foo2: function() {
            return () => {
                console.log(this.name)
            }
        }
    }
}

var person1 = new Person("person1")
var person2 = new Person("person2")

person1.obj.foo1()()    //this->window默认调用
person1.obj.foo1.call(person2)()    //this->window默认调用
person1.obj.foo1().call(person2)    //this->person2显示绑定

person1.obj.foo2()()    //this->obj上层作用域(隐私绑定)
person1.obj.foo2.call(person2)()    //this->person2上层作用域(显示绑定)
person1.obj.foo2().call(person2)    //this->obj上层作用域(隐私绑定)

