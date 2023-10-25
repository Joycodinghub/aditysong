const button = $("button");
var audio;
button.on("click",toggleMusic);
button.on("click",changeText);
var isPlaying = false;
var isText = false;
function toggleMusic(){
    if(isPlaying){
        
        audio.pause();
        isPlaying=false;
    }
    else{
        audio = new Audio("happy-bday-full-song-abcd-2-varun-dhawan-shraddha-kapoor-sachin-jigar-d_SkkoX771.mp3");
        audio.play();
       
        isPlaying = true;
    }
    
}

function changeText(){
    if(isText){
    button.text("PLAY");
    isText=false;
    }
    else{
        button.text("PAUSE");
        isText=true;
    }

} 

