
// 1.定时器     this-->window
// setInterval(() => {
//     console.log("定时器:", this)
// }, 1000);

// 2.按键的监听     this-->btnEl
// var btnEl = document.querySelector("button")
// btnEl.onclick = function() {
//     console.log("butto点击:", this)
// }

// btnEl.addEventListener("click", function() {
//     console.log("btn点击:", this)
// })

// 3.forEach    this-->
// forEach(fn, )    第二个参数是绑定this
var names = ["qwe, asd, zxc"]
names.forEach(function(item) {
    console.log("forEach:", this)
}, "aaa")