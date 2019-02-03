const progressBars = document.querySelectorAll(".progress-bar")


let progressValues = [20, 40]

function setProgress() {
    for (const key in progressBars) {
        if (progressBars.hasOwnProperty(key)) {
            const element = progressBars[key];
            element.style.width = "60%"
        }
    }
}

console.log(progressValues.map( value => value * 2))
progressValues.forEach(function(value) {
    30 + value
})