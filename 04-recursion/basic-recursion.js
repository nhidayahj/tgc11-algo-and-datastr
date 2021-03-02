// iterative for loop 
for (let i = 0; i<10; i++) {
    console.log(i)
}

function countUp(start, end) {
    // below is the process
    console.log(start)
    // if statement below is the base case 
    if(start == end) {
        return 
    }
    // below is the recursive statement
    countUp(start+1, end)
}

// calling a recursive function is calling a copy
// of the function 

countUp(0,9)

function summation(n) {
    // must always include the base case
    if(n==1) {
        return 1;
    } 
    return n + summation(n-1)
}

summation(5)