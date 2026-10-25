class MinStack {
    constructor() {
        this.result = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.result.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const elem = this.result.pop();
        return elem
    }

    /**
     * @return {number}
     */
    top() {
        return this.result[this.result.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.result)
    }
}
