//Create gameboard
function boardSquare(position, path){
    if(position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
        return null
    }
    return {
        position, 
        path
    };
};

//function for knight's movement
//[x, y] is start and [a, b] is finish
function knightTravails([x, y], [a, b]) {
    //Gameboard is 8 x 8
    if(a < 0 || a > 7 || b < 0 || b > 7) {
        console.log("Please Stay on Gameboard")
        return null
    }
    let queue = [boardSquare([x, y], [[x, y]])];
    let currentSquare = queue.shift();

    while (currentSquare.position[0] !== a || currentSquare.position[1] !== b) {
        //Knight moves in an L shaped pattern 2 away and 1 up
        let moves = [
            [currentSquare.position[0] + 1, currentSquare.position[1] + 2],
            [currentSquare.position[0] + 1, currentSquare.position[1] - 2],
            [currentSquare.position[0] + 2, currentSquare.position[1] + 1],
            [currentSquare.position[0] + 2, currentSquare.position[1] - 1],
            [currentSquare.position[0] - 1, currentSquare.position[1] + 2],
            [currentSquare.position[0] - 1, currentSquare.position[1] - 2],
            [currentSquare.position[0] - 2, currentSquare.position[1] + 1],
            [currentSquare.position[0] - 2, currentSquare.position[1] - 1],
        ];
        //Iterates through every possible move then, ever two possible moves, 
        //so on until the first shortest path is found.
        //could randomize order of moves to make less predictable
        moves.forEach(move => {
            let square = boardSquare(move, currentSquare.path.concat([move]));
            if (square) {
                queue.push(square);
                console.log(currentSquare.path)
            }
        });
        currentSquare = queue.shift();
    }
    console.log(
        `Accomplished in ${currentSquare.path.length - 1} moves! Your path was`
    );
    currentSquare.path.forEach(position => {
        console.log(position);
    });
}

