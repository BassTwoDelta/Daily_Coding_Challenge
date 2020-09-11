// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:
function cons(a, b){
    function pair(f){
        return f(a, b)
    }
    return pair
}

function car(f) {
    function pair(a,b) {
        return a
    }
    return f(pair)
}

function cdr(f) {
    function pair(a,b) {
        return b
    }
    return f(pair)
}

//function car(cons(a,b)) will return a. function cdr(cons(a,b)) will return r
console.log(cdr(cons(3,4)));