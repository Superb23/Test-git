
// padStart,padEnd
// 1.对时间格式化
const minute = "5".padStart(2, "0")
const second = "31".padStart(2, "0")

console.log(`${minute} : ${second}`)

// 2.对敏感数据格式化
let idMessage = "362502199904234016"
const sliceMessage = idMessage.slice(-4)
idMessage = sliceMessage.padStart(idMessage.length, "*")
const cardEl = document.querySelector(".card")
cardEl.textContent = idMessage