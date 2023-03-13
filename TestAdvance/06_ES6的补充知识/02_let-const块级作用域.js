const btnEls = document.querySelectorAll("button")

// let/const
for (let i = 0; i < btnEls.length; i++) {
    const btnEl = btnEls[i]
    btnEl.onclick = function() {
        console.log(`点击按钮${i}`)
    }
}

/* 
    优先推荐使用const
    const不可修改，保证数据的安全性不会被随意地篡改
    明确知道一个变量后续会需要被赋值时，使用let

*/