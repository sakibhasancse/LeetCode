var MyStack = function () {
    this.data = [];
    this.topValue = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.data[this.topValue] = x;
    this.topValue += 1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.empty() === false) {
        this.topValue -= 1;
        return this.data.pop();
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.data[this.data.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.topValue === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
