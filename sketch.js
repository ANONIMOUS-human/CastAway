var backgroundImage1
function preLoad(){
    backgroundImage1 = loadImage("Level 1.png")
}
function setup(){
    createCanvas(800, 800)
    background1 = createSprite(400, 400, 800, 800)
    background1.shapeColor = "yellow"
//    background1.addImage(backgroudImage)
}
function draw(){
    drawSprites()
}