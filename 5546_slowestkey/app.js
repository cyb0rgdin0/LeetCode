/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let index = 0;
    let temp = releaseTimes[0];
    for (let i = 1; i < releaseTimes.length; i++) {
        if (releaseTimes[i] - releaseTimes[i-1] > temp) {
            temp = releaseTimes[i] - releaseTimes[i-1];
            index = i;
        } else if (releaseTimes[i] - releaseTimes[i-1] == temp && keysPressed.charCodeAt(index) < keysPressed.charCodeAt(i)) {
            temp = releaseTimes[i] - releaseTimes[i-1];
            index = i;   
        }
    }
    return keysPressed[index];
};

let x = [9,29,49,50];
let y = "cbcd"
console.log(slowestKey(x,y));

x = [12,23,36,46,62];
y = "spuda";
console.log(slowestKey(x,y));