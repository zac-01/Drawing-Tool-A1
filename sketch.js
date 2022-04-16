//Drawing Tool Assignmet 1 - Computational Prototyping 
//The Faces 
//Isaac Doblin - s3786305


var canvas;
var showSplash = true;
var numFill = 500; 

let AGothic;

function preload() {
  AGothic = loadImage('AGothic.jpg');
}

let moustache;

function preload(){
 moustache = loadImage('moustache.png');
}


function setup() {
  createCanvas(400, 400);
  AGothic = loadImage('AGothic.jpg'); 
}

function draw() {
  background(240);
  if (showSplash) {
    splashScreen();
  } else {
    
    //Frame
    noStroke();
    fill(227, 230, 28);
    rect(40,40,320,320); 
    
    //Artwork to Deface
    image(AGothic,50,50,300,300);

    //Moustache for Fun
    //image(moustache,50,50,mouseX,mouseY);
    
      // Studs TL
      fill(227, 230, 28);
      stroke(227, 230, 28);
      strokeWeight(2);
      circle(20, 20, 10);

      //Studs TR
      fill(227, 230, 28);
      stroke(227, 230, 28);
      strokeWeight(2);
      circle(380, 20, 10);

      //Studs BL
      fill(227, 230, 28);
      stroke(227, 230, 28);
      strokeWeight(2);
      circle(20, 380, 10);

      //Studs BR
      fill(227, 230, 28);
      stroke(227, 230, 28);
      strokeWeight(2);
      circle(380, 380, 10);
    
    //Additonal Drawing functinality 
    //TODO: Make line appear solid when mouse dragged 
    pen();
     
    //Moustahce adding fucntionality
    //TODO 
    //moo();

 
   }
}
function pen() {
  noStroke();
  fill(50);
    if(mouseIsPressed) {
    var destX = mouseX - pmouseX;
    var destY = mouseY - pmouseY;

    for (var i = 0; i < numFill; i++) {
      circle(pmouseX + (destX / numFill) * i, pmouseY + (destY / numFill) * i, 5);
    }
  } 
}
 
// function moo(){
//    if(mouseIsPressed == true) {
//    push();
//    translate(mouseX,mouseY);
//    rotate(random(0,360));
//    image(moustache,0,0,30,30);
//    pop();
//  }
// }

      
function keyPressed() {
  if (key == "1") {
    showSplash = false;
  }
}

function splashScreen() {
  
  //The Welcome Screen 
  
  //Circle 
  stroke(227, 230, 28);
  strokeWeight(3);
  circle(200, 200, 390);

  //Large Title Block
  fill(22);
  noStroke();
  textSize(25);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Press then 1 Key to Begin", width / 2, height / 2);

  //Smaller Title Block
  fill(22);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Add Emotions", width / 2, 240);
  
  //Smallest Title Block 
  fill(22);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  textFont("Helvetica");
  text("To face", width / 2, 260);

  //Face - Left Eye
  fill(22);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(130, 150, 40);

  //Face - Right Eye
  fill(22);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(270, 150, 40);

  // Studs TL
  fill(227, 230, 28);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(20, 20, 10);

  //Studs TR
  fill(227, 230, 28);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(380, 20, 10);

  //Studs BL
  fill(227, 230, 28);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(20, 380, 10);

  //Studs BR
  fill(227, 230, 28);
  stroke(227, 230, 28);
  strokeWeight(2);
  circle(380, 380, 10);
  
}

//Image Refernece 
//Grant Wood
//American Gothic,1930
//The Art Institute of Chicago,Friends of American Art Collection 
//////////////////////////////////////////////////////////////////