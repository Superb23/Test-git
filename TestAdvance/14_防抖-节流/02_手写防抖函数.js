// function hydebounce(fn, delay) {
//     // 1.用于记录上一次事件触发的timer
//     let timer = null
//     // 2.触发事件时执行的函数
//     const _debounce = function(...args) {
//         // 2.1.如果再次触发（更多次触发）事件，那么取消上一次事件
//         if (timer) clearTimeout(timer)

//         // 2.2.延迟去执行对应的fn函数（传入的回调函数）
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//             timer = null    // 执行过函数后，将timer重置为null
//         }, delay);
//     }
//     // 返回一个新函数
//     return _debounce
// }





function hydebounce(fn, delay, immediate = true, resultCallback) {
    // 1.用于记录上一次事件触发的timer
    let timer = null
    let isInvoke = false

    // 2.触发事件时执行的函数
    const _debounce = function(...args) {
        return new Promise((resolve, reject) => {
            try {
                // 2.1.如果再次触发（更多次触发）事件，那么取消上一次事件
                if (timer) clearTimeout(timer)

                // 第一次操作不需要延迟
                let res = undefined
                if (immediate && !isInvoke) {
                    res = fn.apply(this, args)
                    // if (resultCallback) resultCallback(res)
                    resolve(res)
                    isInvoke = true
                    return
                }

                // 2.2.延迟去执行对应的fn函数（传入的回调函数）
                timer = setTimeout(() => {
                    res = fn.apply(this, args)
                    // if (resultCallback) resultCallback(res)
                    resolve(res)
                    timer = null    // 执行过函数后，将timer重置为null
                    isInvoke = false
                }, delay);
            } catch (error) {
                reject(error)
            }
        })
    }
    // 3.给_debounce绑定一个取消函数
    _debounce.cancel = function() {
        if (timer) clearTimeout(timer)
        timer = null
        isInvoke = false
    }


    // 返回一个新函数
    return _debounce
}













const inputEl = document.querySelector("input")
const cancleEl = document.querySelector(".cancel")


// let counter = 1
// const debounceFn = hydebounce(function(event) {
//     console.log(`${counter++}请求次数`, this.value, event)
// }, 300)

// inputEl.oninput = debounceFn
// cancleEl.onclick = function() {
//     debounceFn.cancel()
// }


// const myDebounceFn = hydebounce(function(name, age, height) {
//     console.log(name, age, height)
//     return "superb"
// }, 300, false)

// myDebounceFn("superb", 23, 1.75).then(res => {
//     console.log(res)
// })
