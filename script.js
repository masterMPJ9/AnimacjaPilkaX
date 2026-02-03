function setup() 
{
 createCanvas(400, 400);
}

let x = 10;
let dx = 3;

function draw()
{
   background(222, 55, 55);
   ellipse(x, 200, 20, 20);
   x+=dx;
   
   if(x > 390 || x < 10) dx = -(dx);
}