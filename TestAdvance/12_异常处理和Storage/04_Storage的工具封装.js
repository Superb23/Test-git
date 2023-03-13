class Cache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }

    setCache(key, value) {
        if (!value) {
            throw new Error("value Error: value必须有值!")
        }
        if (value) {
            this.storage.setItem(key, JSON.stringify(value))
        }
    }

    getCache(key) {
        const result =  this.storage.getItem(key)
        if (result) {
            return JSON.parse(result)
        }
    }

    removeCache(key) {
        this.storage.removeItem(key)
    }

    clearCache() {
        this.storage.clear()
    }
}

// 通过一个封装的类创建两种Storage
const localCache = new Cache()
const sessionCache = new Cache(false)

// Storage本身不能直接存储对象类型
const userInfo = {
    name: "superb",
    nickname: "ggb",
    level: 99,
    myURL: "https://baidu.com"
}
// localStorage.setItem("userInfo", JSON.stringify(userInfo))  // 对象转字符串
// console.log(JSON.parse(localStorage.getItem("userInfo")))   // 字符串转对象

localCache.setCache("userInfo", userInfo)
console.log(localCache.getCache("userInfo"))