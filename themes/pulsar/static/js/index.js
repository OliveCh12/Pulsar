// Typed JS
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 10
});

// Skill Section
const progressBars = document.querySelectorAll(".progress-bar")
const benchmarkButton = document.querySelector("#start-benchmark")

function setProgress() {
    for (const key in progressBars) {
        if (progressBars.hasOwnProperty(key)) {
            const progressBar = progressBars[key];
            const value = progressBar.getAttribute("value")
            if (progressBar.style.width === "0%") {
                progressBar.style.background = "#f4433 !important";
                progressBar.style.width = `${value}%`
                benchmarkButton.innerHTML = 'Reset Benchmark<i class="fas fa-sync-alt ml-2 spin"></i>'
            } else {
                progressBar.style.width = "0%"
                benchmarkButton.innerHTML = 'Start Benchmark<i class="fas fa-play-circle ml-2"></i>'
            }
        }
    }
}

