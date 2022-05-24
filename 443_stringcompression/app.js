/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    if (chars.length == 0) {
        console.log(chars);
        return chars.length;
    }
    if (chars.length == 1) {
        console.log(chars);
        return chars.length;
    }
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i-1] === chars[i]) {
            chars.splice(i-1, 1);
            count++;
            i--
        } else if(chars[i-1] !== chars[i]) {
            if (count !== 1) {
                chars.splice(i-1,0,count);
                count = 1;
            }
        }
    }
    console.log(chars);
    return chars.length;
};

console.log(compress(["c"]));
console.log(compress([]));
console.log(compress('c','c'));
