/*
    迭代器Iterator，使用户在容器对象(container，例如链表/数组)上遍访的对象，使用该接口无需关心对象的内部实现细节
*/

const names = ["qwe", "asd", "zxc"]


// 创建一个迭代器
// let index = 0
// const namesIterator = {
//     next: function() {
//         // done
//         // value
//         if (index < names.length) {
//             return { done: false, value: names[index++] }
//         } else {
//             return { done: true }
//         }
//     }
// }
// console.log(namesIterator.next())
// console.log(namesIterator.next())

const arr1 = [11, 12, 31, 22, 89]
const arr2 = ["qqq", "aaa", "zzz"]

// 封装函数，创建迭代器
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function() {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true }
            }
        }
    }
}

const arr1Iterator = createArrayIterator(arr1)
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())