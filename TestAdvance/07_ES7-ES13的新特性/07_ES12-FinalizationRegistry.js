/*
    FinalizationRegistry对象可以让你在对象被垃圾回收时请求一个回调
*/

let obj = {name: "superb", age: 12}
let info = {name: "kobe"}

const finalRegistry = new FinalizationRegistry((value) => {  
    console.log(value,"对象被回收了~")
})

finalRegistry.register(obj, "superb") // 将obj注册进回收监听器中
finalRegistry.register(info, "kobe")

obj = null  // 此处obj被回收
info = null