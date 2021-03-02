const Stack = require('./Stack')

let exp = '(a+b)*(y+2))'
let stack = new Stack()
// add a error flag 
let error = false;
for(let char of exp) {
    if (char == '(') {
        stack.push('(')
    }
    else if (char == ')') {
        let removed = stack.pop()
        if (removed != '(') {
            console.log('error!')
            error = true;
            break;
        }

    }
}

if (stack.peek() == null && error==false ) {
    console.log("all parenthesis are matched")
} else {
    console.log('Error, there is an unpaired parenthesis!')
}