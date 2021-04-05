const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,dro10,drop11,drop12,drop13,drop14,drop15,drop16,drop17,drop18,drop19,drop20,drop21,drop22,drop23,drop24,drop25,drop26,drop27,drop28,drop29,drop30,drop31,drop32,drop33,drop34,drop35,drop36,drop37,drop38,drop39,drop40;
var umbrella, thunder;
var rand, thunderCreatedFrame = 0;
var thunder1, thunder2;

function preload(){
    umbrellaimg=loadImage("walking_8.png"); 

    thunder1 = loadImage("1.png");

    thunder2 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    umbrella = new u(200,485,55);

    drop1 = new drop(200,10,3);
    drop2 = new drop(210,20,3);
    drop3 = new drop(220,30,3);
    drop4 = new drop(230,15,3);
    drop5 = new drop(240,60,3);
    drop6 = new drop(250,90,3);
    drop7 = new drop(260,50,3);
    drop8 = new drop(270,40,3);
    drop9 = new drop(280,100,3);
    drop10 = new drop(290,70,3);
    drop11 = new drop(300,150,3);
    drop12 = new drop(310,160,3);
    drop13 = new drop(320,130,3);
    drop14 = new drop(330,110,3);
    drop15 = new drop(340,150,3);
    drop16 = new drop(350,50,3);
    drop17 = new drop(360,70,3);
    drop18 = new drop(370,200,3);
    drop19 = new drop(380,170,3);
    drop20 = new drop(390,260,3);
    drop21 = new drop(400,300,3);
    drop22 = new drop(190,400,3);
    drop23 = new drop(180,500,3);
    drop24 = new drop(170,450,3);
    drop25 = new drop(160,140,3);
    drop26 = new drop(150,120,3);
    drop27 = new drop(140,180,3);
    drop28 = new drop(130,300,3);
    drop29 = new drop(120,360,3);
    drop30 = new drop(110,410,3);
    drop31 = new drop(100,60,3);
    drop32 = new drop(90,90,3);
    drop33 = new drop(80,550,3);
    drop34 = new drop(70,20,3);
    drop35 = new drop(60,370,3);
    drop36 = new drop(50,230,3);
    drop37 = new drop(40,10,3);
    drop38 = new drop(30,60,3);
    drop39 = new drop(20,390,3);
    drop40 = new drop(10,420,3);


    Engine.run(engine);
}

function draw(){
    background("black");

    
    rand = Math.round(random(1,2))
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(Math.round(random(10,370)), Math.round(random(10,30)), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = 0.5;
    }

    if(thunderCreatedFrame+10 === frameCount && thunder){
        thunder.destroy();
    }


    image(umbrellaimg,100,410,200,200);

    drop1.display();
    drop1.update();
    drop2.display();
    drop2.update();
    drop3.display();
    drop3.update();
    drop4.display();
    drop4.update();
    drop5.display();
    drop5.update();
    drop6.display();
    drop6.update();
    drop7.display();
    drop7.update();
    drop8.display();
    drop8.update();
    drop9.display();
    drop9.update();
    drop10.display();
    drop10.update();
    drop11.display();
    drop11.update();
    drop12.display();
    drop12.update();
    drop13.display();
    drop13.update();
    drop14.display();
    drop14.update();
    drop15.display();
    drop15.update();
    drop16.display();
    drop16.update();
    drop17.display();
    drop17.update();
    drop18.display();
    drop18.update();
    drop19.display();
    drop19.update();
    drop20.update();    
    drop20.display();
    drop21.update();
    drop22.display();
    drop22.update();
    drop23.display();
    drop23.update();
    drop24.display();
    drop24.update();
    drop25.display();
    drop25.update();
    drop26.display();
    drop26.update();
    drop27.display();
    drop27.update();
    drop28.display();
    drop28.update();
    drop29.display();
    drop29.update();
    drop30.display();
    drop30.update();
    drop31.display();
    drop31.update();
    drop32.display();
    drop32.update();
    drop33.display();
    drop33.update();
    drop34.display();
    drop34.update();
    drop35.display();
    drop35.update();
    drop36.display();
    drop36.update();
    drop37.display();
    drop37.update();
    drop38.display();
    drop38.update();
    drop39.display();
    drop39.update();
    drop40.display();
    drop40.update();

    drawSprites();

}   

