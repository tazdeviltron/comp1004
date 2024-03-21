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
       if (keys.w.pressed&& lastKey == "w") {
           background.position.y = background.position.y += 3
        }
       else if (keys.a.pressed&& lastKey == "a") {
            background.position.x = background.position.x += 3
        }
       else if (keys.d.pressed&& lastKey =="d") {
           background.position.x = background.position.x -= 3
        }
       else if (keys.s.pressed&& lastKey =="s") {
           background.position.y = background.position.y -= 3
       }
    }
animate()
let lastKey = "";
    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "w":
                keys.w.pressed = true;
                lastKey = "w";
                break;
            case "s":
                keys.s.pressed = true;
                lastKey = "s";
                break;
            case "a":
                keys.a.pressed = true;
                lastKey = "a";
                break;
            case "d":
                keys.d.pressed = true;
                lastKey = "d";
                break;
        }
    })

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w":
            keys.w.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
    }
})
