nosex = -10;
nosey = 0;



function preload() {
img = loadImage ("https://i.postimg.cc/ZqFzHC79/download-removebg-preview-2.png")
}
//------------------------
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('poseNet Is Initialised');
   
}
function gotPoses(results) {
    if (results.length > 0);
    {
        console.log(results);
        nosex= results[0].pose.nose.x; 
        nosey=results[0].pose.nose.y;
    }
}
//------------------------
function draw() {
    image(video, 0, 0, 300, 300)
    image(img, nosex - 10, nosey + 20, 40, 40)

}
//-----------------------
//------------------------
function take_snapshot() {
    save('myPic.png');
}