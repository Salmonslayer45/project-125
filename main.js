 function preload()
 {
 clown_nose = loadImage('https://i.postimg.cc/PJtH0Xz9/clown-nose.jpg');
 }

 noseY=0;
 noseX=0;
 

 function setup()
 {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function draw()
 {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
 }

 function take_snapshot()
 {
    save('myFilterImage.png');
 }

 function modelLoaded()
 {
   console.log('PoseNet is initialized');
 }

 function gotPoses(results)
 {
   if(results.length > 0)
   {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.Y;
      console.log(results);
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.x);
   }
 }