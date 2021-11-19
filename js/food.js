import {
    snakeSegments
} from './main.js';

export function putFood(coordinate, board) {
    let newElement = document.createElement("section");
    newElement.classList.add("food");
    newElement.style.gridRowStart = coordinate.x;
    newElement.style.gridColumnStart = coordinate.y;
    board.appendChild(newElement);
    return newElement;
}

export function getRandomCoordinate(boardDimension) {
    let coordinate = {
        x: 0,
        y: 0
    };

    do {
        coordinate.x = Math.ceil(Math.random() * boardDimension);
        coordinate.y = Math.ceil(Math.random() * boardDimension);
        let i = 0;
        for (i = 0; i < snakeSegments.length; i++) {
            let temp = snakeSegments[i];
            if (coordinate.x === temp.y && coordinate.y === temp.x)
                break;
        }

        if (i === snakeSegments.length)
            return coordinate;
    } while (true);
}