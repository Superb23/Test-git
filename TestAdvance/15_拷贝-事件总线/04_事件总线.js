class EventBus {
    constructor() {
        this.eventMap = {}
    }


    on(eventName, eventFn) {
        let eventFns = this.eventMap[eventName]
        if (!eventFns) {
            eventFns = []
            this.eventMap[eventName] = eventFns
        }
        eventFns.push(eventFn)
    }

    off(eventName, eventFn) {
        let eventFns = this.eventMap[eventName]
        if (!eventFns) return
        for (let i = 0; i < eventFns.length; i++) {
            const fn = eventFns[i]
            if (fn === eventFn) {
                eventFns.splice(i, 1)
                break
            }
        }

        // 如果eventFns已经清空了
        if (eventFns.length === 0) {
            delete this.eventMap[eventName]
        }
    }

    emit(eventName) {
        let eventFns = this.eventMap[eventName]
        if (!eventFns) return
        eventFns.forEach(fn => {
            fn()
        })
    }
}






const eventBus = new EventBus()

eventBus.on("navclick", () => {
    console.log("listener01")
})
eventBus.on("navclick", () => {
    console.log("listener02")
})




const navBtnEl = document.querySelector(".navbtn")
navBtnEl.onclick = function() {
    console.log("自己监听")
    eventBus.emit("navclick")
}