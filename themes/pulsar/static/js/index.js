// Skill Section
const progressBars = document.querySelectorAll(".progress-bar")
const descriptions = document.querySelectorAll(".skill-description")
const benchmarkButton = document.querySelector("#start-benchmark")


function setProgress() {
    let delay = 0;

    for (const key in progressBars) {
        if (progressBars.hasOwnProperty(key)) {
            const progressBar = progressBars[key];
            const value = progressBar.getAttribute("value")
            if (progressBar.style.width === "0%") {
                setTimeout(() => {
                    progressBar.style.width = `${value}%`
                }, 300 + delay);
                delay += 300;
                benchmarkButton.innerHTML = 'Reset Benchmark<i class="fas fa-sync-alt ml-2 spin"></i>'
            } else {
                progressBar.style.width = "0%"
                benchmarkButton.innerHTML = 'Start Benchmark<i class="fas fa-play-circle ml-2"></i>'
            }
        }
    }
}


const summaryInfo = document.querySelector(".summarydd")

// Scrolling Sections Elements
const sectionSkills = document.querySelector(".section-skills")
const sectionCareer = document.querySelector(".section-career")


// console.log(sectionSkills.scrollHeight, sectionSkills.scroll)

function smoothScrolling() {
    // Scroll Into View Skills
    sectionSkills.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
    // Launching Progress
    setProgress()
}




// window.addEventListener('scroll', function () {
//     let scroll = window.scrollY
//     if (scroll <= 0) {
//         summaryInfo.innerHTML = `Introduction`
//         summaryInfo.style.color = "red"
//     } else if (scroll >= 460) {
//         summaryInfo.innerHTML = "Skills"
//         summaryInfo.style.color = "#fff"

//     } else if (scroll >= 650) {
//         summaryInfo.innerHTML = "Career"
//     } else {
//         summaryInfo.innerHTML = `Career`

//     }
// });

window.addEventListener("keydown", function (event) {
    event.code = "ArrowRight"
})
