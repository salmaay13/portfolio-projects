const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const retryBtn = document.getElementById("retryBtn");

const options = ["10%", "20%", "30%", "40%", "50%", "Try Again"];
const colors = ["#d7c2a3", "#b08968"];
const arcSize = 2 * Math.PI / options.length;

let startAngle = 0;
let isSpinning = false;

function drawWheel() {
    for (let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arcSize;

        ctx.beginPath();
        ctx.arc(200, 200, 200, angle, angle + arcSize);
        ctx.lineTo(200, 200);
        ctx.fillStyle = colors[i % 2];
        ctx.fill();

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#5a3e2b";
        ctx.font = "bold 18px Arial";
        ctx.fillText(options[i], 180, 10);
        ctx.restore();
    }
}

function spin() {
    if (isSpinning) return;

    resultBox.style.display = "none";
    isSpinning = true;

    let spinAngle = Math.random() * 2000 + 3000;
    let duration = 4000;
    let start = null;

    function animate(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let easeOut = 1 - Math.pow(1 - progress / duration, 3);
        startAngle = (spinAngle * easeOut * Math.PI / 180);

        ctx.clearRect(0, 0, 400, 400);
        drawWheel();

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            isSpinning = false;
            showResult();
        }
    }

    requestAnimationFrame(animate);
}

function showResult() {
    const degrees = startAngle * 180 / Math.PI + 90;
    const index = Math.floor((360 - degrees % 360) / (360 / options.length));

    resultText.textContent = options[index];
    resultBox.style.display = "block";
}

retryBtn.addEventListener("click", () => {
    resultBox.style.display = "none";
});

spinBtn.addEventListener("click", spin);

drawWheel();