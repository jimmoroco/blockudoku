let sideOfSmallSquares = 9

window.onload = function () {
    generateTemplate();
    resize();
    //sizes();
}
window.onresize = resize;

function resize() {
    const width = document.querySelector(".small-square").offsetWidth;

    const top = document.querySelector(".top");
    top.style.setProperty("height", `${window.innerHeight * 0.2}px`);

    const grid = document.querySelector(".grid");
    grid.style.setProperty("width", `${width * sideOfSmallSquares}px`);
    grid.style.setProperty("grid-template-columns", `repeat(auto-fit, ${100 / sideOfSmallSquares}%)`);

    const bottom = document.querySelector(".bottom");
    bottom.style.setProperty("height", `${window.innerHeight * 0.2}px`);



    //const container = document.querySelector(".container");
    // container.style.setProperty("grid-template-rows", `50% ${width * sideOfSmallSquares}`); // : 20% 60% 20% ;");
    //sizes();

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


function sizes() {
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    // Get the browser window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    // Get the size of the entire webpage
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    // Showing the sizes on the webpage
    var x = document.getElementById("screen");
    x.innerHTML = "Device Screen: width: " + screenWidth + ", height: " + screenHeight + ".";
    var y = document.getElementById("window");
    y.innerHTML = "Browser Window: width: " + windowWidth + ", height: " + windowHeight + ".";
    var z = document.getElementById("page");
    z.innerHTML = "Webpage: width:" + pageWidth + ", height: " + pageHeight + ".";
}