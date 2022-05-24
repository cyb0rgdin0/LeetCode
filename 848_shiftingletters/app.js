/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    let string = [];
    for (let i = 0; i < S.length; i++) {       // iterates through string
        let x = S[i];
        for (let j = 0 + i; j < shifts.length; j++) {       // iterates through shift array
            let add = shifts[j] % 26
            x = String.fromCharCode(x.charCodeAt(0) + add);
            if (x.charCodeAt(0) > 122) {
                x = String.fromCharCode(x.charCodeAt(0) % 122 + 97 - 1)
            }
        }
        string.push(x);
    }

    return string.join('');
};

let S = "mcc";
let shifts = [10,20,40];
console.log(shiftingLetters(S,shifts));     // output is "rpl"