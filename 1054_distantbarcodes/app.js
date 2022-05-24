/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    if (barcodes.length == 1) {
        return barcodes;
    }
    
    barcodes = smallToLarge(barcodes);
    let numCounters = {}            // create dictionary to hold counters for each unique number
    let mode = undefined;           // variable for most frequent number
    let mode_counter = 0;           // variable for counter of the frequent number occurrences

    for (let i = 0; i < barcodes.length; i++) {
        let barcode = barcodes[i];
        if (barcode in numCounters) {           // check if the value is unique
            numCounters[barcode]++;
        } else {
            numCounters[barcode] = 1;
        }

        if (numCounters[barcode] > mode_counter) {          // check if the value occurs more than current value
            mode_counter = numCounters[barcode];
            mode = barcode;
        }

    }
    
    let temp = [];
    for (let i = 0; i < barcodes.length; i++) {     // loop to create array of elements that are not most common
        let barcode = barcodes[i];
        if (barcode != mode) {
            temp.push(barcode);
        }
    }
    
    let buckets = [];                   // create a bucket to hold sub arrays
    let tempLength = temp.length;

    for (let i = 0; i <= temp.length; i++) {        // loop to push sub arrays into bucket
        let index = i % mode_counter;
        if (index + 1 > buckets.length) {           // sets array element as new subarray holding most common value
            buckets[index] = [mode];
        }
        if (i < tempLength) {                       // pushes elements of temp array into subarray
            buckets[index].push(temp[i]);
        }
    }

    let array = buckets[0];
    for (let i = 1; i < buckets.length; i++) {      // concat all arrays
        array = array.concat(buckets[i]);
    }

    return array;
};

function smallToLarge(a) {
    let x = a.length;
    let temp;
    for(var i = 0; i < x; i++){
        for(var j = 0; j < x - 1; j++){
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

let x = [1,1,1,2,2,2];
let y = [1,1,1,1,2,2,3,3];

console.log(rearrangeBarcodes(x));
console.log(rearrangeBarcodes(y));