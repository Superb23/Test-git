function formatTime(timeStamp, formatString) {
    // 1.将时间戳转为Date
    const date = new Date(timeStamp)

    // 2.正则和值匹配
    const dateObj = {
        "y+": date.getFullYear(),
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    }

    // 3.for循环替换
    for (const key in dateObj) {
        const keyRe = new RegExp(key)
        if (keyRe.test(formatString)) {
            const value = (dateObj[key] + "").padStart(2, "0")
            formatString = formatString.replace(keyRe, value)
        }
    }

    return formatString
}

const endTime = 1659252301637
console.log(formatTime(endTime, "yyyy-MM-dd  hh:mm:ss"))