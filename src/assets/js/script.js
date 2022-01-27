window.onload = function(){
    var exists = document.getElementById("song");
    buttonAnimation();
    showFAQ();
    showMenu();
    arrowAppear();
    arrowScrollUp();
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
            song.muted = true;
            icon.onclick = function(){
                if(song.muted){
                    song.muted = false;
                    icon.src = "../assets/images/volume-icon-pink.gif";
                }else{
                    song.muted = true;
                    icon.src = "../assets/images/volume-icon-pink-mute.png";
                }
            }
        }).catch(error => {
        // Auto-play was prevented
        // Show paused UI.
            song.muted = true;
            icon.onclick = function(){
                song.play();
                if(song.muted){
                    song.muted = false;
                    icon.src = "../assets/images/volume-icon-pink.gif";
                }else{
                    song.muted = true;
                    icon.src = "../assets/images/volume-icon-pink-mute.png";
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

function showMenu() {
    $('.icon').click(function(){
        $('body').toggleClass('full-menu');
        $('#mytopnav').toggleClass('full-menu');
        $('.top').toggleClass('full-menu');
        $('.nav-top').toggleClass('responsive');
        $('#logo-img').toggleClass('img-adj');
        $('#xmenu').toggleClass('menu-show');
        $('#noxmenu').toggleClass('menu-hide');
    });
}

function arrowAppear(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#arrowscroll').fadeIn();
        } else {
            $('#arrowscroll').fadeOut();
        }
    });
}

function arrowScrollUp(){
    $('#arrowscroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
}