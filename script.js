const x = 200;
const y = 550;
const randomColor = ['green','blue','orange','brown','pink'];

function setup() {
  const cnv = createCanvas(1200, 600);
}


function draw() {
  background(220);
  rectMode(CENTER);
  
    // chair
  stroke('black');
  strokeWeight(10); 
  strokeCap(SQUARE);
  line(50,450,1150,450);
  
  pc();
  npc1.npc();
  npc2.npc();
  npc3.npc();
}

function pc() {
    //legs
  stroke('black');
  strokeCap(ROUND);
  strokeWeight(50);
  line(x-50, y, x-50, y-130);
  line(x+50, y, x+50, y-130);
  
  line(x+50, y-130, x, map(mouseY, height-200, 0, y-180, y-300));
  line(x-50, y-130, x, map(mouseY, height-200, 0, y-180, y-300));
  
    // body
  line(x, map(mouseY, height-200, 0, y-180, y-300), x, map(mouseY, height-200, 0, y-180, y-300)-200);
  
    // face
  noStroke();
  fill('black');
  rect(x,map(mouseY,height,0,y-200,y-300)-180,160);
  
  // eyeball
  fill('white');
  strokeWeight(0);
  rect(x-40,map(mouseY,height,0,y-200,y-300)-180,50);
  rect(x+40,map(mouseY,height,0,y-200,y-300)-180,50);
  
  push();
  beginClip();
  fill('white');
  strokeWeight(0);
  rect(x-40,map(mouseY,height,0,y-200,y-300)-180,50);
  rect(x+40,map(mouseY,height,0,y-200,y-300)-180,50);
  endClip();
  
    // pupil
  fill('black');
  rect(map(mouseX,0,width,x-60,x-10),map(mouseY,height,0,y-190,y-310)-180,30);
  rect(map(mouseX,0,width,x+10,x+60),map(mouseY,height,0,y-190,y-310)-180,30);
  pop();
}

class Npc {
  constructor() {
    this.xPos = this.generateUniqueXPos();
    this.yPos = 420;
    this.randomColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  }
  
  generateUniqueXPos() {
    const usedXPos = Npc.usedXPos || [];
    let newXPos;

    do {
      newXPos = Math.floor(Math.random() * ((1200 - 400) / 200)) * 200 + 400;
    } while (usedXPos.includes(newXPos));

    usedXPos.push(newXPos);
    Npc.usedXPos = usedXPos;

    return newXPos;
  }
  
  npc() {
      //legs
    stroke(this.randomColor);
    strokeCap(ROUND);
    strokeWeight(50);
    line(this.xPos-50, y, this.xPos-50, y-130);
    line(this.xPos+50, y, this.xPos+50, y-130);

    stroke(this.randomColor);
    line(this.xPos+50, y-130, this.xPos, this.yPos);
    line(this.xPos-50, y-130, this.xPos, this.yPos);

      // body
    line(this.xPos, this.yPos, this.xPos, this.yPos-200);

      // face
    noStroke();
    fill(this.randomColor);
    rect(this.xPos, this.yPos-250,160);

      // eyeball
    fill('white');
    strokeWeight(0);
    rect(this.xPos-40, this.yPos-250,50);
    rect(this.xPos+40, this.yPos-250,50);
    
    push();
    beginClip();
    fill('white');
    strokeWeight(0);
    rect(this.xPos-40, this.yPos-250,50);
    rect(this.xPos+40, this.yPos-250,50);
    endClip();

      // pupil
    fill('black');
    rect(map(mouseX, 0, width,this.xPos-60, this.xPos - 10), map(mouseY, height, 0, y-120, y-140)-250, 30);
    rect(map(mouseX, 0, width, this.xPos+10, this.xPos+60), map(mouseY, height, 0, y-120, y-140)-250, 30);
    pop();
  }
}

const npc1 = new Npc();
const npc2 = new Npc();
const npc3 = new Npc();
