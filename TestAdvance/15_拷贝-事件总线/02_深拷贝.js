const info = {
    name: "superb",
    age: 23,
    friend: {
        name: "kobe",
        address: {
            name: "nanjing",
            detail: "center"
        }
    }
}

function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === "object" || valueType === "function")
}

// 深拷贝     ------------------手写基本功能
function deepCopy(originValue) {
    // 1.如果是原始数据类型，直接返回
    if (!isObject(originValue)) {
        return originValue
    }

    // 2.如果是对象类型，才需要创建对象
    const newObj = {}
    for (const key in originValue) {
        newObj[key] = deepCopy(originValue[key])
    }

    return newObj
}




const newObj = deepCopy(info)
console.log(newObj)
newObj.friend.name = "fz"
console.log(info.friend.name)