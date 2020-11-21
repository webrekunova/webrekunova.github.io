
document.addEventListener('DOMContentLoaded', () => {
    const name = sessionStorage.getItem('currentCampaign')
    const campaign = campaigns.find(x => x.name === name);
    renderCampaign(campaign);
})

function renderCampaign(campaign) {
    const name = document.querySelector('.name-value');
    const format = document.querySelector('.format-value');
    const services = document.querySelector('.services-value');
    const description = document.querySelector('.campaign-description');
    const url = document.querySelector('.campaign-button-link');
//    const videoUrl = document.querySelector('.campaign-video-src');
    const pcLink = document.querySelector('.campaign-preview-link');

    name.innerText = campaign.name;
    format.innerText = campaign.format;
    services.innerText = campaign.services;
    description.innerText = campaign.description;
  //  videoUrl.setAttribute('src', campaign.videoUrl);
    // url.setAttribute('href', campaign.url);
    
    const videoNode = document.createElement('video');
    videoNode.setAttribute('autoplay', 'autoplay');
    videoNode.setAttribute('loop', true);
    videoNode.setAttribute('muted', 'muted');
    videoNode.setAttribute('playsinline', true);
    
    videoNode.classList = "campaign-video"
    videoNode.src= campaign.videoUrl
    const container = document.querySelector('.campaign-preview')
    container.appendChild(videoNode)
        // < video autoplay loop muted = "muted" playsinline class="campaign-video" >
        //     <source class="campaign-video-src" src="">
        // </>
    const video = document.querySelector('.campaign-video')
    video.play();

    pcLink.addEventListener('click', () => {
        window.open(campaign.url);
    })

    url.addEventListener('click', () => {
        window.open(campaign.url);
    })

}

const campaigns = [
    {
        name: "wyevale",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",

        videoUrl: "../assets/video/wyevale.mp4"

    },
    {
        name: "very",
        format: "Responsive rich media advert with multiple messaging features",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/very.mp4"

    },
    {
        name: "adidas",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://insk.in/clnv7l",
        videoUrl: "../assets/video/adidas.mp4"

    },
    {
        name: "fitbit",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/fitbit.mp4"

    },
    {
        name: "adobe",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/adobe.mp4"

    },
    {
        name: "honda",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/honda.mp4"

    },
    {
        name: "dune",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/dune.mp4"

    },
    {
        name: "disney",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/disney.mp4"

    },
    {
        name: "nature's bounty",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/natures.mp4"

    },
    {
        name: "boursin",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/boursin.mp4"

    },
    {
        name: "glyndebourne",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/glyndebourne.mp4"

    },
    {
        name: "simple",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/simple.mp4"

    },
    {
        name: "oral-b",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/oralb.mp4"

    },
    {
        name: "ugg",
        format: "Shoppable media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/ugg.mp4"

    },
    {
        name: "marriott bonvoy",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "../assets/video/mariott.mp4"

    },
]