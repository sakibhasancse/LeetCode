class EventEmitter {
    constructor(obj) {
        this.obj = {}
    }

    subscribe(event, cb) {
        if (this.obj[event]) {
            this.obj[event].push(JSON.stringify({ cb: cb, subscribe: true }))
        } else {
            this.obj[event] = [JSON.stringify({ cb: cb, subscribe: true })]
        }
        return {
            unsubscribe: () => {
                if (this.obj[event]) {
                    const index = this.obj[event].findIndex(item => JSON.parse(item).subscribe)
                    console.log({ index })
                    const tt = JSON.parse(this.obj[event][index])
                    this.obj[event][index] = JSON.stringify({...tt, subscribe: false })
                }
                return undefined
            }
        };
    }

    emit(event, args = []) {
        if (this.obj[event]) {
            const result = []
            for (const element of this.obj[event]) {
                if (element.subscribe) {
                    let cb = JSON.parse(element.cb)
                    result.push(cb(args))
                }
            }
            return result
        }
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */