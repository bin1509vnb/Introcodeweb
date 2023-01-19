var x; 
var y;  

function setup (){
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    x = 100; 
    y = 100; 
}

function draw (){
    background(255,255,0);
    x = x + 1
    y = y + 1

    x = x % -1000;
    y = y % -1000; 
    square (x, y, 100)
}
