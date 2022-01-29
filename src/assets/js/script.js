window.onload = function(){
    var exists = document.getElementById("song");
    arrowAppear();
    buttonAnimation();
    showFAQ();
    showMenu();
    if(exists){
        playSong();
    }
    initMap();
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
                    icon.src = "../assets/images/volume-icon-pink-yellow.gif";
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
                    icon.src = "../assets/images/volume-icon-pink-yellow.gif";
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
            $('#arrowscroll img').attr('src', '../assets/images/arrow-icon.png');
            $('#arrowscroll').fadeOut();
        }
    });
}

function arrowScrollUp(){
    $("html, body").animate({
        scrollTop: 0
    }, 600);
}

function initMap() {
    var UTSA = { lat: 29.5827351, lng: -98.6188974 };

    var map = new google.maps.Map(document.getElementById("map"), {
        mapId: "994332be080ad6ed" ,
        center: UTSA,
        zoom: 15,
    });
    // const contentString =
    // '<div id="content">' +
    // '<div id="siteNotice">' +
    // "</div>" +
    // '<h1 id="firstHeading" class="firstHeading">UTSA</h1>' +
    // "</div>" +
    // "</div>";
    // const infowindow = new google.maps.InfoWindow({
    //     content: contentString,
    //     maxWidth: 200,
    // });

    // var marker = new google.maps.Marker({
    //     position: UTSA,
    //     map,
    //     title: "UTSA",
    // });

    // infowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    // });
    
}
