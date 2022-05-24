/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start == destination) {
        return 0;
    }
    
    let x = 0;
    let y = 0;
    
    let left = start
    let right = destination;
    
    if (start > destination) {
        left = destination;
        right = start;
    }
    
    for (let i = left; i < right; i++) {
        x+=distance[i];
    }
    for (let i = 0; i < distance.length; i++) {
        y+=distance[i];
    }
    if (y - x > x) {
        return x;
    } else {
        return y - x
    }
};