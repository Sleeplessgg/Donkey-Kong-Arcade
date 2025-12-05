const spritePositions = ['-38px -2px', '-38px -2px', '-2px -2px', '-74px -2px', '-74px -2px', '-2px -2px']; // walk1 (2frames), idle (1frame), walk2 (2frames), idle (1frame)
const spriteJumpPositions = ['-110px -2px', '-146px -2px']; // jump, land
let i = 0;
let j = 0;
const player = document.querySelector('.player');
function changeSprite() {
    //console.log(currentMovement);
    if(currentHorizontalMovement === null) {
        player.style.backgroundPosition = spritePositions[2]; // idle position
        i = 0;
    } else if(inJump) {
        player.style.backgroundPosition = spriteJumpPositions[0];// jumping animation
    } else{
        player.style.backgroundPosition = spritePositions[i]; // walking animation
        i++;
        if(i > 5) {
        i = 0;
        }
    }

    
}

setInterval(changeSprite, 33); // roughly 30fps
