/*
    localStorage(本地存储)，提供的是一种永久性的存储方式，关闭网页重新打开时存储的内容依然保留
    sessionStorage(会话存储)，提供的是本次会话的存储，关闭会话时存储的内容会被清除
        在页面内实现跳转，sessionStorage会保存
        在页面外跳转，sessionStorage不保存
*/
// 储存在本地
let token = localStorage.getItem("token")
if (!token) {
    console.log("从服务器获取token")
    token = "superbToken"
    localStorage.setItem("token", token)
}

let username = localStorage.getItem("username")
let password = localStorage.getItem("password")
if (!username || !password) {
    console.log("请输入账号和密码")
    username = "superb"
    password = "qwe321"
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
}

console.log(token)
console.log(token.length)
console.log(token + "aaaa")