var canvas;
var music;
var ball;
var box1, box2, box3, box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(790,190,90,50);
    box1.shapeColor = "red";
    box2 = createSprite(790,290,90,50);
    box2.shapeColor = "green";
    box3 = createSprite(790,390,90,50);
    box3.shapeColor = "blue";
    box4 = createSprite(790,490,90,50);
    box4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),80,20,20); 
    ball.velocityX = 4;
    ball.velocityY = 4;
    ball.shapeColor = "white";

}

function draw() {
    background(rgb(225));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
   // ball.bounceOff(box1);
   //ball.bounceOff(box2);
   //ball.bounceOff(box3);
    //ball.bounceOff(box4);


    if (box1.isTouching(ball) && ball.bounceOff(box1)) {
        ball.shapeColor = "red";
        music.play();
    }

    if (box2.isTouching(ball) && ball.bounceOff(box2)) {
        ball.shapeColor = "green";
        music.play();
    }

    if (box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor = "blue";
        music.play();
    }

    if (box4.isTouching(ball) && ball.bounceOff(box4)) {
        ball.shapeColor = "yellow";
        music.play();
    }

    drawSprites();
}