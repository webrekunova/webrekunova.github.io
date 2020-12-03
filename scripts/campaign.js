const hint = document.querySelector('.button-hint');
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
    description.innerHTML = campaign.description;
    //  videoUrl.setAttribute('src', campaign.videoUrl);
    // url.setAttribute('href', campaign.url);

    const videoNode = document.createElement('video');
    videoNode.setAttribute('autoplay', 'autoplay');
    videoNode.setAttribute('loop', true);
    videoNode.setAttribute('muted', 'muted');
    videoNode.setAttribute('playsinline', true);

    videoNode.classList = "campaign-video"
    videoNode.src = campaign.videoUrl
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

    {
        url.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                window.open(campaign.mob);
            }
            window.open(campaign.url);
        })
    }

}

if (window.innerWidth < 600) {
    hint.innerHTML = "*to see desktop version please use desktop device";
    console.log('ff')
}
else {
    hint.innerHTML = "*please turn off AdBlock";
    console.log(hint.innerHTML)
}

$(window).on('resize', function () {
    if (window.innerWidth < 600) {
        hint.innerHTML = "*to see desktop version please use desktop device";
        console.log('ff')
    }
    else {
        hint.innerHTML = "*please turn off AdBlock";
        console.log(hint.innerHTML)
    }
});


