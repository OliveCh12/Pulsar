ScrollReveal({
    reset: true
}).reveal('section-career', {
    delay: 500
});


// Typed JS
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 10
});

// Skill Section
const progressBars = document.querySelectorAll(".progress-bar")
const descriptions = document.querySelectorAll(".skill-description")
const benchmarkButton = document.querySelector("#start-benchmark")

// console.log(benchmarkButton.offsetTop)
// console.log(benchmarkButton.scrollTop);

// console.log(window.offsetTop)
// console.log(benchmarkButton.scrollHeight)
// console.log(window.scroll)
// console.log(body.scrollTop);

// window.addEventListener('scroll', function (e) {
//     // console.log(e);
//     // console.log(Math.round(this.scrollY));
//     // console.log(benchmarkButton.offsetTop + '   ben offtop')
//     // console.log((Math.round(this.scrollY) == benchmarkButton.offsetTop));

//     if (Math.round(this.scrollY) == benchmarkButton.offsetTop) {
//         setProgress()
//     }
// // console.log(benchmarkButton.scrollTop+ '  ben scrltop');
// })


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

// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 400) {
//         setProgress()
//     }
// })
