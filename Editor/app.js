function doSomething() {
    var input = document.getElementById('squares').value;
    if (!isNaN(input))
        if (input <= 100) {
            document.getElementById('squares').value = "";
            buildContainer(input);
        }
}

function buildContainer(squares) {
    var container = document.getElementById('innerContainer');
    container.innerHTML = ``;
    var side = 880/squares;
    
    var square = `<div class="square"
            style="width: ${side}px; height: ${side}px;"
            onmouseover="changeColor(this);"></div>`;
    var squareRow = `<div class="row">`;
    
    for (var j = 0; j < squares; j++)
        squareRow += square;
    squareRow += `</div>`;

    for (var i = 0; i < squares; i++)
        container.innerHTML += squareRow;
}

var r = 33;
var g = 66;
var b = 132;

function changeColor(element) {
    element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
    r = (r+0.3)%256;
    g = (g+0.7)%256;
    b = (b+0.4)%256;
}