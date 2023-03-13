const lyricString = "[00:00.000] 作词 : 许嵩\n[00:01.000] 作曲 : 许嵩\n[00:02.000] 编曲 : 许嵩\n[00:22.240]天空好想下雨\n[00:24.380]我好想住你隔壁\n[00:26.810]傻站在你家楼下\n[00:29.500]抬起头数乌云\n[00:31.160]如果场景里出现一架钢琴\n[00:33.640]我会唱歌给你听\n[00:35.900]哪怕好多盆水往下淋\n[00:41.060]夏天快要过去\n[00:43.340]请你少买冰淇淋\n[00:45.680]天凉就别穿短裙\n[00:47.830]别再那么淘气\n[00:50.060]如果有时不那么开心\n[00:52.470]我愿意将格洛米借给你\n[00:55.020]你其实明白我心意\n[00:58.290]为你唱这首歌没有什么风格\n[01:02.976]它仅仅代表着我想给你快乐\n[01:07.840]为你解冻冰河为你做一只扑火的飞蛾\n[01:12.998]没有什么事情是不值得\n[01:17.489]为你唱这首歌没有什么风格\n[01:21.998]它仅仅代表着我希望你快乐\n[01:26.688]为你辗转反侧为你放弃世界有何不可\n[01:32.328]夏末秋凉里带一点温热有换季的颜色\n[01:41.040]\n[01:57.908]天空好想下雨\n[01:59.378]我好想住你隔壁\n[02:02.296]傻站在你家楼下\n[02:03.846]抬起头数乌云\n[02:06.183]如果场景里出现一架钢琴\n[02:08.875]我会唱歌给你听\n[02:10.974]哪怕好多盆水往下淋\n[02:15.325]夏天快要过去\n[02:18.345]请你少买冰淇淋\n[02:21.484]天凉就别穿短裙\n[02:22.914]别再那么淘气\n[02:25.185]如果有时不那么开心\n[02:27.625]我愿意将格洛米借给你\n[02:30.015]你其实明白我心意\n[02:33.327]为你唱这首歌没有什么风格\n[02:37.976]它仅仅代表着我想给你快乐\n[02:42.835]为你解冻冰河为你做一只扑火的飞蛾\n[02:48.406]没有什么事情是不值得\n[02:52.416]为你唱这首歌没有什么风格\n[02:57.077]它仅仅代表着我希望你快乐\n[03:01.993]为你辗转反侧为你放弃世界有何不可\n[03:07.494]夏末秋凉里带一点温热\n[03:11.536]\n[03:20.924]为你解冻冰河为你做一只扑火的飞蛾\n[03:26.615]没有什么事情是不值得\n[03:30.525]为你唱这首歌没有什么风格\n[03:35.196]它仅仅代表着我希望你快乐\n[03:39.946]为你辗转反侧为你放弃世界有何不可\n[03:45.644]夏末秋凉里带一点温热有换季的颜色\n"

// const lyricLineStrings = lyricString.split("\n")
// const lyricLines = []
// const timePattern = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
// for (const lyric of lyricLineStrings) {
//   const timeString = timePattern.exec(lyric)
//   if (!timeString) continue
//   const time1 = timeString[1] * 60 * 1000
//   const time2 = timeString[2] * 1000
//   const time3 = timeString[3].length === 3 ? timeString[3]*1: timeString[3] * 10
//   console.log(time1, time2, time3)
//   const time = time1 + time2 + time3
//   const content = lyric.replace(timePattern, "").trim()
//   lyricLines.push({time, content})
// }
// console.log(lyricLines)


// const lyricLineStrings = lyricString.split("\n")
// const lyricInfos = []

// const timeRe = /\[(\d{2}):(\d{2})\.(\d{3})\]/
// for (const lineString of lyricLineStrings) {
//     // 1.获取时间
//     const result = lineString.match(timeRe)
//     if (!result) continue
//     const minuteTime = result[1] * 60 * 1000
//     const secondTime = result[2] * 1000
//     const msecondTime = result[3].length === 3 ? result[3] * 1 : result[3] * 10
//     const time = minuteTime + secondTime + msecondTime
    
//     // 2.获取内容
//     const content = lineString.replace(timeRe, "").trim()  // 去除时间和首尾的空格
    
//     lyricInfos.push({time, content})
// }

// console.log(lyricInfos)


// 封装函数
function parseLyric(lyricString) {
    const lyricLineStrings = lyricString.split("\n")
    const lyricInfos = []

    const timeRe = /\[(\d{2}):(\d{2})\.(\d{3})\]/
    for (const lineString of lyricLineStrings) {
        // 1.获取时间
        const result = lineString.match(timeRe)
        if (!result) continue
        const minuteTime = result[1] * 60 * 1000
        const secondTime = result[2] * 1000
        const msecondTime = result[3].length === 3 ? result[3] * 1 : result[3] * 10
        const time = minuteTime + secondTime + msecondTime
        
        // 2.获取内容
        const content = lineString.replace(timeRe, "").trim()  // 去除时间和首尾的空格
        
        lyricInfos.push({time, content})
    }
    return lyricInfos
}

console.log(parseLyric(lyricString))