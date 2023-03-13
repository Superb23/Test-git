/* 
    当事件触发时，会执行这个事件的响应函数
    如果这个事件会被频繁触发，那么节流函数会按照一定的频率来执行函数
    不管在这个中间有多少次触发这个事件，执行函数的频率总是固定的
*/

// 基本功能
// function hythrottle(fn, interval) {
//     let startTime = 0
//     const _throttle = function(...args) {
//         const nowTime = new Date().getTime()
//         const waitTime = interval - (nowTime - startTime)
//         if (waitTime <= 0) {
//             fn.apply(this, args)
//             startTime = nowTime
//         }
//     }
//     return _throttle
// }


// let counter = 1
// const inputEl = document.querySelector("input")
// inputEl.oninput = hythrottle(function(event) {
//     console.log(`发送网络请求${counter++}`, this.value, event)
// }, 300)

//----------------------------------------------------------------------------

function hythrottle(fn, interval, leading = true, tailing = false) {
    let startTime = 0
    const _throttle = function(...args) {
        // 1.获取当前时间
        const nowTime = new Date().getTime()

        // 对立即执行进行控制
        if (!leading && startTime === 0) {
            startTime = nowTime
        }
        // 2.计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
            fn.apply(this, args)
            startTime = nowTime
        }
    }

    return _throttle
}


let counter = 1
const inputEl = document.querySelector("input")
inputEl.oninput = hythrottle(function(event) {
    console.log(`发送网络请求${counter++}`, this.value, event)
}, 300, false)


