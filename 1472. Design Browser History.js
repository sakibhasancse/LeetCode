// Creating node class with reference for previous and next nodes assigned to null by default
class Node {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class BrowserHistory {
    /**
     * @param {string} homepage
     */
    constructor(homepage) {
        this.cur = new Node(homepage);
    }

    // insert new node in the list, reassign references
    visit(url) {
        let node = new Node(url);
        this.cur.next = node;
        node.prev = this.cur;
        this.cur = node;
    }

    //  while we are not at the beginning of the list, we will traverse through it n-times
    back(steps) {
        for (let i = 0; i < steps; i++) {
            if (!this.cur.prev) return this.cur.val;
            this.cur = this.cur.prev;
        }
        return this.cur.val;
    }

    //  while we are not at the end of the list, we will traverse through it n-times
    forward(steps) {
        for (let i = 0; i < steps; i++) {
            if (!this.cur.next) return this.cur.val;
            this.cur = this.cur.next;
        }
        return this.cur.val;
    }
}

/**

 Your BrowserHistory object will be instantiated and called as such:
 var obj = new BrowserHistory(homepage)
 obj.visit(url)
 var param_2 = obj.back(steps)
 var param_3 = obj.forward(steps)
 */
