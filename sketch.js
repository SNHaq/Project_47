const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var world;
var engine;

var ball;
var pinkballImg, yellowballImg, greenballImg, blueballImg, purpleballImg;
var pinkball, yellowball, greenball, blueball, purpleball;

var pinImg;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10;

var gameState = "SELECTION";

var bg;

function preload(){
pinkballImg = loadImage("Images/Bowling1.gif");
yellowballImg = loadImage("Images/Bowling2.gif");
greenballImg = loadImage("Images/Bowling3.gif");
blueballImg = loadImage("Images/Bowling4.gif");
purpleballImg = loadImage("Images/Bowling5.gif");

bgroundImg = loadImage("Images/BowlingAlley.PNG");

pinImg = loadImage("Images/BowlingPinTopView.png");
}

function setup(){
createCanvas(1300,550);
engine = Engine.create();
world = engine.world;

bg = createSprite(width/2, height/2, 1300, 550);
bg.visible = false;

ball = createSprite(100,270);
ball.visible = false;

//level 1
pin1 = createSprite(1000,270)
pin1.addImage(pinImg);
pin1.scale = 0.03;
pin1.visible = false;

//level 2
pin2 = createSprite(1070,230);
pin2.addImage(pinImg);
pin2.scale = 0.03;
pin2.visible = false;

pin3 = createSprite(1070,305);
pin3.addImage(pinImg);
pin3.scale = 0.03;
pin3.visible = false;

//level 3
pin4 = createSprite(1140,190);
pin4.addImage(pinImg);
pin4.scale = 0.03;
pin4.visible = false;

pin5 = createSprite(1140,270);
pin5.addImage(pinImg);
pin5.scale = 0.03;
pin5.visible = false;

pin6 = createSprite(1140,350);
pin6.addImage(pinImg);
pin6.scale = 0.03;
pin6.visible = false;

//level 4
pin7 = createSprite(1210,145);
pin7.addImage(pinImg);
pin7.scale = 0.03;
pin7.visible = false;

pin8 =createSprite(1210, 215);
pin8.addImage(pinImg);
pin8.scale = 0.03;
pin8.visible = false;

pin9 = createSprite(1210,300);
pin9.addImage(pinImg);
pin9.scale = 0.03;
pin9.visible = false;

pin10 = createSprite(1210,390);
pin10.addImage(pinImg);
pin10.scale = 0.03;
pin10.visible = false;

pinkball = createSprite(190,350,25,25);
pinkball.addImage(pinkballImg);
pinkball.scale = 0.3;

yellowball = createSprite(430,350,25,25);
yellowball.addImage(yellowballImg);
yellowball.scale = 0.3;

greenball = createSprite(670,350,25,25);
greenball.addImage(greenballImg);
greenball.scale = 0.3;

blueball = createSprite(910,350,25,25);
blueball.addImage(blueballImg);
blueball.scale = 0.3;

purpleball = createSprite(1150,350,25,25);
purpleball.addImage(purpleballImg);
purpleball.scale = 0.3;
}

function draw(){

if(gameState==="SELECTION"){
background("black");

if(mousePressedOver(pinkball) || mousePressedOver(yellowball) || 
mousePressedOver(greenball) || mousePressedOver(blueball) || mousePressedOver(purpleball)){
    gameState="PLAY";

    if(mousePressedOver(pinkball)){
        ball.addImage(pinkballImg);
        ball.scale = 0.2;
    } 
    else if(mousePressedOver(yellowball)){
        ball.addImage(yellowballImg);
        ball.scale = 0.2;
    }
    else if(mousePressedOver(greenball)){
        ball.addImage(greenballImg);
        ball.scale = 0.2;
    }
    else if(mousePressedOver(blueball)){
        ball.addImage(blueballImg);
        ball.scale = 0.2;
    } 
    else if(mousePressedOver(purpleball)){
        ball.addImage(purpleballImg);
        ball.scale = 0.2;
    }
}
}

if(gameState==="PLAY"){
background(bgroundImg);
bg.visible = true;
bg.addImage(bgroundImg);
bg.scale = 3.7;

ball.visible = true;

pinkball.visible = false;
yellowball.visible = false;
greenball.visible = false;
blueball.visible = false;
purpleball.visible = false; 

pin1.visible = true;
pin2.visible = true;
pin3.visible = true;
pin4.visible = true;
pin5.visible = true;
pin6.visible = true;
pin7.visible = true;
pin8.visible = true;
pin9.visible = true;
pin10.visible = true;

collision(); 

if(keyDown(UP_ARROW) && ball.velocityX < 5){
    ball.y = ball.y - 5;
}

if(keyDown(DOWN_ARROW) && ball.velocityX < 5){
    ball.y = ball.y + 5;
}

if(keyCode===32){
    ball.velocityX = 15;
}
}

drawSprites();
text("Score: ", 1200, 100);
Engine.update(engine);
}

function collision(){
    if(ball.isTouching(pin1)){
       ball.bounce(pin1);
    }

    if(ball.isTouching(pin2)){
        ball.bounce(pin2);
    }

    if(ball.isTouching(pin3)){
        ball.bounce(pin3);
    }

    if(ball.isTouching(pin4)){
        pin4.destroy();
        ball.bounce(pin4);
    }

    if(ball.isTouching(pin5)){
        pin5.destroy();
        ball.bounce(pin5);
    }

    if(ball.isTouching(pin6)){
        pin6.destroy();
        ball.bounce(pin6);
    }

    if(ball.isTouching(pin7)){
        pin7.destroy();
        ball.bounce(pin7);
    }

    if(ball.isTouching(pin8)){
        pin8.destroy();
        ball.bounce(pin8);
    }

    if(ball.isTouching(pin9)){
        pin9.destroy();
        ball.bounce(pin9);
    }

    if(ball.isTouching(pin10)){
        pin10.destroy();
        ball.bounce(pin10);
    }

}