
// 1.创建XMLHttpRequest对象
const xhr = new XMLHttpRequest()

// 2.监听状态的变化(宏任务)
xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return

    console.log(xhr.response)
    // 将字符串转成JSON对象
    const resJOSN = JSON.parse(xhr.response)
    const banners = resJOSN.data.banner
    console.log(banners)
}

// 3.配置请求open
// method:请求的方式(get/post/delete/put/patch...)
// url:请求的地址
xhr.open("get", "http://123.207.32.32:8000/home/multidata")

// 4.发送请求
xhr.send()