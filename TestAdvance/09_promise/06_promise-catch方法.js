const promise = new Promise((resolve, reject) => {
    reject("------")
})

promise.then(res => {
    console.log("success")
}).catch(err => {
    console.log("failure~")
})

promise.catch(err => {
    console.log("failure~", err)
})
promise.catch(err => {
    console.log("failure~", err)
})
promise.catch(err => {
    console.log("failure~", err)
})

