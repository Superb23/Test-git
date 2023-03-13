function foo() {

}

// const fooProxy = new Proxy(foo, {
//     apply: function(target, thisArg, otherArgs) {
//         console.log("函数的apply监听")
//         return target.apply(thisArg, otherArgs)
//     },
//     construct: function(target, argArray, newTarget) {
//         console.log(target, argArray, newTarget)
//         return new target()
//     }
// })