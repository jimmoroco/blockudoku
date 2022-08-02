let sideOfSmallSquares = 9

window.onload = function () {
    generateTemplate();
    resize();
}
window.onresize = resize;

function resize() {
    const width = document.querySelector(".small-square").offsetWidth;
    // const height = document.querySelector(".small-square").offsetHeight;
    const grid = document.querySelector(".grid");
    grid.style.setProperty("width", `${width * sideOfSmallSquares}px`);
    // grid.style.setProperty("grid-auto-rows", `${width}px`);
    // grid.style.setProperty("grid-auto-columns", `${height}px`);
    grid.style.setProperty("grid-template-columns", `repeat(auto-fit, ${100 / sideOfSmallSquares}%)`);
}

function generateTemplate() {
    let totalSmallSquares = Math.pow(sideOfSmallSquares, 2);
    for (let index = 0; index < totalSmallSquares; index++) {
        document.querySelector(".grid").appendChild(getSmallSquare());
    }
}
function getSmallSquare() {
    let square = document.createElement("div");
    square.classList.add("small-square");
    square.innerText = "X"
    return square;
}