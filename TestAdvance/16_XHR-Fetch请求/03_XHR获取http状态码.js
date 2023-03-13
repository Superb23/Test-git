
const xhr = new XMLHttpRequest()

xhr.onload = function() {
    console.log(xhr.status, xhr.statusText)

    // 根据http的状态码判断是否请求成功
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response)
    } else {
        console.log(xhr.status, xhr.statusText)
    }
}

xhr.open("get", "http://123.207.32.32:8000/home/multidata")

xhr.send()