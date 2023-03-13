// 1.创建XMLHttpRequest对象
const xhr = new XMLHttpRequest()

// 2.onload监听数据加载完成
// xhr.onreadystatechange = function() {}
xhr.onload = function() {
    console.log(xhr.response)
    console.log(xhr.status)
}


// 3.告知xhr获取到的数据类型
// xhr.responseType = ""   // 默认为空，即text类型
xhr.responseType = "json"

// 4.配置网络请求
xhr.open("get", "http://123.207.32.32:8000/home/multidata")
// xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_json")
// xhr.open("get", "http://123.207.32.32:1888/01_basic/hello_text")

// 5.发送网络请求
xhr.send()