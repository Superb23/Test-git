const access_token = "token"

console.log(localStorage.length)    // 存储的个数

localStorage.setItem(access_token, "superb token")
console.log(localStorage.getItem(access_token))

console.log(localStorage.key(0))
localStorage.removeItem(access_token)
localStorage.clear()
