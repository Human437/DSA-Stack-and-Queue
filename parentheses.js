const Stack = require('./stack')

function parentheses(str){
  let paren = new Stack();
  let indexOfOpenParen;
  let indexOfCloseParen;
  let numOfOpenParen =0;
  let numOfCloseParen =0;
  for(let i =0;i<str.length;i++){
    if(str[i] === '(' || str[i] === ')'){
      paren.push(str[i])
    }
    if(str[i] === '('){
      indexOfOpenParen = i
      numOfOpenParen += 1
    }
    if(str[i]=== ')'){
      indexOfCloseParen = i
      numOfCloseParen +=1
    }
  }
  // let currentNode = paren.top
  // let nextNode = paren.top.next
  // if(currentNode === '(')
  if()
}