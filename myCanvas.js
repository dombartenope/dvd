const canvas = document.querySelector("canvas");
const img = document.querySelector("img");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let radius = 30;
let dx = 2;
let dy = 2;

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.drawImage(img, x, y, 120, 100);

    if (x > innerWidth - 130 || x < 0) {
        dx = -dx;
    }
    if (y > innerHeight - 80 || y < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();
