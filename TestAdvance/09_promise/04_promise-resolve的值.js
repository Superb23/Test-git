const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p中的resolve")
    }, 2000);
})

const promise = new Promise((resolve, reject) => {
    // 1.resolve的值是普通值
    // resolve([
    //     {name: "superb", age: 23},
    //     {name: "kobe", age: 33}])

    // 2.resolve的值是Promise对象，那么当前的Promise的状态由传入的Promise来决定
    // resolve(p)

    // 3.resolve(thenable对象)，会执行该对象的then方法，根据then方法结果来决定Promise状态
    // resolve({
    //     name: "kobe",
    //     then: function(resolve) {
    //         resolve(111111111)
    //     }
    // })
    
})

promise.then(res => {
    console.log("then拿到的结果:", res)
}).catch(err => {

})