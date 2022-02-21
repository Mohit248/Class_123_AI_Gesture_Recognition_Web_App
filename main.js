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
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}