window.onload = function(){
    var exists = document.getElementById("song");
    var mapExists = document.getElementById("map");
    var randomExists = document.getElementById("random");
    var mentorholder = document.getElementById("mentorsHolder");

    arrowAppear();
    buttonAnimation();
    showFAQ();
    showMenu();

    if(exists){
        playSong();
    }

    if(mapExists){
        initMap();
    }

    if(randomExists){
        getMentorsHome();
    }

    if(mentorholder){
        getMentors();
    }

    getCurrentPage();
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
        $('#banner').toggleClass("banner-adjust");

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
    var UTSA = { lat: 29.5829, lng: -98.62015 };

    var map = new google.maps.Map(document.getElementById("map"), {
        mapId: "994332be080ad6ed" ,
        center: UTSA,
        zoom: 15,
    });
    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading" style="text-align: left; font-size:0.9rem;line-height:1.1rem;">UTSA <br/> Student Union</h1>' +
    '<p style="text-align:left; font-size: .9rem; line-height:1rem; color: black; text-shadow:none">H-E-B University Center <br/> 1 UTSA Circle <br/>San Antonio, TX 78249</p>' +
    '<a style="font-size:.8rem;color:#fa448c;" href="https://www.google.com/maps?ll=29.582842,-98.620139&z=19&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=17592173578294516198" target="_blank">View on Google Maps</a>' +
    "</div>" +
    "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
    });

    var marker = new google.maps.Marker({
        position: UTSA,
        map,
        title: "UTSA",
    });

    function displayInfo(){
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    }

    displayInfo();
    marker.addListener("click", () => {
        displayInfo();
    });
    
}

function getMentorsHome(){
    fetch('/assets/js/mentors.json')
    .then(res => res.json())
    .then((out) => {
        var randomNumHolder = [];
        for(i = 0; i < 3; i++){
            var random = Math.floor(Math.random() * 6);
            randomNumHolder.forEach(function(randomNum){
                while(random == randomNum){
                    random = Math.floor(Math.random() * 6);
                }
            })
            randomNumHolder.push(random);
            var link = out[random].Link;
            var firstname = out[random].FirstName;
            var lastname = out[random].LastName;
            var title = out[random].Title;
            var mentorImage = out[random].Image;

            var divHolder = document.getElementById("random");
            var colPrimaryInnerContainer = document.createElement("div");
            var texture7op = document.createElement("div");
            var primaryItem = document.createElement("div");
            var innercontainer = document.createElement("div");
            var item1 = document.createElement("div");
            var item2 = document.createElement("div");
            var cyanBackground = document.createElement("div");
            var magentaBackground = document.createElement("div");
            var img = document.createElement("img");
            var header1A = document.createElement("h1");
            var header1B = document.createElement("h1");
            var paragraph = document.createElement("p");
            var alink = document.createElement("a");

            var FN = document.createTextNode(firstname);
            var LN = document.createTextNode(lastname);
            var titleText = document.createTextNode(title);
            var readMore = document.createTextNode("Read More");

            img.src = "../assets/images/mentors/"+mentorImage;
            alink.href = "/mentors/"+link;
            alink.className = "btn btn-magenta";
            innercontainer.className = "inner-container mentors";
            item1.className = "item";
            item2.className = "item";
            cyanBackground.className = "cyan-background";
            magentaBackground.className = "magenta-background";
            colPrimaryInnerContainer.className = "col-primary-inner-container callouts";
            texture7op.className = "texture-7op";
            primaryItem.className = "primary-item";

            divHolder.appendChild(colPrimaryInnerContainer);
            colPrimaryInnerContainer.appendChild(texture7op);
            texture7op.appendChild(primaryItem);
            primaryItem.appendChild(img);
            primaryItem.appendChild(innercontainer);
            innercontainer.appendChild(item1);
            item1.appendChild(header1A);
            header1A.appendChild(cyanBackground);
            cyanBackground.appendChild(FN);

            innercontainer.appendChild(item2);
            item2.appendChild(header1B);
            header1B.appendChild(magentaBackground);
            magentaBackground.appendChild(LN);

            primaryItem.appendChild(paragraph);
            paragraph.appendChild(titleText);

            primaryItem.appendChild(alink);
            $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span><span></span></div>');
            alink.appendChild(readMore);
        }
    })
    .catch(err => {
        throw err
    });
}

