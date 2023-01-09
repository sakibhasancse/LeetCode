

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue {
    data = []

    constructor() {
        this.data = []
    }

    push(x) {
        this.data.push(x)
    }

    pop() {
        let temp = this.data[0];
        let popNumber;
        if (this.data.length > 0) {
            popNumber = temp
        }
        this.data.shift()
        return popNumber
    }

    peek() {
        return this.data[0]
    }

    empty() {
        return this.data.length === 0
    }
}