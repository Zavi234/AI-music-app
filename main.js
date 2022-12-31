leftWristX=0
rightWristX=0

leftWristY=0
rightWristY=0

function preload()
{
    song1= loadSound("music.mp3")
    song2= loadSound("music2.mp3")
}

function setup()
{
    canvas= createCanvas(450,450)
    canvas.position(450,155)

    video= createCapture(VIDEO)
    video.hide()

   initialize_pn= ml5.poseNet(video,model_loaded)
   initialize_pn.on("pose",gotposes)
}

function model_loaded()
{
    console.log("Model has loaded")
}

function draw()
{
    image(video,0,0,450,450)
}

function gotposes(i)
{
    if(initialize_pn>0)
    {
        console.log(i)
        leftWristX= i[0].pose.leftWrist.x
        leftWristY= i[0].pose.leftWrist.y

        rightWristX= i[0].pose.rightWrist.x
        rightWristY= i[0].pose.rightWrist.y
    }
}