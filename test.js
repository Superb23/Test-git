// const foo = (...args) => {
//   const value = []
//   value.push(...args)
//   return value
// }

// const bar = (foo) => {
//   var num1 = 1
//   // var num2 = 2
//   console.log(foo(num1))
// }

// bar(foo)

// const obj = {
//   _name: "superb",
//   age: 24
// }

// const objProxy = new Proxy(obj, {
//   set: function(target, key, value, receiver) {
//     return Reflect.set(target, key, value, receiver)
//   }
// })
// objProxy.age = 1
// console.log(obj.age)


// class Person {
//   constructor(name, age, height, friends) {
//       this.name = name
//       this.age = age
//       this.height = height
//       this.friends =friends
//   }
  
//   // 实例方法
//   // 生成器函数，调用返回一个生成器，即迭代器
//   *[Symbol.iterator]() {	
//       yield* this.friends	// yield* 可迭代对象，依次迭代这个可迭代对象
//   }
// }

// const p2 = new Person("bbb", 32, 178, ["w1", "w2", "w3"])
// // for of 调用生成器函数，返回迭代器，调用next方法，返回迭代器对象，获取对象中的value，即item
// for (const item of p2) {
//   console.log(item)
// }

// 选择排序
// function sort(arr) {
//   if (!arr.length) return arr
//   let min = 0
//   let temp = 0
//   for (let j = 0; j < arr.length; j++) {
//     min = j
//     for (let i = j; i < arr.length; i++) {
//       if (arr[i] < arr[min]) {
//         min = i
//       }
//     }
//     temp = arr[j]
//     arr[j] = arr[min]
//     arr[min] = temp
//   }
// }

// 冒泡
// function sort(arr) {
//   if (!arr.length) return arr
  
//   for (let j = arr.length - 1; j > 0; j--) {
//     for (let i = 0; i < j; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//       }
//     }
//   }
// }

// const arr = [99, 12, 31, -1, 121, 2]
// sort(arr)
// console.log(arr)



const map = new Map()
map.set("a", 123)
map.set("b", "123")
map.set("c", { a: "aaa", b: "bbb" })
map.set("d", 1235)


// map.forEach((value, key, map) => {
//   // console.log(value)
//   console.log(key)
// });

// for (const item of map) {
//   console.log(item[1])
// }

// function debounce(foo, delay) {
//   let timer = null
//   return function(...arg) {
//     if (timer) clearTimeout(timer)
//     timer = setTimeout(() => {
//       foo.apply(this, arg)
//       timer = null
//     }, delay);
//   }
// }
// function foo() {
//   console.log("first")
// }
// El.onClick = debounce(foo, 100)

// function throttle(foo, delay) {
//   let curTime = new Date().getTime()
//   let startTime = 0
//   let timer = null
//   return function(...args) {
//     let nowTime = new Date().getTime()
//     let time = delay - (nowTime - startTime)
//     startTime = nowTime
//     if (time > 0) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       foo.apply(this, args)
//       timer = null
//     }, delay);
//   }
// }

// function throttle(foo, delay) {
//   let timer = null
//   return function(...args) {
//     if (timer) return
//     timer = setTimeout(() => {
//       foo.apply(this, args)
//       timer = null
//     }, delay);
//   }
// }



// //Define Animal
// function Animal(legs) {
//   this.legs = legs;
// }

// Animal.prototype.walk = function (){
//   console.log(`Use ${this.legs} legs to walk!`)
// };




// // TODO: Implement Cat
// function Cat(legs, eyes) {
//   Animal.call(this, legs)
//   this.eyes = eyes
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.see = function() {
//   console.log(`Use ${this.eyes} eyes to see!`)
// }
// Cat.prototype.constructor = Cat



// // Usage
// var cat = new Cat(4,2);
// cat.walk();   // => Use 4 legs to walk!
// cat.see();   // => Use 2 eyes to see!




// const validStr = (str) => {
//   if (str === "(") return ")"
//   if (str === "[") return "]"
//   if (str === "{") return "}"
//   return null
// }
// const fun = (s) => {
//   if (s.length === 0 || s.length === 1) return console.log("false")
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       stack.push(s[i])
//     } else {
//       if (!stack.length || validStr(stack.pop()) !== s[i]) {
//         return console.log("false")
//       }
//     }
//   }
//   if (stack.length) {
//     return console.log("false")
//   }
//   return console.log("true")
// }


// var readline = require("readline")
// process.stdin.setEncoding("utf-8")

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: ""
// })

// rl.prompt()

// rl.on("line", function(line) {
//   const str = line.slice(1, line.length-1)
//   console.log(str)
//   fun(str)
// })

function uniquePaths( m ,  n ) {
  // write code here
  if (m === 1 || n === 1) return 1
  const dp = new Array(m, n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }
  return dp[m-1][n-1]
}
console.log(uniquePaths(3,4))