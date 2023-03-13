const message = "我最喜欢的两本书：《心灵鸡汤》和《摆渡人》、《java》"

// .+   默认采用贪婪模式
// const nameRe = /《.+》/ig
// const result = message.match(nameRe)
// console.log(result)

// 使用惰性模式
// 获取到对应的内容后，就不再继续向后匹配
// const nameRe = /《.+?》/ig
// const result = message.match(nameRe)
// console.log(result)