const timeStart = Date.now();
let firstTime = true;
window.onload = () => {

    const loadingTime = Date.now() - timeStart
    const loader = document.querySelector('.loader');


    if (firstTime && loader) {
        if (loadingTime > 2500) {     // if loaded faster then 2s
            loader.style.display = "none";
            bodyMain.classList.remove('lock');
            sessionStorage.setItem(firstTime, false);
        }
        else { 
            setTimeout(() => {
                loader.style.display = "none";
                bodyMain.classList.remove('lock');
                sessionStorage.setItem(firstTime, false);
            }, 2500);

        }
    }
    else {
        loader.style.display = "none";
        bodyMain.classList.remove('lock');
    }

}

var el1 = $('#white'), eyeBall1 = el1.find('div');
el1.show();
var x1 = el1.offset().left + 37, y1 = el1.offset().top + 25;
var r = 10, x, y, x2, y2, isEyeProcessed = false;


function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if (isTouchDevice() === true) {
    // alert('Touch Device'); //your logic for touch device

    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            eyeBall1.css({
                marginTop: 5 + 'px',
                transition: 0.7 + "s",
            });
        } else {
            eyeBall1.css({
                marginTop: -2 + 'px',
                transition: 0.2 + "s",
            });
        }
    }
}
else {
    // alert('Not a Touch Device'); //your logic for non touch device
    $('html').mousemove(function (e) {
        if (!isEyeProcessed) {
            isEyeProcessed = true;
            var x2 = e.pageX, y2 = e.pageY;
            y = ((r * (y2 - y1)) / Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))) + y1;
            x = (((y - y1) * (x2 - x1)) / (y2 - y1)) + x1;
            eyeBall1.css({
                marginTop: (y - y1 + 1) + 'px',
                marginLeft: (x - x1) + 'px'
            });
            isEyeProcessed = false;
        }
    });
}



function handleProjectClick() {
    const campaignLinks = document.querySelectorAll('.tile-link');

    campaignLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const project = e.target.closest('.tile-link')
            const name = project.dataset.name;
            showCampaignPage(name);
        })
    })
}

handleProjectClick();

function showCampaignPage(name) {
    sessionStorage.setItem('currentCampaign', name)
    console.log('settted')
    window.location.href = "projects/campaign.html"

    // campaignPage.style.display = 'block';
    // const body = document.querySelector('.body-main');
    // body.style.display = "none";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        bodyMain.classList.remove('lock');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var w = window.innerWidth;

function changeAnimationTime(width) {
    let animTime = width / 80 + "s";
    const chameleon = document.getElementById('chameleon');
    chameleon.style.animationDuration = animTime;
}


$(window).on('resize', function () {
    if ($(this).width() !== w) {
        w = $(this).width();
        changeAnimationTime(w);
    }
});
changeAnimationTime(w);

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('header-menu')[0]
const bodyMain = document.getElementsByClassName('body-main')[0]
const menuItems = document.getElementsByClassName('header-menu-link')

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('opened')
    toggleButton.classList.toggle('closeBtn')
    bodyMain.classList.toggle('lock')
    bodyMain.classList.toggle('color-animation')
    $(document).on('touchmove', function (e) {
        e.preventDefault();
    });

})

for (el of menuItems) {
    el.addEventListener("click", () => {
        toggleButton.classList.remove('closeBtn');
        menu.classList.remove('opened')
        bodyMain.classList.toggle('color-animation')
    });
}

