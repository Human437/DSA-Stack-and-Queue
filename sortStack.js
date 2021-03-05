const Stack = require('./stack')

function sortStack (stack){
  let tempStack = new Stack()
  let currentNode = stack.top
  while(currentNode !== null){
    let valueToCheck = stack.pop()
    let tempCurrentNode = tempStack.top
    if (valueToCheck.value > stack.top.value){
      tempStack.push(valueToCheck.value)
    }else{
      while (valueToCheck.value < tempStack.top.value){
        stack.push(tempStack.pop().value)
      }
    }

    currentNode = currentNode.next
  }
  return tempStack
}

let testStack = new Stack()
testStack.push(3)
testStack.push(7)
testStack.push(5)


console.log(sortStack(testStack))