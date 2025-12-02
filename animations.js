const spritePositions = ['-2px -2px','-38px -2px','-74px -2px']; // idle, walk1, walk2
const spriteJumpPositions = ['-110px -2px', '-146px -2px']; // jump, land
let i = 0;
const player = document.querySelector('.player');
function changeSprite() {
    //console.log(currentMovement);
    if(currentMovement === null) {
        player.style.backgroundPosition = spritePositions[0]; // idle position
        i = 0;
    } else {
        player.style.backgroundPosition = spritePositions[i]; // walking animation
        i++;
        if(i > 2) {
        i = 0;
        }
    }
    
    
}

setInterval(changeSprite, 100);
