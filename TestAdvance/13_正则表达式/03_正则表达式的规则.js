// const message = "qwe 123POasdqwE czQWe121df"

// 1.字符类

/*
    \d  数字,0~9的字符
    \s  空格符号,包括空格，制表符\t，换行符\n，其他少数稀有字符\v,\f,\r
    \w  "单字"字符：拉丁字母/数字/下划线_
    .   任意字符
    \D  除了\d以外的任何字符
    \S  除了\s以外的任何字符
    \W  除了\w以外的任何字符
*/
// const re = /\d+/ig
// console.log(message.match(re))


// 2.锚点(Anchors)
// if (/^qwe/.test(message)) { // /^qwe/  ->以qwe开头
//     console.log("以qwe开头")
// }
// if ( /qwe$/.test(message)) {   //  /^qwe$/   ->以qwe结尾
//     console.log("qwe")
// }


// 词边界\b，是一种检查，检查字符串中的位置是否是词边界
// 需求：name，必须是一个单独的词
// if (/\bqwe\b/i.test(message)) {
//     console.log("有qwe,qwe有边界")
// }
// // 词边界的应用
// const infos = "now time is 12:00, 114:159 sleep, and eating at 22:49.good night"
// console.log(infos.match(/\b\d\d:\d\d\b/ig))



// 3.转义字符   把特殊字符作为常规字符来使用，需要对其进行转义，加\


// const fileNames = ["asd.html", "home.jsx", "index.html", "index.js", "util.js", "format.js"]
// 获取所有js的文件名
// jsx -> js
// const jsfileRe = /\.jsx?$/  // x? x是0个或1一个

// 1.for循环
// const newFileNames = []
// for (const item of fileNames) {
//     if (jsfileRe.test(item)) {
//         newFileNames.push(item)
//     }
// }
// console.log(newFileNames)

// 2.filter高阶函数     过滤数组，返回新数组
// const newFileNames = fileNames.filter(filename => jsfileRe.test(filename))
// console.log(newFileNames)



// 集合(Sets)
// [...]在方括号中的几个字符或者字符类，意味着"搜索给定的字符中的任意一个"
// [0-9]    [0-9A-Z]    
// 手机号规则：1[3456789]012341234

// const phoneStarts = ["132", "110", "120", "157", "119"]
// const phoneStartRe = /^1[3-9]\d/
// const filterPhone = phoneStarts.filter(phonestart => phoneStartRe.test(phonestart))
// console.log(filterPhone)


// const phoneNum = "15850775528"
// const phoneRe = /^1[3-9]\d{9}$/
// console.log(phoneRe.test(phoneNum))

/* 
    [0-9]
    排除范围[^0-9]
*/


// 量词
/*
    +   === {1,}    表示一个或多个
    ?   === {0,1}   表示零个或一个
    *   === {0,}    表示零个或多个
*/

// const re = /a{3,5}/ig
// const message = "aa232qweaaaaa vxcaaaqaqaaaaqqq a"
// const result = message.match(re)
// console.log(result)


const htmlEl = "<div><span>hahhh</span><h2>title</h2></div>"
const re = /<\/?[a-z][a-z0-9]*>/ig
const result = htmlEl.match(re)
console.log(result)