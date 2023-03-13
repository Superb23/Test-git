/* 
    正则表达式(Regular Expression)，使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串
    修饰符flag
        g,全部的，匹配全部的(global)
        i,忽略大小写(ignore)
        m,多行匹配(multiple)
*/


// 创建正则
// 1.匹配的规则pattern
// 2.匹配的修饰符flags
const obj = new RegExp("asd", "ig")
const message = "qwe asd zxc Qwe 123 zqWE"
const message2 = "123qw222e a675sd z6xc 32Qw3e 123 zqWE"


// 需求：将所有qwe(忽略大小写)换成ABC
// 方法一：replaceAll无法忽略大小写
// const newMessage = message.replaceAll("qwe", "ABC") 
// console.log(newMessage)
// 方法二：正则
const newMessage = message.replaceAll(/qwe/ig, "ABC")   // 正则表达式
console.log(newMessage)

// 需求：将字符串中所有数字全部删除
const newMessage2 = message2.replaceAll(/\d+/ig, "")
console.log(newMessage2)