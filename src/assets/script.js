window.onload = function(){
    buttonAnimation();
    showFAQ();
    playSong();
}

function playSong(){
    var song = document.getElementById("song");
    var icon = document.getElementById("volumeIcon");

    icon.onclick = function(){
        song.loop = true;
        if(song.paused){
            song.play();
            icon.src = "../../assets/images/volume-icon-pink.gif";
        }else{
            song.pause();
            icon.src = "../../assets/images/volume-icon-pink-mute.png";
        }
    }
}

function buttonAnimation(){
    $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span><span></span></div>');
}

function showFAQ(){
    $('.show').click( function() {
        $(this).children(".arrows").toggleClass('arrow-down');
        $(this).next().slideToggle();
    });
}