
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
    const videoUrl = document.querySelector('.campaign-video-src');

    name.innerText = campaign.name;
    format.innerText = campaign.format;
    services.innerText = campaign.services;
    description.innerText = campaign.description;
    url.setAttribute('href', campaign.url);
    videoUrl.setAttribute('src', campaign.videoUrl);
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
        videoUrl: "./assets/video/wyevale.mp4"

    },
    {
        name: "Adidas",
        format: "Desktop banner advertisement",
        services: "Design, build, animation",
        description: "Wyevale have made beautiful use of colour in their spring campaign with us. Plants grow across the screen, the campaign changes colour on scroll which gives control to the user, and the bees in the header wobble subtly to attract attention.",
        url: "https://qna.habr.com/q/498074",
        videoUrl: "./assets/video/wyevale.mp4"

    }
]