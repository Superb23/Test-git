// let info = {name: "superb", age: 11}
// let obj1 = new WeakRef(info)    // 弱引用，使用info中的属性，但不构成强引用，不影响回收
// let obj2 = new WeakRef(info)

// const finalRegistry = new FinalizationRegistry(() => {
//     console.log("对象回收~")
// })

// finalRegistry.register(info)

// console.log(obj1.deref().name, obj1.deref().age)

// info = null

//----------------------------------------------------------------
let str = "my name is jack, jack has a big pig whose name is jack"
console.log(str.replace("jack", "rose"))    // 只替换第一个
console.log(str.replaceAll("jack", "kobe")) // 替换所有
