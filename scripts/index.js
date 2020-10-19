

var el1 = $('#white'), eyeBall1 = el1.find('div');
el1.show();
var x1 = el1.offset().left + 37, y1 = el1.offset().top + 25;
var r = 10, x, y, x2, y2, isEyeProcessed = false;
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

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var w = window.innerWidth;
console.log(w);

function changeAnimationTime(width) {
    let animTime = width / 80 + "s";
    const chameleon = document.getElementById('chameleon');
    console.log(chameleon);
    console.log(animTime);
    chameleon.style.animationDuration = animTime;
    console.log(chameleon.style);
}


$(window).on('resize', function () {
    if ($(this).width() !== w) {
        w = $(this).width();
        console.log(w);
        changeAnimationTime(w);
    }
});
changeAnimationTime(w);


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menu = document.getElementsByClassName('header-menu')[0]
const bodyMain = document.getElementsByClassName('body-main')[0]
const menuItems = document.getElementsByClassName('header-menu-link')
console.log(menuItems);
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('opened')
    toggleButton.classList.toggle('closeBtn')
    bodyMain.classList.toggle('overflow-fix')

})
// menuItems.forEach(function (elem) {
//     elem.addEventListener("click", function () {
//         console.log('clicked');
//     });
// });
// menuItems[0].addEventListener('click', function () {
//         // bodyMain.classList.remove('overflow-fix');
//         // menu.classList.remove('opened');
//         // toggleButton.classList.remove('closeBtn');
//         console.log('clicked');
// })


console.log(toggleButton)
console.log(menu)
