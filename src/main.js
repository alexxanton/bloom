import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the  prefix

kaplay({
    width: 960,
    height: 600,
    scale: 0.5
});

loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
setGravity(1600);

const MAX_SPEED = 10;
const player = add([pos(120, 500), sprite("bean"), area(), body()]);
const player2 = add([pos(180, 500), sprite("bean"), area(), body()]);
let speed = 0;

addLevel([
    "              $",
    "              $",
    "              $",
    "              $",
    "     $$       $",
    "%  ====       $",
    "               ",
    " ^^      = > =&",
    "===============",
    "              $",
], {
    tileWidth: 64,
    tileHeight: 64,
    tiles: {
        "=": () => [
            sprite("bean"),
            //sprite("floor"),
            area(),
            body({ isStatic: true }),
        ],
        "$": () => [
            sprite("bean"),
            //sprite("coin"),
            area(),
            pos(0, -9),
        ],
        "^": () => [
            sprite("bean"),
            //sprite("spike"),
            area(),
            "danger",
        ],
    }
})

onUpdate(() => {
    player.move(speed * 20, 0);


    if (!isKeyDown("a") && speed < 0) {
        speed += 1;
        if (speed > 0)
            speed = 0;
    }

    else if (!isKeyDown("d") && speed > 0) {
        speed -= 1;
        if (speed < 0)
            speed = 0;
    }
});

onKeyPress("space", () => {
    if (player.isGrounded()) {
        player.jump();
    }
    //shake();
});

onKeyDown("a", () => {
    speed -= 7;
    if (speed < -MAX_SPEED)
        speed = -MAX_SPEED;
});

onKeyDown("d", () => {
    speed += 7;
    if (speed > MAX_SPEED)
        speed = MAX_SPEED;
});

add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(255, 180, 255),
    move(LEFT, 240),
]);
