function parentheses(str){
  let currentParen = 0;
  let hasOpenParen = false;
  for(let i =0;i<str.length;i++){
    if(str[i] === '('){
      currentParen += 1
      hasOpenParen = true
    }
    if(str[i]=== ')'){
      if(hasOpenParen){
        currentParen -=1
        hasOpenParen = false
      }else{
        return 'You are missing a ('
      }
    }
  }
  if(currentParen > 0){
    return `You are missing )`
  }else if(currentParen < 0){
    return `You are missing (`
  }else{
    return str
  }
}

console.log(parentheses('(dfa)'))
console.log(parentheses('(dfa('))
console.log(parentheses(')dfa)'))