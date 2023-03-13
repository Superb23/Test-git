// 显示绑定(apply/call/bind)能将this绑定给指定对象，箭头函数无this，故显示绑定箭头函数是无效的
var name = "window"

var person1 = {
    name: "person1",
    foo1: function() {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function() {
        return function() {
            console.log(this.name)
        }
    },
    foo4: function() {
        return () => {
            console.log(this.name)
        }
    }
}

var person2 = {name: "person2"}

person1.foo1()  //this->person1隐式绑定
person1.foo1.call(person2)  //this->person2显示绑定

person1.foo2()  //this->window上层作用域
person1.foo2.call(person2)  //this->window上层作用域

person1.foo3()()    //this->window默认绑定（直接调用）
person1.foo3.call(person2)()    //this->window默认绑定（间接调用）
person1.foo3().call(person2)    //this->person2显示绑定

person1.foo4()  //this->person1隐式绑定
person1.foo4.call(person2)()    //this->person2上层作用域
person1.foo4().call(person2)    //this->person1上层作用域

