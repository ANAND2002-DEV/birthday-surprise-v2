/* ==========================================
   HAPPY BIRTHDAY LOVE ❤️
   VERSION 3
   PART 1
==========================================*/

/* ---------- ELEMENTS ---------- */

const coverPage = document.getElementById("coverPage");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");

const openBtn = document.getElementById("openBtn");

const musicControl = document.getElementById("musicControl");

const fadeSections =
document.querySelectorAll(".fade-section");

/* ---------- INITIAL ---------- */

mainContent.style.display = "none";

musicControl.style.display = "none";

/* ---------- START EXPERIENCE ---------- */

function startExperience(){

    bgMusic.play().catch(()=>{});

    musicControl.style.display = "flex";

    coverPage.style.transition =
    "opacity .8s ease";

    coverPage.style.opacity = "0";

    setTimeout(()=>{

        coverPage.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo(0,0);

        showVisibleSections();

       websiteOpened = true;

    },800);

}

/* ---------- MUSIC CONTROL ---------- */

let musicPlaying = true;

musicControl.addEventListener("click",()=>{

    if(musicPlaying){

        bgMusic.pause();

        musicControl.innerHTML = "🔇";

    }

    else{

        bgMusic.play();

        musicControl.innerHTML = "🔊";

    }

    musicPlaying = !musicPlaying;

});

/* ---------- FADE ANIMATION ---------- */

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

fadeSections.forEach(section=>{

    observer.observe(section);

});

function showVisibleSections(){

    fadeSections.forEach(section=>{

        const rect =
        section.getBoundingClientRect();

        if(rect.top < window.innerHeight){

            section.classList.add("show");

        }

    });

}

/* ---------- END PART 1 ---------- */
/* ==========================================
   HAPPY BIRTHDAY LOVE ❤️
   VERSION 3
   PART 2
==========================================*/

/* ---------- RELATIONSHIP COUNTER ---------- */

const startDate = new Date("2025-10-02T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

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

/* ---------- LETTER ---------- */

const envelope =
document.querySelector(".letterIntro");

const loveLetter =
document.querySelector(".loveLetter");

const openLetter =
document.getElementById("openLetter");

const closeLetter =
document.getElementById("closeLetter");

loveLetter.style.display = "none";


/* ---------- OPEN LETTER ---------- */

openLetter.addEventListener("click",()=>{

    envelope.style.transition = ".6s";

    envelope.style.opacity = "0";

    envelope.style.transform = "scale(.95)";

    setTimeout(()=>{

        envelope.style.display = "none";

        loveLetter.style.display = "block";

        loveLetter.classList.add("show");

        loveLetter.scrollIntoView({

            behavior:"smooth"

        });

    },600);

});

closeLetter.addEventListener("click",()=>{

    loveLetter.style.display = "none";

    loveLetter.classList.remove("show");

    envelope.style.display = "block";

    envelope.style.opacity = "1";

    envelope.style.transform = "scale(1)";

    envelope.scrollIntoView({
        behavior:"smooth"
    });

});

/* ---------- END PART 2 ---------- */
/* ==========================================
   HAPPY BIRTHDAY LOVE ❤️
   VERSION 3
   PART 3
==========================================*/

/* ---------- GALLERY ANIMATION ---------- */

const gallery =
document.querySelector(".galleryGrid");

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

            galleryObserver.unobserve(gallery);

        }

    });

},{
    threshold:.25
});

galleryObserver.observe(gallery);

/* ---------- FLOATING HEARTS ---------- */

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
    (18 + Math.random()*14) + "px";

    heart.style.animationDuration =
    (8 + Math.random()*3) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,2500);

/* ---------- FINAL PHOTO ---------- */

const finalPhoto =
document.querySelector(".finalPhoto");

const finalPhotoObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            finalPhoto.animate([

                {

                    transform:"scale(.94)"

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

finalPhotoObserver.observe(finalPhoto);

/* ---------- POPUP ---------- */

const popup = document.getElementById("birthdayPopup");
const closePopup = document.getElementById("closePopup");
const ending = finalPhoto;

let popupShown = false;
let websiteOpened = false;

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

window.addEventListener("scroll", () => {

    if (!websiteOpened || popupShown) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {

        popupShown = true;
        popup.style.display = "flex";
        startConfetti();

    }

});

/* ---------- CONFETTI ---------- */

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
        `confettiFall ${4+Math.random()*3}s linear forwards`;

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },8000);

    }

}

/* ---------- INITIAL SHOW ---------- */

document.addEventListener("DOMContentLoaded",()=>{

    showVisibleSections();

});
openBtn.addEventListener("click", startExperience);
/* ---------- END ---------- */
