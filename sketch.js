var circles=[];
var numCircles=400;

var slider;
var sliderVal;
var count=0;

function setup() {
  // frameRate(3);
  createCanvas(800,800);
translate(500,500);
  for(var i=0;i<numCircles;i++) {
  var xVal = cos(i/2*5);
  xVal=(xVal/2)*100;
  var yVal = sin(i/10);
  yVal=yVal/2*20;
    var zVal = (400-i)/4 * 2;
  circles[i] = new Bubble(xVal,yVal,zVal);

  circles[i].draw();
  }






}

function draw() {
background(color(random(255),random(255),random(255)));
translate(500,500);
count = count+0.001;
  for(var i=0;i<numCircles;i++) {
    circles[i].x=cos(i/10+count)*200;
    circles[i].y=sin(i/20+count)*350;
    // circles[i].size = circles[i].size*sin(i)*1.005;
  circles[i].draw();
  }
}



var Bubble = function(x,y,size) {

this.x=x;
this.y=y;
this.size=size*random(2);
this.xScale=random(7);    
this.col = [random(255),random(255),random(255)];

this.draw = function() {
fill(this.col);

ellipse(this.x,this.y,this.size/this.xScale,this.size)
}

}
