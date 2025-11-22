let currentMovement = null;
let lastMovement = null;
let distance = parseFloat(getComputedStyle(player).marginLeft); // removes '%'
console.log(distance);
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            
            currentMovement = "up";
            break;
        case "ArrowDown":
            
            currentMovement = "down";
            break;
        case "ArrowLeft":
            
            currentMovement = "left";
            break;
        case "ArrowRight":
            
            currentMovement = "right";
            break;
    }
    //console.log(currentMovement);
});

document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "ArrowUp":
            
            currentMovement = null;
            break;
        case "ArrowDown":
            
            currentMovement = null;
            break;
        case "ArrowLeft":
           
            currentMovement = null;
            break;
        case "ArrowRight":
            
            currentMovement = null;
            break;
    }

    //console.log(currentMovement);
});

function doMovement() {
    switch(currentMovement) {
    case "up":
        lastMovement = "up";
        break;
    case "down":
        lastMovement = "down";
        break;
    case "left":
        if(distance > 0) {
            //console.log("ja");
            distance -= 1;
            player.style.marginLeft = distance  + "px";
            console.log(distance);
            player.style.transform = "scaleX(-1)";
        }
        lastMovement = "left";
        break;
    case "right":
        if(distance < 416) {
            //console.log("ja");
            distance += 1;
            player.style.marginLeft = distance  + "px";
            player.style.transform = "scaleX(1)"; // flip image left/right
            //console.log(distance);
        }
        lastMovement = "right";
        break;
    case null:
        break;
    default:
        break;
}
}

setInterval(doMovement, 10);
