const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Update dot position
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    // Update outline position with a tiny delay for a "fluid" feel
    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
// This makes your project cards slide in from the bottom as you scroll to them
gsap.from(".project-card", {
    scrollTrigger: ".project-card", 
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3 // Each card follows the other with a delay
});
const btn = document.querySelector('.project-btn');

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Moves the button slightly toward the mouse (0.3 is the intensity)
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0px, 0px)`;
});
async function getGitHubStats() {
    const response = await fetch('https://api.github.com/users/biswanath56');
    const data = await response.json();
    document.getElementById('repo-count').innerText = data.public_repos + " Projects Live";
}
getGitHubStats();