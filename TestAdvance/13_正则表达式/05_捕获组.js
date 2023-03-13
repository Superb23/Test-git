// 捕获组   模式的一部分可以用括号括起来
//  允许将匹配的一部分作为结果数组中的单独项
//  将括号视为一个整体

// const message = "我最喜欢的两本书:《心灵鸡汤》和《摆渡人》、《java》"

// const nameRe = /(《)(.+?)(》)/ig
// const iterator = message.matchAll(nameRe)
// for (const item of iterator) {
//     console.log(item[2])
// }

// const info = "anbanbasdabcabc890809abcabcacbabcicbacbacbao"
// const abcRe = /(abc){2,}/ig     // 将括号视为一个整体
// console.log(info.match(abcRe))


// const info = "asdabcabc890809abcabcacbabcio"
// const abcRe = /(abc|cba|nba){2,}/ig
// console.log(info.match(abcRe))
