function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture();
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g5yX5rkjA/model.json",modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,getResult);
}

function modelLoaded(){
    console.log("model is loaded")
}

function getResult(error,results){
    if(error){
        console.log( "error");
    }
    else
    {
        console.log(results);
        document.getElementById("person_name").innerHTML-results[0].label;
        document.getElementById("acurracy").innerHTML=results[0].confidence.toFixed(3);
    }
}