const campaigns = [
    {
        name: "wyevale",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "Wyevale garden centres used bright colors and beautiful flowers in their Spring campaign.  To emphasize the main message 'Spring has sprung' I made the plants grow across the screen. By changing copy along with background on scroll we give users control and make the campaign more alive and interactive.",
        url: "https://insk.in/v218t6",
        mob: "https://insk.in/db960y",

        videoUrl: "../assets/video/wyevale.mp4"

    },
    {
        name: "very",
        format: "Responsive rich media advert with multiple messaging features",
        services: "Design, build, animation",
        description: "Clean & simple design that allows user to focus on the selected toys. With a nice touch of matching animation that makes advert more playful.",
        url: "https://insk.in/y68991",
        mob: "https://insk.in/vck27e",
        videoUrl: "../assets/video/very.mp4"

    },
    {
        name: "adidas",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "Inspired by assets Adidas shared I wanted to make the campaign look dynamic and filled with energy that this new running shoe represents.</br> On the left, we can see an animation that replicates their commercial video, shows the variety of products and includes many tiny animated pieces. By putting a pattern that illustrates sole of new Ultra Boost 20 sneakers on the right and adding constantly moving cosmic background I made the advert look bold and complete.",
        url: "https://insk.in/clnv7l",
        mob: "https://insk.in/610512",
        videoUrl: "../assets/video/adidas.mp4"

    },
    {
        name: "fitbit",
        format: "Shoppable rich media advert",
        services: "Design, build, animation",
        description: "A shoppable advert that allows us to focus on 4 main products. The slider on the right allows a user to switch between watches and works when the user scrolls the page. On the left, we can receive additional information about color variations and prices. I included other small details as a hover effect on call to action button and watches, the smooth appearance of colors, shine and Christmas decor to make the ad interactive and magical.",
        url: "https://insk.in/o1yt42",
        mob: "https://insk.in/0m73h8",
        videoUrl: "../assets/video/fitbit.mp4"

    },
    {
        name: "jbl",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "Bright, funky  & full of energy that never stops. That's  how I wanted this creative to look like. That's why my goal was to handle video footage in a way it matches animation and could be added to the advertisement. I believe, that by replaying them when a user scrolls  I have emphasized the power and advantages of wireless headphones.",
        url: "https://insk.in/dkkagb",
        mob: "https://insk.in/60i7l1",
        videoUrl: "../assets/video/jbl.mp4"

    },
    {
        name: "honda",
        format: "Responsive rich media advert with multiple messaging features",
        services: "Design, build, animation",
        description: `A solid design that represents the main motto of the campaign "Two races one heartbeat".  Sport cars on the left are following with corresponding video teasers. Users may click through them and watch a full version of each one. On the right - the classic cars with their main features. The animating beam across the creative and flashing headlights work to bring users' attention. Navigation buttons help users to toggle between products easily.`,
        url: "https://insk.in/6of7et",
        mob: "https://insk.in/r8hbit",
        videoUrl: "../assets/video/honda.mp4"

    },
    {
        name: "dune",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: `Torn out  from the images clothes illustrate the idea of the campaign. The ripping line at the top stylizes the rest of the ad, thus split it into 2 sides. Nevertheless, I tried to make products and colors match across sides to emphasize the fashionable assets with which I've been provided. Implementing a brand "writing" animation as a sprite sheet helped me to guide user attention to promoted accessories and shoes.`,
        url: "https://insk.in/ktvjsy",
        mob: "https://insk.in/8m107b",
        videoUrl: "../assets/video/dune.mp4"

    },
    {
        name: "disney",
        format: "Dekstop rich media advert",
        services: "Design, build, animation",
        description: "A playful, colorful, family creative with an animation that surely attracts your attention. Heroes animate within film frames as in the classic old Disney movies. Frames are moving when a user scrolls and the animation trend depends on scroll direction.",
        url: "https://insk.in/xs735l",
        mob: "https://insk.in/o3y543",
        videoUrl: "../assets/video/disney.mp4"

    },
    {
        name: "nature's bounty",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "This creative is a good example of how small touch of animation can create a powerful presentation of the product. While constantly falling & levitating gummies attract attention, the video on the left helps users to receive more information about the product and its features.",
        url: "https://insk.in/44hgw0",
        mob: "https://insk.in/02kik4",
        videoUrl: "../assets/video/natures.mp4"

    },
    {
        name: "boursin",
        format: "Responsive rich media advert",
        services: "Build, animation",
        description: "A beautiful layout that Boursin shared could only be complemented with a nice animation. And that's what I did. Two hands moving towards each other highlight the joy of sharing the cooking process. Dipping, smoothing and crumbling animations emphasize the variety  of serving, tastes and recipes which users might achieve with buying these products.",
        url: "https://insk.in/9015a7",
        mob: "https://insk.in/6f34qu",
        videoUrl: "../assets/video/boursin.mp4"

    },
    {
        name: "glyndebourne",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "A trick with this campaign was in finding a proper composition for illustration. So it could be visible  for all resolution despite the fact that ad is not responsive. The animation of revealing beautiful graphic elements from the main building shows how music and joy are spreading from Glyndebourne's opera house. In conclusion, I make singing mouths highlight one by one when a user scrolls down the page.",
        url: "https://insk.in/xb0tbx",
        mob: "https://insk.in/ko4rew",
        videoUrl: "../assets/video/glyndebourne.mp4"

    },
    {
        name: "simple",
        format: "Desktop rich media advert",
        services: "Design, build, animation",
        description: "The design is based on a comic style poster that Simple shared with us. I struggled to make a well-balanced composition that not only fits the safe area but also tells us a story and promotes the product. With user tendencies to look from left to right, on the header scene I guided the story the same way. When the user scrolls further I put the product on the left so it's always in view.  Meanwhile, the right side is animating to inspire a user to an action.",
        url: "https://insk.in/59xm89",
        mob: "https://insk.in/j16z1t",
        videoUrl: "../assets/video/simple.mp4"

    },
    {
        name: "oral-b",
        format: "Responsive rich media advert",
        services: "Design, build, animation",
        description: "In this campaign, I wanted to focus on powerful graphics that Oral-B presented in their commercial. By making sides swap on the scroll we give control to users and attract their attention. While the video is playing on one side the toothpaste is always visible on another. This allows us to receive sufficient focus on the promoting product. Creative is complete with small secondary animation, hover & logo flashes.",
        url: "https://insk.in/v8f791",
        mob: "https://insk.in/48lbr4",
        videoUrl: "../assets/video/oralb.mp4"

    },
    {
        name: "ugg",
        format: "Shoppable media advert",
        services: "Design, build, animation",
        description: "A shoppable skin for women shoes, that gives a user an ability to choose a colour and switch between products. With simple and non-intrusive texture, good matching images and its asymmetrical but well-balanced design this campaign looks stylish and smart. And that's the goal.",
        url: "https://insk.in/9f3ev6",
        mob: "https://insk.in/69ubv0",
        videoUrl: "../assets/video/ugg.mp4"

    },
    {
        name: "carolina herrera",
        format: "Responsive rich media advert with multiple messaging features",
        services: "Design, build, animation",
        description: "This luxurious campaign for women's perfume is  an example of a good selection of colours and matching full-width video animation on the top. When a user starts to scroll down a full variety of fragrances reveals. The shining gold behind the bottle adds a magical effect to highlight the product.",
        url: "https://insk.in/tu47qk",
        mob: "https://insk.in/5ji3d8",
        videoUrl: "../assets/video/goodgirl.mp4"

    },
]
