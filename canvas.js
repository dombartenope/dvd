const canvas = document.querySelector("canvas");
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");

// rectangles
// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(300, 300, 100, 100);

//lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "magenta";
// c.stroke();

//Arcs / Circles
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//     c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.stroke();
    };

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}

const circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = 1;
    let dy = 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach((circle) => {
        circle.update();
    });
}

animate();
