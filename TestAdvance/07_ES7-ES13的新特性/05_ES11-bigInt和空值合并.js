console.log(Number.MAX_SAFE_INTEGER)    // 9007199254740991

const num1 = 9007199254740999   // 不一定正确
const num2 = 9007199254740999n  // 末尾加n，表示是BigInt(新的数据类型)
console.log(num1, num2)


//-------------------------------------------------------------------
let info = ""
// info = info || "默认值"
// console.log(info)


// ??空值合并运算符
info = info ?? "默认值"
console.log(info)