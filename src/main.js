import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the  prefix

kaplay();

loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
//setGravity(1600);

const player = add([pos(120, 500), sprite("bean"), area(), body()]);
onKeyPress("space", () => {
    //player.jump(1000);
    shake();
});
player.move(100);