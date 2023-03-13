const formEl = document.querySelector(".info")
const sendBtn = document.querySelector(".send")
sendBtn.onclick = function() {
    // 创建xhr对象
    const xhr = new XMLHttpRequest()

    // 监听数据响应
    xhr.onload = function() {
        console.log(xhr.response)
    }

    // 配置请求
    xhr.responseType = "json"

    // 1.传递参数方式一:get -> query        ---------------常见
    // xhr.open("get", "http://123.207.32.32:1888/02_param/get?name=why&age=18&address=广州市")

    // 2.传递参数方式二:post -> urlencoded
    // xhr.open("post", "http://123.207.32.32:1888/02_param/posturl")
    // // 发送请求(请求体body)
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    // xhr.send("name=why&age=18&address=广州市")

    // 3.传递参数方式三:post -> formdata
    // xhr.open("post", "http://123.207.32.32:1888/02_param/postform")
    // // formElement对象转成FormData对象
    // const formData = new FormData(formEl)
    // xhr.send(formData)

    // 4.传递参数方式四:post -> json        --------------------常见
    xhr.open("post", "http://123.207.32.32:1888/02_param/postjson")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify({name: "superb", age: 23, height: 1.75}))
}
