function transformTheHouse()
{
  // return a matrix that has all of the transformations of the highest level you reached in the 
  // transformation game of last week's online assignment
  //
  
  // start with the identity matrix
  let identityMatrix = [1, 0, 0, 1, 0, 0];

  angleMode(DEGREES);
  
  return rotate(-3) * rotate(-45) * translate(100, 0) * rotate(50) * identityMatrix;
}

function edgeFunc(x0,y0,x1, y1, x,y){

  edge = (x-x0)*(y1-y0)-(y-y0)*(x1-x0)
  return edge
}



function myColorTriangle (x0, y0, r0, g0, b0, x1, y1, r1,g1,b1, x2, y2, r2,g2,b2)
{
  var LE = Array(500).fill(0);
  var RE = Array(500).fill(500)

  for(let y=0;y<500;y++){
    for(let x=LE[y];x<RE[y];x++){
      if(edgeFunc(x0,y0,x1,y1,x,y) >= 0 && edgeFunc(x1,y1,x2,y2,x,y) >= 0 && edgeFunc(x2,y2,x0,y0,x,y) >= 0){
       
        let b = edgeFunc(x1,y1,x2,y2,x,y)/edgeFunc(x0, y0, x1,y1,x2,y2)
   
        let g = edgeFunc(x2,y2,x0,y0,x,y)/edgeFunc(x0, y0, x1,y1,x2,y2)
      
        let a = 1 - b - g
       
        drawColorPoint (x, y, a*255, b*255, g*255)
        // drawColorPoint (x, y, a*(r0, g0, b0), b*(r1,g1,b1), g*(r2,g2,b2))
      }
    }
  } 
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup () 
{
  createCanvas (500, 500);
  doMine = true;
  scene = 1;
  backgroundColor = color(150, 150, 150);
  background (backgroundColor);
}

function draw ()
{
  if (scene == 1) doHouse();
  if (scene == 2) doTriangle();
}

//
// fills in the pixel (x, y) with the color (r,g,b)
//
function drawColorPoint (x, y, r, g, b)
{
  stroke (r, g, b);
  point (x,y);
}

function doHouse()
{
  stroke (0,0,0);
  line (0, 250, 500, 250);
  line (250, 0, 250, 500);
  
 
  //resetMatrix();
 translate (250, 250);  
 applyMatrix(transformTheHouse()); 
    
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (-25, 25, 25, -25, -25, -25);
    triangle (25, 25, 25, -25, -25, 25);
    
    fill (0, 255, 0);
    stroke (0,255,0);
    triangle (-25,-25, 25, -25, 0, -50);
    
    stroke (0,0,255);
    fill (0,0,255);
   triangle (10, 0, 10, 25, 20, 25);
   triangle (10, 0, 20, 25, 20, 0);
}

function doTriangle ()
{
  myColorTriangle (300, 400, 0, 0, 255,
                   400, 100, 0, 255, 0,
                   50, 50, 255, 0, 0);
}

function keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
}