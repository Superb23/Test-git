// // 1.fetch发送get请求
// fetch("http://123.207.32.32:8000/home/multidata").then(res => {
//   // 1.获取到response
//   const response = res

//   // 2.获取具体的结果
//   return response.json()
// }).then(res => {
//   console.log("res:", res)
// }).catch(err => {
//   console.log("err:", err)
// })


// 1.普通请求
// async function getData() {
//   const response = await fetch("http://123.207.32.32:8000/home/multidata")
//   const res = await response.json()
//   console.log("res:", res)
// }

// getData()

// 2.post请求，并且有参数
async function getData() {
  // const response = await fetch("http://123.207.32.32:1888/02_param/postjson", {
  //   method: "post",
  //   headers: {
  //     "Content-type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     name: "superb",
  //     age: 23
  //   })
  // })

  const formData = new FormData()
  formData.append("name", "superb")
  formData.append("age", 23)

  const response = await fetch("http://123.207.32.32:1888/02_param/postform", {
    method: "post",
    body: formData
  })
  // 获取状态码
  console.log(response.status, response.ok)
  
  const res = await response.json()
  console.log("res:", res)
}

getData()
