

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
    const campaignPage = document.querySelector('.body-campaign')
    const campaign = campaigns.find(x => x.name === name);
    renderCampaign(campaign);
    campaignPage.style.display = 'block';

    // const body = document.getElementsByTagName(body);
    // console.log(body);
    // body.style.overflowY = "hidden";

}


function renderCampaign(campaign) {
    const name = document.querySelector('.name-value');
    const format = document.querySelector('.format-value');
    const services = document.querySelector('.services-value');
    const description = document.querySelector('.campaign-description');
    const url = document.querySelector('.campaign-button-link');
    const videoUrl = document.querySelector('.campaign-video-src');

    name.innerText = campaign.name;
    format.innerText = campaign.format;
    services.innerText = campaign.services;
    description.innerText = campaign.description;
    url.setAttribute('href', campaign.url);
    videoUrl.setAttribute('href', campaign.videoUrl);
}

const campaigns = [
    {
        name: "wyevale",
        format: "Desktop banner advertisement",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/wyevale.mp4"

    },
    {
        name: "Dune",
        format: "Desktop banner advertisement",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/wyevale.mp4"

    },
    {
        name: "Adidas",
        format: "Desktop banner advertisement",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/wyevale.mp4"

    }
]