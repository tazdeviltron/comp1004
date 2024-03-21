// JavaScript source code for video game
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 840;
canvas.height = 480;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);
const image = new Image();
image.src = "zombiemap.png";
const playerImage = new Image();
playerImage.src = "Spritesheet.png";
class Sprint {
    constructor({ position, velocity, image }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}
const background = new Sprint({
    position: {
        x: -200,
        y: -100
    },
    image: image
});

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
    function animate() {
        window.requestAnimationFrame(animate)
        background.draw();
        c.drawImage(playerImage,
            0,
            0,
            playerImage.width / 4,
            playerImage.height / 4,
            canvas.width / 2,
            canvas.height / 2,
            playerImage.width / 4,
            playerImage.height / 4,
        )
       // if () {

       // }
    }
animate()
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "w":
                keys.w.pressed = true;
                break;
            case "s":
                keys.s.pressed = true;
                break;
            case "a":
                keys.a.pressed = true;
                break;
            case "d":
                keys.d.pressed = true;
                break;
        }
    })

