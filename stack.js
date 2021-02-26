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

let starTrek = new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')


function peek(stack){
    return stack.top
}

function isEmpty(stack){
    return (stack.top === null)
}

function display(stack){
    if(!stack.top){
        return null
    }
    let values = []
    let currentNode = stack.top
    while(currentNode !== null){
        values.push(currentNode.value)
        currentNode = currentNode.next
    }
    return values
}

console.log(peek(starTrek))
let test = new Stack()
console.log(isEmpty(starTrek))
console.log(isEmpty(test))
console.log(display(starTrek))
starTrek.pop()
starTrek.pop()
console.log(display(starTrek))