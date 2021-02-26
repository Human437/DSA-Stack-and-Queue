const _Node = require('./node')

class Stack {
    constructor() {
        this.top = null
    }
    push(value){
        if(this.top === null){
            this.top = new _Node(value,null)
            return this.top
        }
        let previousTop = this.top
        this.top = new _Node(value,previousTop)
    }
    pop(){
        let currentTop = this.top
        this.top = this.top.next
        return currentTop
    }
}