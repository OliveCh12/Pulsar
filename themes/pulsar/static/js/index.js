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


const summaryInfo = document.querySelector(".summary-info")

// Scrolling Sections Elements
const sectionSkills = document.querySelector(".section-skills")
const sectionCareer = document.querySelector(".section-career")


console.log(sectionSkills.scrollHeight, sectionSkills.scroll)

function smoothScrolling() {
    sectionCareer.scrollTo({
        top: 700,
        left: 100,
        behavior: 'smooth'
      });

      sectionCareer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

      console.log("You've just scrolled")
}




window.addEventListener('scroll', function () {
    let scroll = window.scrollY
    if (scroll <= 0) {
        summaryInfo.innerHTML = `Introduction`
    } else if (scroll >= 460) {
        summaryInfo.innerHTML = "Skills"
    } else if (scroll >= 650) {
        summaryInfo.innerHTML = "Career"
    } else {
        summaryInfo.innerHTML = `Keep Scrollingg`
    }
});

window.addEventListener('scroll', function () {
   console.log(body.scrollHeight)
})
