/*
  XHR,可监听文件上传的进度
  Fetch,无法监听上传进度
*/

// XHR文件上传
// const uploadBtn = document.querySelector(".upload")
// uploadBtn.onclick = function() {
//   // 1.创建对象
//   const xhr = new XMLHttpRequest()

//   // 2.监听结果
//   xhr.onload = function() {
//     console.log(xhr.response)
//   }

//   xhr.responseType = "json"
//   xhr.open("post", "http://123.207.32.32:1888/02_param/upload")
//   // 表单
//   const fileEl = document.querySelector(".file")
//   const file = fileEl.files[0]

//   const formData = new FormData()
//   formData.append("avatar", file)

//   xhr.send(formData)
// }





// Fetch文件上传
const uploadBtn = document.querySelector(".upload")
uploadBtn.onclick = async function() {
  // 1.创建对象
 
  // 表单
  const fileEl = document.querySelector(".file")
  const file = fileEl.files[0]

  const formData = new FormData()
  formData.append("avatar", file)

  // 发送fetch请求
  const response = await fetch("http://123.207.32.32:1888/02_param/upload", {
    method: "post",
    body: formData
  })

  const res = await response.json()
  console.log("res:", res)
}