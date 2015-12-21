//location variables
var x;
var y;
var w;
var h;
var x1;
var y1;
var x2;
var y2;


function setup(){
    // create the canvas
    createCanvas(windowWidth, windowHeight);



}

function drawWindow(){
    // glass
     strokeWeight(1);
    stroke('black');
    fill('cyan');
     x=100;
     y=100;
     w=220;
     h=350;
    rect(x,y,w,h);




     strokeWeight(4);
    stroke('black');
// borders
    x1=100;
    y1=100;
    x2=100;
    y2=100;

    line(x1,y1,x2,y2+h);

    line(x1,y1,x2+w,y2);

    line(x1+w,y1,x2+w,y2+h);

    line(x1,y1+h,x2+w,y2+h);

    line(x1+w/2,y1,x2+w/2,y2+h);

    line(x1,y1+h/2,x2+w,y2+h/2);

}
