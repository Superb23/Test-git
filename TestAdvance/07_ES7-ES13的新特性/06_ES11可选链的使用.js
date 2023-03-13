const obj = {
    name: "superb",
    friend: {
        name: "kobe",
        running: function() {
            console.log("running~")
        }
    }
}

// 直接调用很危险，要判断obj中是否存在friend
// obj.friend.running()

// 可选链
obj?.friend?.running?.()
