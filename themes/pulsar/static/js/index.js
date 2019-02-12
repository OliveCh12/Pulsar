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

// Contact Form

const inputsFields = document.querySelectorAll(".form-control")

console.log(inputsFields)


// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 400) {
//         setProgress()
//     }
// })
