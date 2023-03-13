// class Animal {
//     running() {
//         console.log("running~")
//     }
//     eating() {
//         console.log("eating~")
//     }

//     static sleep() {
//         console.log("static animal sleep")
//     }
// }

// class Dog extends Animal {

//     // 重写：子类重新实现父类方法（父类方法的重写）
//     running() {
//         // 调用父类的方法
//         super.running()
//         console.log("the dog is running")
//     }

//     static sleep() {
//         super.sleep()
//         console.log("sleep~")
//     }
// }

// var dog = new Dog()
// dog.running()

// Dog.sleep()

//---------------------------------------------------------------------

// JavaScript只支持单继承(不支持多继承)：只能有一个父类 
function mixinFlyer(BaseClass) {
    return class extends BaseClass {
        flying() {
            console.log("flying")
        }
    }
}

function mixinRunner(BaseClass) {
    return class extends BaseClass {
        running() {
            console.log("running")
        }
    }
}

class Bird {
    eating() {
        console.log("eating")
    }
}

var NewBird = mixinRunner(mixinFlyer(Bird))
var bird = new NewBird()
bird.flying()
bird.running()
bird.eating()