const pointer = document.getElementById('pointer_tv')
const playerControls = document.querySelector('.controls')
const video = document.querySelector('.tv-wr')
const windowHeight = window.innerHeight
const container = document.querySelector('.body-after');
const remoteHeight = pointer.getBoundingClientRect().height
const saveBottomArea = windowHeight - remoteHeight;

window.addEventListener('mousemove', function (ev) {
    const X = ev.pageX;
    let Y
    if (ev.pageY > saveBottomArea) {
        Y = saveBottomArea
    }
    else {
        Y = ev.pageY
    }
    movePointerTV(X, Y)
});


function movePointerTV(x, y) {
    pointer.style.left = (x - 110) + 'px';
    pointer.style.top = (y - 30) + 'px';

}
playerControls.addEventListener('mouseover', function (ev) {
    playerControls.style.opacity = 1
})
playerControls.addEventListener('mouseout', function (ev) {
    playerControls.style.opacity = 0
})

// let videoElem = document.getElementById("video");
// let playButton = document.getElementById("playbutton");

playerControls.addEventListener("click", () => playVideo());


function playVideo() {
    document.getElementsByClassName('demo-reel')[0].play();
    playerControls.style.opacity="0"
}

