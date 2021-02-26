const Stack = require('./stack')

function is_palindrome(s){
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let string = new Stack()
  let output = ''
  for(let i = s.length-1;i>-1;i--){
    string.push(s[i])
  }
  let currentNode = string.top
  while(currentNode !== null){
    output += currentNode.value
    currentNode = currentNode.next
  }
  return (s === output)
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));