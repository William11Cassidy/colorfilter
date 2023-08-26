function applyFilter(){
color=document.getElementById("tint").value
}

function take_snapshot(){
save("wills.png")
}

function preload(){

}

function setup(){
canvas=createCanvas(900,700)
canvas.position(200,300)
video=createCapture(VIDEO)
video.hide()
color=""
}


function draw(){
background("yellow")
 image(video,100,100,700,500)
tint(color)
fill("red")
stroke("red")
circle(50,50,40)
circle(850,50,40)
circle(50,650,40)
circle(850,650,40)
fill("blue")
rect(50,100,50,500)
rect(800,100,50,500)


}