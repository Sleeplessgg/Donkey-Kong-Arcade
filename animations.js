const spritePositions = ['-2px -2px','-38px -2px','-74px -2px','-110px -2px'];
const spriteStopPosition = ('-146px -2px');
let i = 0;
const player = document.querySelector('.player');
function changeSprite() {
    console.log(currentMovement);
    if(currentMovement === null && lastMovement !== null) {
        //console.log("jaaa!");
        player.style.backgroundPosition = spriteStopPosition;
        lastMovement = null;
        
        i = 0;
    } else if(currentMovement === null) {
        //console.log("jaaa!");
        player.style.backgroundPosition = spritePositions[0];
        i = 0;
    } else {
        player.style.backgroundPosition = spritePositions[i];
        i++;
        if(i > 3) {
        i = 0;
        }
    }
    
    
}

setInterval(changeSprite, 100);
