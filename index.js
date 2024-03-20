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
image.onload = () => {
    c.drawImage(image, -850, -200)
    c.drawImage(playerImage, canvas.width / 2 - playerImage.width / 2, canvas.height / 2 - playerImage.height / 2)
}
