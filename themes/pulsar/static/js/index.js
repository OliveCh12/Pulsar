var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 10
});

const progressBars = document.querySelectorAll(".progress-bar")
const benchmarkButton = document.querySelector("#start-benchmark")


let progressValues = [20, 40]

function setProgress() {
    for (const key in progressBars) {
        if (progressBars.hasOwnProperty(key)) {
            const progressBar = progressBars[key];
            if (progressBar.style.width === "0%") {
                progressBar.style.width = "80%"
                benchmarkButton.innerHTML = 'Reset Benchmark<i class="fas fa-sync-alt ml-2 spin"></i>'
            } else {
                progressBar.style.width = "0%"
                benchmarkButton.innerHTML = 'Start Benchmark<i class="fas fa-play-circle ml-2"></i>'
            }
        }
    }
}

// for (let index = 0; index < progressBars.length; index++) {
//     const element = progressBars[index];
//     console.log(element);
// }

// let bars = setInterval(() => {

// }, 2000);

// if (progressBars.length === 0) {
//     clearInterval()
// }

// for (let index = 0; index < progressValues.length; index++) {
//     const element = progressValues[index];
//     setTimeout(() => {
//         console.log(element)
//     }, 2000);
// }

// console.log(progressValues.map(value => value * 2))
// progressValues.forEach(function (value) {
//     30 + value
// })