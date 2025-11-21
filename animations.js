const spritePositions = ['-2px -2px','-38px -2px','-74px -2px','-110px -2px'];
let i = 0;
const player = document.querySelector('.player');
function changeSprite() {
    player.style.backgroundPosition = spritePositions[i];
    i++;
    if(i > 3) {
        i = 0;
    }
    
}

setInterval(changeSprite, 100);