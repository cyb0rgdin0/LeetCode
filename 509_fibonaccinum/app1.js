// FOR LOOP

var fib = function(N) {
    let n1 = 0, n2 = 1;
    var n3 = 0;
    if(N == 0) {
        return 0;
    } else if (N == 1) {
        return 1;
    } else {
        for (let i = 0; i < N; i++) {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
        }
        return n3;
    }
}