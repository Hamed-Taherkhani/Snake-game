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
    coordinate.x = Math.ceil(Math.random() * boardDimension);
    coordinate.y = Math.ceil(Math.random() * boardDimension);
    return coordinate;
}