function getMentors(){
    fetch('/assets/js/mentors.json').then(res => res.json()).then((out) => {
        for(i = 0; i <= 5; i++){
            var description = out[i].Description;
            var firstname = out[i].FirstName;
            var lastname = out[i].LastName;
            var title = out[i].Title;
            var mentorImage = out[i].Image;

            var divHolder = document.getElementById("mentorsHolder");
            var colPrimaryInnerContainer = document.createElement("div");
            var texture7op = document.createElement("div");
            var primaryItem = document.createElement("div");
            var innercontainer = document.createElement("div");
            var innercontainer2 = document.createElement("div");
            var item1 = document.createElement("div");
            var item2 = document.createElement("div");
            var item3 = document.createElement("div");
            var item4 = document.createElement("div");
            var item5 = document.createElement("div");
            var yellowBackground = document.createElement("div");
            var yellowBackground2 = document.createElement("div");
            var cyanBackground = document.createElement("div");
            var magentaBackground = document.createElement("div");
            var spacing = document.createElement("div");
            var img = document.createElement("img");
            var header1A = document.createElement("h1");
            var header1B = document.createElement("h1");
            var header2A = document.createElement("h2");
            var header2B = document.createElement("h2");
            var paragraph = document.createElement("p");

            var FN = document.createTextNode(firstname);
            var LN = document.createTextNode(lastname);
            var titleText = document.createTextNode(title);
            var descText = document.createTextNode(description);
            var FL = document.createTextNode("Software");
            var SL = document.createTextNode("Engineer");
            var nbs = document.createTextNode("\xa0");

            img.src = "../assets/images/mentors/"+mentorImage;
            innercontainer.className = "inner-container mentors";
            innercontainer2.className = "inner-container mentors";
            item1.className = "item";
            item2.className = "item";
            item3.className = "item";
            item4.className = "item";
            item5.className = "item";
            spacing.className = "mentors-spacing";
            yellowBackground.className = "yellow-background";
            yellowBackground2.className = "yellow-background";
            cyanBackground.className = "cyan-background";
            magentaBackground.className = "magenta-background";
            colPrimaryInnerContainer.className = "col-primary-inner-container mentors";
            texture7op.className = "texture-7op";
            primaryItem.className = "primary-item mentors";

            divHolder.appendChild(colPrimaryInnerContainer);
            colPrimaryInnerContainer.appendChild(texture7op);
            texture7op.appendChild(primaryItem);
            primaryItem.appendChild(img);
            primaryItem.appendChild(innercontainer);

            innercontainer.appendChild(item1);
            item1.appendChild(header1A);
            header1A.appendChild(cyanBackground);
            cyanBackground.appendChild(FN);

            innercontainer.appendChild(item2);
            item2.appendChild(header1B);
            header1B.appendChild(magentaBackground);
            magentaBackground.appendChild(LN);

            // software engineer
            if(description = "Software Engineer"){
                primaryItem.appendChild(innercontainer2);

                innercontainer2.appendChild(item3);
                item3.appendChild(header2A);
                header2A.appendChild(yellowBackground);
                yellowBackground.appendChild(FL);

                innercontainer2.appendChild(item4);
                item4.appendChild(spacing);
                spacing.appendChild(nbs);

                innercontainer2.appendChild(item5);
                item5.appendChild(header2B);
                header2B.appendChild(yellowBackground2);
                yellowBackground2.appendChild(SL);

                paragraph.appendChild(descText);
                primaryItem.appendChild(paragraph);
            }

        }
    }).catch(err => {
        throw err
    });
}

function getCurrentPage(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
}
