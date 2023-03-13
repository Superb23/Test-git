const arr1 = [11, 12, 31, 22, 89]
const arr2 = ["qqq", "aaa", "zzz"]

// 创建迭代器
function* createArrayIterator(arr) {
    // let index = 0
    // return {
    //     next: function() {
    //         if (index < arr.length) {
    //             return { done: false, value: arr[index++] }
    //         } else {
    //             return { done: true }
    //         }
    //     }
    // }

    // yield arr[0]
    // yield arr[1]
    // yield arr[2]    
    // yield arr[3]
    // yield arr[4]

    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

// 返回生成器对象
// const arr1Iterator = createArrayIterator(arr1)
// console.log(arr1Iterator.next())
// console.log(arr1Iterator.next())
// console.log(arr1Iterator.next())
// console.log(arr1Iterator.next())
// console.log(arr1Iterator.next())
// console.log(arr1Iterator.next())


// [3, 9)
function* createRangeGenerator(start, end) {
    for (let i = start; i < end; i++) {
        yield i
    }
}

const rangeGen = createRangeGenerator(3, 9)
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
