window.onload = function(){
    var exists = document.getElementById("song");
    var mapExists = document.getElementById("map");
    var randomExists = document.getElementById("random");
    var mentorholder = document.getElementById("mentorsHolder");
    var partners = document.getElementById("partners");
    var eventTimes = document.getElementById("hacker-schedule");

    getCurrentPage();
    arrowAppear();
    buttonAnimation();
    showText();
    showMenu();

    if(mapExists){
        initMap();
    }

    if(randomExists){
        getMentorsHome();
    }

    if(mentorholder){
        getMentors();
    }

    if(exists){
        playSong();
    }

    if(partners) {
        getPartners();
    }

    if(eventTimes) {
        getSchedule();
    }
}

function playSong(){
    var song = document.getElementById("song");
    var icon = document.getElementById("volumeIcon");
    song.pause();
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

function showText(){
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
        var mentorLength = Object.keys(out).length;
        for(i = 0; i < 3; i++){
            var random = Math.floor(Math.random() * mentorLength);
            while (randomNumHolder.includes(random) === true){
                random = Math.floor(Math.random() * mentorLength);
            }
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
            var itemSpacing = document.createElement("div");
            var cyanBackground = document.createElement("div");
            var magentaBackground = document.createElement("div");
            var spacingDiv = document.createElement("div");
            var img = document.createElement("img");
            var header1A = document.createElement("h1");
            var header1B = document.createElement("h1");
            var paragraph = document.createElement("p");
            var alink = document.createElement("a");

            var FN = document.createTextNode(firstname);
            var LN = document.createTextNode(lastname);
            var titleText = document.createTextNode(title);
            var readMore = document.createTextNode("Read More");
            var nbs = document.createTextNode("\xa0");

            img.src = "../assets/images/mentors/"+mentorImage;
            alink.href = "/mentors/"+link;
            alink.className = "btn btn-magenta";
            innercontainer.className = "inner-container mentors";
            item1.className = "item";
            item2.className = "item";
            itemSpacing.className = "spacing";
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

            innercontainer.appendChild(itemSpacing);
            itemSpacing.appendChild(spacingDiv);
            spacingDiv.appendChild(nbs);

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


window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

function getMentors(){
    fetch('/assets/js/mentors.json').then(res => res.json()).then((out) => {
        var mentorLength = Object.keys(out).length;
        for(i = 0; i < mentorLength; i++){
            var description = out[i].Description;
            var title = out[i].Title;
            var proficient = out[i].Proficient;
            var firstname = out[i].FirstName;
            var lastname = out[i].LastName;
            var mentorImage = out[i].Image;
            var link = out[i].Link;
            var linkedInlink = out[i].LinkedIn;
            var twitterLink = out[i].Twitter;
            var instaLink = out[i].Instagram;

            link = link.slice(1);

            var divHolder = document.getElementById("mentorsHolder");
            var colPrimaryInnerContainer = document.createElement("div");
            var texture7op = document.createElement("div");
            var mentorLayout = document.createElement("div");
            var primaryItem = document.createElement("div");
            var innercontainer = document.createElement("div");
            var innercontainer2 = document.createElement("div");
            var item1 = document.createElement("div");
            var item2 = document.createElement("div");
            var item3 = document.createElement("div");
            var item4 = document.createElement("div");
            var item5 = document.createElement("div");
            var itemSpacing = document.createElement("div");
            var proficientDiv = document.createElement("div");
            var yellowBackground = document.createElement("div");
            var yellowBackground2 = document.createElement("div");
            var cyanBackground = document.createElement("div");
            var magentaBackground = document.createElement("div");
            var spacing = document.createElement("div");
            var social = document.createElement("div");

            var img = document.createElement("img");
            var header1A = document.createElement("h1");
            var header1B = document.createElement("h1");
            var header2A = document.createElement("h2");
            var header2B = document.createElement("h2");
            var paragraph = document.createElement("p");
            var paragraph2 = document.createElement("p");
            var anchor = document.createElement("a");
            var anchorLinkedIn = document.createElement("a");
            var anchorTwitter = document.createElement("a");
            var anchorInsta = document.createElement("a");
            var imgLinkedIn = document.createElement("img");
            var imgTwitter = document.createElement("img");
            var imgInsta = document.createElement("img");

            var FN = document.createTextNode(firstname);
            var LN = document.createTextNode(lastname);
            var descText = document.createTextNode(description);
            var profText = document.createTextNode("Proficient: " + proficient);
            var nbs = document.createTextNode("\xa0");
            var nbs2 = document.createTextNode("\xa0");

            img.src = "../assets/images/mentors/"+mentorImage;
            anchorLinkedIn.href = linkedInlink;
            anchorTwitter.href = twitterLink;
            anchorInsta.href = instaLink;
            imgLinkedIn.src = "../assets/images/linkedin-icon-y.png";
            imgTwitter.src = "../assets/images/twitter-icon-y.png";
            imgInsta.src = "../assets/images/instagram-icon-y.png";
            imgLinkedIn.setAttribute("onmouseover", "this.src='../assets/images/linkedin-icon-c.png';");
            imgLinkedIn.setAttribute("onmouseout", "this.src='../assets/images/linkedin-icon-y.png';");
            imgTwitter.setAttribute("onmouseover", "this.src='../assets/images/twitter-icon-c.png';");
            imgTwitter.setAttribute("onmouseout", "this.src='../assets/images/twitter-icon-y.png';");
            imgInsta.setAttribute("onmouseover", "this.src='../assets/images/instagram-icon-c.png';");
            imgInsta.setAttribute("onmouseout", "this.src='../assets/images/instagram-icon-y.png';");
            innercontainer.className = "inner-container mentors";
            innercontainer2.className = "inner-container mentors";
            item1.className = "item";
            item2.className = "item";
            item3.className = "item";
            item4.className = "item";
            item5.className = "item";
            itemSpacing.className = "spacing";
            social.className = "socials"

            proficientDiv.className = "proficient";
            spacing.className = "mentors-spacing";
            yellowBackground.className = "yellow-background";
            yellowBackground2.className = "yellow-background";
            cyanBackground.className = "cyan-background";
            magentaBackground.className = "magenta-background";
            colPrimaryInnerContainer.className = "col-primary-inner-container mentors";
            texture7op.className = "texture-7op";
            mentorLayout.className = "mentorLayout";
            primaryItem.className = "primary-item mentors";
            anchor.setAttribute("id", link);
            anchorLinkedIn.setAttribute("target", "_blank");
            anchorTwitter.setAttribute("target", "_blank");
            anchorInsta.setAttribute("target", "_blank");

            divHolder.appendChild(colPrimaryInnerContainer);
            colPrimaryInnerContainer.appendChild(anchor);
            colPrimaryInnerContainer.appendChild(texture7op);

            texture7op.appendChild(mentorLayout);
            mentorLayout.appendChild(img);
            mentorLayout.appendChild(primaryItem);
            primaryItem.appendChild(innercontainer);

            innercontainer.appendChild(item1);
            item1.appendChild(header1A);
            header1A.appendChild(cyanBackground);
            cyanBackground.appendChild(FN);

            innercontainer.appendChild(itemSpacing);
            // itemSpacing.appendChild(spacingDiv);
            // spacingDiv.appendChild(nbs);

            innercontainer.appendChild(item2);
            item2.appendChild(header1B);
            header1B.appendChild(magentaBackground);
            magentaBackground.appendChild(LN);

            var FL;
            var SL;
            switch(title){
                case 'Junior Mentor':
                    FL = document.createTextNode("Junior");
                    SL = document.createTextNode("Mentor");
                    
                    break;
                case 'Senior Student':
                    FL = document.createTextNode("Senior");
                    SL = document.createTextNode("Student");

                    break;
                case 'Software Engineer':
                    FL = document.createTextNode("Software");
                    SL = document.createTextNode("Engineer");

                    break;
                case 'iOS Developer':
                    FL = document.createTextNode("iOS");
                    SL = document.createTextNode("Developer");

                    break;
                case 'Android Developer':
                    FL = document.createTextNode("Android");
                    SL = document.createTextNode("Developer");

                    break;
                
                case 'Cybersecurity Specialist':
                    FL = document.createTextNode("Cybersecurity");
                    SL = document.createTextNode("Specialist");
    
                    break;

                case 'Cloud Engineer':
                    FL = document.createTextNode("Cloud");
                    SL = document.createTextNode("Engineer");
    
                    break;
                
                case 'Front-End Developer':
                    FL = document.createTextNode("Front-End");
                    SL = document.createTextNode("Developer");
    
                    break;
                default:
                    FL = document.createTextNode("Industry");
                    SL = document.createTextNode("Mentor");

            }
            primaryItem.appendChild(innercontainer2);
            innercontainer2.appendChild(item3);
            item3.appendChild(header2A);
            header2A.appendChild(yellowBackground);
            yellowBackground.appendChild(FL);

            innercontainer2.appendChild(item4);
            item4.appendChild(spacing);
            spacing.appendChild(nbs2);

            innercontainer2.appendChild(item5);
            item5.appendChild(header2B);
            header2B.appendChild(yellowBackground2);
            yellowBackground2.appendChild(SL);

            paragraph.appendChild(descText);
            primaryItem.appendChild(paragraph);

            if(proficient){
                primaryItem.appendChild(proficientDiv);
                proficientDiv.appendChild(paragraph2);
                paragraph2.appendChild(profText);
            }

            primaryItem.appendChild(social);
            if(linkedInlink){
                social.appendChild(anchorLinkedIn);
                anchorLinkedIn.appendChild(imgLinkedIn);
            }
            if(twitterLink){
                social.appendChild(anchorTwitter);
                anchorTwitter.appendChild(imgTwitter);
            }
            if(instaLink){
                social.appendChild(anchorInsta);
                anchorInsta.appendChild(imgInsta);
            }
        }
        var url = (document.URL);
        var mentorsAnchor = url.split("/")[3];
        if(mentorsAnchor != "mentors"){
            mentorsAnchor = mentorsAnchor.split("#")[1];
            var aTag = document.getElementById(mentorsAnchor);
            aTag.setAttribute("name", mentorsAnchor);
            aTag = $(aTag);
            var topAdjust = aTag.offset().top;
            console.log(topAdjust);
            topAdjust = mentorsAnchorPlace(topAdjust);
            console.log(topAdjust);
            $('html,body').animate({scrollTop: topAdjust},'slow');
        }
    }).catch(err => {
        throw err
    });
}

function getPartners() {
    fetch('/assets/js/partners.json').then(res => res.json()).then((out) => {
        // get length of json object
        const partnerLength = Object.keys(out).length;

        // sort partners
        var partnerPartner = [];
        var bronzePartner = [];
        var silverPartner = [];
        var goldPartner = [];
        var defaultPartner = [];
        for( i = 0; i < partnerLength; i++) {
            switch(out[i].tier) {
                case 'partner':
                    partnerPartner.push(out[i]);
                    break;
                case 'bronze':
                    bronzePartner.push(out[i]);
                    break;
                case 'silver':
                    silverPartner.push(out[i]);
                    break;
                case 'gold':
                    goldPartner.push(out[i]);
                    break;
                default:
                    defaultPartner.push(out[i]);
                    break;
            }
        }

        // combine partners back into one array
        const rhPartners = [ ...goldPartner, ...silverPartner, ...bronzePartner, ...partnerPartner, ...defaultPartner];

        for( i = 0; i < rhPartners.length; i++) {
            // fill json values
            var image = rhPartners[i].image;
            var partnerLink = rhPartners[i].partnerLink;
            var altText = rhPartners[i].altText;

            // create elements
            var partnerHolder = document.getElementById('partners');
            var colInner = document.createElement('div');
            var colTexture = document.createElement('div');
            var item = document.createElement('div');
            var link = document.createElement('a');
            var partnerImage = document.createElement('img');

            // populate created elements
            colInner.style, colTexture.style = "height: 200px; width: 100%; justify-content: center; align-items: center; display: flex;"
            colInner.className = "col-primary-inner-container partner-background";
            colTexture.className = "texture-3op";
            colTexture.title = altText;
            item.className = "primary-item";
            link.href = "https://" + partnerLink;
            link.target = "_blank";
            link.className = "partner-links";
            partnerImage.src = "../assets/images/partners/" + image;
            partnerImage.style = "max-height: 200px;"
            partnerImage.alt = altText + " Logo";

            // combine elemnts and return
            partnerHolder.appendChild(colInner);
            colInner.appendChild(colTexture);
            colTexture.appendChild(item);
            item.appendChild(link);
            link.appendChild(partnerImage);
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

function getSchedule() {
    // build hacker event schedule
    fetch('/assets/js/schedule.json').then(res => res.json()).then((out) => {
        // get element where schedule will live
        let hackerSchedule = document.getElementById('hacker-schedule');

        // populate saturday events
        populateSchedule(hackerSchedule, 'Saturday, March 26th', out['saturday']);

        // populate sunday events
        populateSchedule(hackerSchedule, 'Sunday, March 27th', out['sunday']);

        // add footer key
        let footerKey = document.createElement('div');
        let key = document.createElement('b');
        let sideEvent = document.createElement('b');
        let workshop = document.createElement('b');
        footerKey.className = "texture-7op grid-footer";
        key.textContent = "Key: ";
        key.className = "grid-footer-key";
        sideEvent.textContent = "Side Event, ";
        sideEvent.className = "grid-footer-sideEvent";
        workshop.textContent = "Workshop";
        workshop.className = "grid-footer-workshop";
        footerKey.appendChild(key);
        footerKey.appendChild(sideEvent);
        footerKey.appendChild(workshop);
        hackerSchedule.appendChild(footerKey);
    });
}

function populateSchedule(hackerSchedule, dayHeader, daySchedule) {    
    // create event day header
    let header = document.createElement('div');
    header.className = "texture-5op grid-title grid-title-date";
    header.textContent = dayHeader;
    hackerSchedule.appendChild(header);

    // populate all events after the header
    let defaultItemClasses = "texture-3op grid-item";
    for(const day of daySchedule) {
        let scheduleTime = document.createElement('div');
        let scheduleEvent = document.createElement('div');
        let scheduleLocation = document.createElement('div');

        scheduleTime.className = defaultItemClasses + " grid-item-time";
        scheduleTime.textContent = day.time;
        scheduleEvent.className = defaultItemClasses + " grid-item-event";
        if(day.type === "workshop") {
            scheduleEvent.className += " grid-type-workshop"
        }
        if(day.type === "sideEvent") {
            scheduleEvent.className += " grid-type-sideEvent";
        }
        scheduleEvent.textContent = day.event;
        scheduleLocation.className = defaultItemClasses + " grid-item-location";
        scheduleLocation.textContent = day.location;

        hackerSchedule.appendChild(scheduleTime);
        hackerSchedule.appendChild(scheduleEvent);
        hackerSchedule.appendChild(scheduleLocation);
    }
}

function mentorsAnchorPlace(topAdjust){
    var width = $(window).width();
    if(width < 430 && width > 377){
        if(topAdjust > 1000){ topAdjust = topAdjust + 260; }
        if(topAdjust > 1500){ topAdjust = topAdjust + 200; }
        if(topAdjust > 2000){ topAdjust = topAdjust + 200; }
        if(topAdjust > 2800){ topAdjust = topAdjust + 350; }
        if(topAdjust > 3800){ topAdjust = topAdjust + 350; }
        if(topAdjust > 4800){ topAdjust = topAdjust + 360; }
        if(topAdjust > 5500){ topAdjust = topAdjust + 360; }
        if(topAdjust > 6400){ topAdjust = topAdjust + 360; }
        if(topAdjust > 7000){ topAdjust = topAdjust + 360; }
        if(topAdjust > 7600){ topAdjust = topAdjust + 400; }
        if(topAdjust > 8500){ topAdjust = topAdjust + 400; }
        if(topAdjust > 9500){ topAdjust = topAdjust + 400; }
        if(topAdjust > 10000){ topAdjust = topAdjust + 300; }
        if(topAdjust > 11000){ topAdjust = topAdjust + 400; }
        if(topAdjust > 11800){ topAdjust = topAdjust + 300; }
        if(topAdjust > 12300){ topAdjust = topAdjust + 400; }
    }else if(width < 377){
        if(topAdjust > 1200){ topAdjust = topAdjust + 330; }
        if(topAdjust > 2000){ topAdjust = topAdjust + 330; }
        if(topAdjust > 2800){ topAdjust = topAdjust + 330; }
        if(topAdjust > 3800){ topAdjust = topAdjust + 360; }
        if(topAdjust > 4800){ topAdjust = topAdjust + 360; }
        if(topAdjust > 5900){ topAdjust = topAdjust + 340; }
        if(topAdjust > 6400){ topAdjust = topAdjust + 330; }
        if(topAdjust > 7000){ topAdjust = topAdjust + 330; }
        if(topAdjust > 7700){ topAdjust = topAdjust + 340; }
        if(topAdjust > 8500){ topAdjust = topAdjust + 350; }
        if(topAdjust > 9500){ topAdjust = topAdjust + 320; }
        if(topAdjust > 10300){ topAdjust = topAdjust + 320; }
        if(topAdjust > 10900){ topAdjust = topAdjust + 370; }
        if(topAdjust > 11800){ topAdjust = topAdjust + 300; }
        if(topAdjust > 12200){ topAdjust = topAdjust + 300; }
    }else if(width > 2000){
        if(topAdjust > 1500){ topAdjust = topAdjust + 125; }
        if(topAdjust > 2000){ topAdjust = topAdjust + 125; }
        if(topAdjust > 2700){ topAdjust = topAdjust + 125; }
        if(topAdjust > 3200){ topAdjust = topAdjust + 125; }
        if(topAdjust > 3800){ topAdjust = topAdjust + 200; }
        if(topAdjust > 4600){ topAdjust = topAdjust + 200; }
        if(topAdjust > 5000){ topAdjust = topAdjust + 200; }
        if(topAdjust > 5700){ topAdjust = topAdjust + 250; }
        if(topAdjust > 6200){ topAdjust = topAdjust + 200; }
        if(topAdjust > 7000){ topAdjust = topAdjust + 200; }
        if(topAdjust > 7600){ topAdjust = topAdjust + 225; }
        if(topAdjust > 8200){ topAdjust = topAdjust + 200; }
        if(topAdjust > 8800){ topAdjust = topAdjust + 200; }
        if(topAdjust > 9200){ topAdjust = topAdjust + 100; }
        if(topAdjust > 9500){ topAdjust = topAdjust + 200; }
    }else{
        if(topAdjust > 1500){ topAdjust = topAdjust + 125; }
        if(topAdjust > 2000){ topAdjust = topAdjust + 200; }
        if(topAdjust > 2500){ topAdjust = topAdjust + 150; }
        if(topAdjust > 3000){ topAdjust = topAdjust + 125; }
        if(topAdjust > 3500){ topAdjust = topAdjust + 300; }
        if(topAdjust > 4000){ topAdjust = topAdjust + 125; }
        if(topAdjust > 4500){ topAdjust = topAdjust + 125; }
        if(topAdjust > 5000){ topAdjust = topAdjust + 250; }
        if(topAdjust > 5500){ topAdjust = topAdjust + 250; }
        if(topAdjust > 6000){ topAdjust = topAdjust + 200; }
        if(topAdjust > 6500){ topAdjust = topAdjust + 150; }
        if(topAdjust > 7000){ topAdjust = topAdjust + 175; }
        if(topAdjust > 7500){ topAdjust = topAdjust + 250; }
        if(topAdjust > 8000){ topAdjust = topAdjust + 150; }
        if(topAdjust > 8500){ topAdjust = topAdjust + 250; }
        if(topAdjust > 9000){ topAdjust = topAdjust + 300; }
        if(topAdjust > 9500){ topAdjust = topAdjust + 300; }
    }
    return topAdjust;
}
