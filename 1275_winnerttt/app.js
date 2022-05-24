/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    if (moves.length < 5) {
        return "Pending";
    }
    for (let i = 0; i < moves.length; i+=2) {
        
    }
    return moves.length == 9 ? "DRAW" : "Pending";
};