/**
 * @param {string} s
 * @return {string}
 */

var reformat = function(s) {
    let count_num = 0;
    let count_char = 0
    s = Array.from(s);
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) === true) {
            count_num++;
        } else {
            count_char++
        }
    }
    let x = count_num - count_char
    if (x !== 0 && x !== 1 && x !== -1) {
        return "";
    }
    
    let a = [];         // number array
    let aa = 0;         // number index
    let b = [];         // char array
    let bb = 0;         // char index
    let index = 0
    
    while (index < s.length) {
        if (isNaN(s[index]) === false) {
            a[aa] = s[index];
            aa++;
        } else {
            b[bb] = s[index];
            bb++;
        }
        index++
    }
    aa = 0;
    bb = 0;

    for (let i = 0; i < s.length; i++) {
        if (a.length >= b.length) {
            if (i % 2 === 0) {
                s[i] = a[aa];
                aa++
            } else {
                s[i] = b[bb];
                bb++
            }
        } else if (a.length < b.length) {
            if (i % 2 === 0) {
                s[i] = b[bb];
                bb++;
            } else {
                s[i] = a[aa];
                aa++
            }
        }
    }
    console.log(a)
    console.log(b)
    
    return s;
    
};

console.log(reformat("covid2019"));
console.log(reformat("1231231"));
console.log(reformat("covid2000000"));