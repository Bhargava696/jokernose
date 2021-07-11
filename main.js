x = 0;
y = 0;

function preload() {
    images = loadImage("https://i.postimg.cc/XvLPbMHZ/Clown-Nose-PNG-High-Quality-Image.png");
}

function setup() {
    sion = createCanvas(400, 300);
    sion.center();
    fioer = createCapture(VIDEO);
    fioer.size(400, 300);
    fioer.hide();
    cow = ml5.poseNet(fioer, modelLoaded);
    cow.on("pose", gotPoses);
}

function draw() {
    image(fioer, 0, 0, 400, 300);
    image(images, x, y, 35,35);
}

function soil() {
    save("image.png");
}

function modelLoaded() {
    console.log("Model is loaded")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x-15;
        y = results[0].pose.nose.y-15;
        console.log("x = " + x);
        console.log("y = " + y);
    }
}