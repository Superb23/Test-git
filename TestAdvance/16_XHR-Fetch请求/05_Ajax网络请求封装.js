function hyajax({
    url,
    method = "get",
    data = {},
    timeout = 1000,
    headers = {},
    success,
    failure
} = {}) {
    const xhr = new XMLHttpRequest()

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            success && success(xhr.response)
        } else {
            failure && failure({status: xhr.status, message: xhr.statusText})
        }
    }
    
    xhr.responseType = "json"
    
    xhr.open(method, url)
    
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify(data))

}

// 调用者
// hyajax({
//     // url: "http://123.207.32.32:8000/home/multidata",
//     url: "http://123.207.32.32:1888/02_param/postjson",
//     method: "post",
//     data: {
//         name: "jsondata",
//         age: 22
//     },
//     success: function(res) {
//         console.log("res:", res)
//     },
//     failure: function(err) {
//         console.log("err:", err.message)
//     }

// })