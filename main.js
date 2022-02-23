NoseX = 0;
NoseY = 0;
LeftWristX = 0;
RightWristX = 0;
Difference = 0;




function setup(){
    video = createCapture(VIDEO);
    video.size(550,500),

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose',gotPoses);
}

function draw(){
    background('#848a87');
    document.getElementById("square_Side").innerHTML = "Width and Height of the square will be" + Difference + "px";
    fill('#ed930c');
    stroke('#ed930c');
    square(NoseX,NoseY,Difference);
}

function modelLoaded(){
    console.log("PosNet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
       NoseX = results[0].pose.nose.x;
       NoseY = results[0].pose.nose.y;
       console.log("NoseX = " + NoseX + "NoseY = " + NoseY);
       
       LeftWristX = results[0].pose.leftWrist.x;
       RightWristX = results[0].pose.rightWrist.x;
       Difference = floor(LeftWristX - RightWristX);
       console.log("LeftWristX = " + LeftWristX + "RightWristX = " + RightWristX + "Difference = " + Difference);


    }
}