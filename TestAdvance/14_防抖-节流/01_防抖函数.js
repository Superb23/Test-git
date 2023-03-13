// 操作频率较高的时间，增加防抖操作
// debounce
/* 
    当事件触发时，相应的函数并不会立即触发，而是会等待一定的时间
    当事件密集触发时，函数的触发会被频繁的推迟
    只有等待了一段时间也没有事件触发，才会真正的执行响应函数
*/

// const inoutEl = document.querySelector("input")

// let counter = 1
// inoutEl.oninput = _.debounce(function() {
//     console.log(`${counter++}请求次数`)
// }, 1000)
