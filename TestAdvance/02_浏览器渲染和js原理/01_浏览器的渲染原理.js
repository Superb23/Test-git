/*
    defer属性，告诉浏览器不要等待脚本下载，而继续解析HTML，构建DOM Tree
        -脚本会由浏览器来进行下载，但是不会阻塞DOM Tree的构建过程
        -如果脚本提前下载好了，它会等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码
        (defer推荐放到head元素中，且对于外部js文件才有作用)
    defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的


    async属性，让一个脚本完全独立，也能够让脚本不阻塞页面
        -浏览器不会因async脚本而阻塞(与defer类似)
        -async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本
        -async不能保证在DOMContentLoaded之前或者之后执行
    async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的
*/


