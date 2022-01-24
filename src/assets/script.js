window.onload = function(){
    var exists = document.getElementById("song");
    buttonAnimation();
    showFAQ();
    if(exists)
        playSong();
}

function playSong(){
    var song = document.getElementById("song");
    var icon = document.getElementById("volumeIcon");
    var playPromise = song.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
            song.pause();
            icon.onclick = function(){
                song.loop = true;
                if(song.paused){
                    song.play();
                    icon.src = "assets/images/volume-icon-pink.gif";
                }else{
                    song.pause();
                    icon.src = "assets/images/volume-icon-pink-mute.png";
                }
            }
        }).catch(error => {
        // Auto-play was prevented
        // Show paused UI.
            icon.onclick = function(){
                song.loop = true;
                if(song.paused){
                    song.play();
                    icon.src = "assets/images/volume-icon-pink.gif";
                }else{
                    song.pause();
                    icon.src = "assets/images/volume-icon-pink-mute.png";
                }
            }
        });
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