//Create variables here
var dog, happyDog, database,foodS,foodStock;
var dogImg,happyDog;
var locfood;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  var locfood = database.ref('food');
  locfood.on("value",readStock);

}


function draw() { 
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill(255,255,255);
  stroke(10);
  text("Press UP ARROW key to feed your virtual pet :)", 50,30);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food : x
  })
}


