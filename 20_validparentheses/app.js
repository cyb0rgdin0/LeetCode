const MATCH = {
    "(": ")",
    "[": "]",
    "{": "}"
}

function findMatch(a) {
    for (let i = 0; i < a.length; i++) {
        let leftSide = a[i];
        let rightSide = a[i+1];
        //console.log("leftSide:" + leftSide + " rightSide:" + rightSide);
        if (leftSide in MATCH) {
            // do nothing
        } else {
            return false
        }
        if (MATCH[leftSide] === rightSide) {
            a.splice(i, 2);
            return true
        }
    }
    return false;
}

var isValid = function(s) {
    let elements = s.split('');
    if (elements.length % 2 !== 0)
        return false;
    while (elements.length > 0) {
        let status = findMatch(elements);
        //console.log("status:" + status);
        //console.log("elements:", elements);
        if (status === false) {
            return false;
        }
    }
    return true;
};