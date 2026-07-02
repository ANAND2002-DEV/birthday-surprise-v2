/* ==========================================
   HAPPY BIRTHDAY LOVE ❤️
   VERSION 2
   PART 1
==========================================*/

// ---------------- ELEMENTS ----------------

const loadingScreen = document.getElementById("loadingScreen");
const coverPage = document.getElementById("coverPage");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");

const openBtn = document.getElementById("openBtn");

const musicControl = document.getElementById("musicControl");

const fadeSections = document.querySelectorAll(".fade-section");

// ---------------- LOADING ----------------

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 800);

    }, 1500);

});

// ---------------- START EXPERIENCE ----------------

function startExperience() {

    coverPage.style.display = "none";

    mainContent.style.display = "block";

    musicControl.style.display = "flex";

    bgMusic.play().catch(() => {});

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    showVisibleSections();

}

// ---------------- MUSIC BUTTON ----------------

let musicPlaying = true;

musicControl.addEventListener("click", () => {

    if (musicPlaying) {

        bgMusic.pause();

        musicControl.innerHTML = "🔇";

    } else {

        bgMusic.play();

        musicControl.innerHTML = "🔊";

    }

    musicPlaying = !musicPlaying;

});

// ---------------- FADE ANIMATION ----------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeSections.forEach(section => {

    observer.observe(section);

});

// ---------------- FIRST SHOW ----------------

function showVisibleSections(){

    fadeSections.forEach(section=>{

        const rect = section.getBoundingClientRect();

        if(rect.top < window.innerHeight){

            section.classList.add("show");

        }

    });

}

/* ==========================================
   PART 2
   RELATIONSHIP COUNTER
   ENVELOPE
   TYPEWRITER LETTER
==========================================*/

// ---------------- LIVE COUNTER ----------------

const startDate = new Date("2025-10-02T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    const difference = now - startDate;

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    daysEl.textContent = days;

    hoursEl.textContent =
        String(hours).padStart(2,"0");

    minutesEl.textContent =
        String(minutes).padStart(2,"0");

    secondsEl.textContent =
        String(seconds).padStart(2,"0");

}

updateCounter();

setInterval(updateCounter,1000);

// ---------------- LETTER ----------------

const openLetter =
document.getElementById("openLetter");

const loveLetter =
document.querySelector(".loveLetter");

const envelope =
document.querySelector(".letterIntro");

const typedLetter =
document.getElementById("typedLetter");

// Hide letter initially

loveLetter.style.display = "none";

// ---------------- OPEN LETTER ----------------

openLetter.addEventListener("click",()=>{

    envelope.style.display = "none";

    loveLetter.style.display = "block";

    loveLetter.scrollIntoView({

        behavior:"smooth"

    });

    startTyping();

});

// ---------------- TYPEWRITER ----------------

const paragraphs =
typedLetter.querySelectorAll("p");

paragraphs.forEach(p=>{

    p.dataset.original = p.innerHTML;

    p.innerHTML = "";

});

let currentParagraph = 0;

function startTyping(){

    typeParagraph();

}

function typeParagraph(){

    if(currentParagraph >= paragraphs.length){

        return;

    }

    const paragraph =
    paragraphs[currentParagraph];

    const text =
    paragraph.dataset.original;

    let index = 0;

    function typing(){

        if(index < text.length){

            paragraph.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing,25);

        }

        else{

            currentParagraph++;

            setTimeout(typeParagraph,300);

        }

    }

    typing();

}
/* ==========================================
   PART 3
   HEARTS
   POPUP
   CONFETTI
==========================================*/

// ---------------- HEARTS ----------------

const heartContainer =
document.getElementById("heartContainer");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (18 + Math.random()*18) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,1800);

// ---------------- FINAL POPUP ----------------

const popup =
document.getElementById("birthdayPopup");

const closePopup =
document.getElementById("closePopup");

const finalSection =
document.querySelector(".finalSection");

let popupShown = false;

const popupObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !popupShown){

            popupShown = true;

            setTimeout(()=>{

                popup.style.display = "flex";

                startConfetti();

            },3000);

        }

    });

},{
    threshold:.7
});

popupObserver.observe(finalSection);

closePopup.addEventListener("click",()=>{

    popup.style.display = "none";

});

// ---------------- CONFETTI ----------------

const confettiContainer =
document.getElementById("confettiContainer");

function startConfetti(){

    for(let i=0;i<120;i++){

        const piece =
        document.createElement("span");

        piece.style.position="absolute";

        piece.style.left=
        Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.width="8px";

        piece.style.height="14px";

        piece.style.background=
        `hsl(${Math.random()*360},100%,70%)`;

        piece.style.opacity=".9";

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        piece.style.animation=
        `confettiFall ${4+Math.random()*4}s linear forwards`;

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },8000);

    }

}

// ---------------- FINAL PHOTO ----------------

const finalPhoto =
document.querySelector(".finalPhoto");

const finalObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            finalPhoto.animate([

                {

                    transform:"scale(.92)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:1200,

                fill:"forwards"

            });

        }

    });

},{
    threshold:.5
});

finalObserver.observe(finalPhoto);

// ---------------- ENTRANCE ----------------

document.addEventListener("DOMContentLoaded",()=>{

    showVisibleSections();

});

/* ===============================
   GALLERY ANIMATION
================================ */

const galleryImages =
document.querySelectorAll(".galleryGrid img");

const galleryObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            galleryImages.forEach((img,index)=>{

                setTimeout(()=>{

                    img.classList.add("show");

                },index*180);

            });

        }

    });

},{
    threshold:.25
});

const gallery =
document.querySelector(".galleryGrid");

galleryObserver.observe(gallery);
// ---------------- END ----------------
