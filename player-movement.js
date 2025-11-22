let currentMovement = null;
let lastMovement = null;
let stageBeam = 0;
let beamCoordinates = [
    [[0, 464], [224, 462], [256, 460], [288, 458], [320, 456], [352, 454], [384, 452]],
    [],
    [],
    [],
    [],
    [],
]
let x_Pos = parseFloat(getComputedStyle(player).marginLeft); // removes '%'
//console.log(distance);
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
    x_Pos = parseFloat(getComputedStyle(player).marginLeft);

    switch(currentMovement) {
    case "up":
        lastMovement = "up";
        break;
    case "down":
        lastMovement = "down";
        break;
    case "left":
        if(x_Pos > 0) {
            //console.log("ja");
            x_Pos -= 1;
            player.style.marginLeft = x_Pos  + "px";
            //console.log(distance);
            player.style.transform = "scaleX(-1)";
        }
        lastMovement = "left";
        break;
    case "right":
        if(x_Pos < 416) {
            //console.log("ja");
            x_Pos += 1;
            player.style.marginLeft = x_Pos  + "px";
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
    calculatePosition(x_Pos);
}

function calculatePosition(x_Pos) {
    /*console.log(parseFloat(getComputedStyle(player).marginTop));*/
    /*check which segment of the beam the player is on*/
    for(let i = beamCoordinates[stageBeam].length - 1; i >= 0; i--) {
        if(x_Pos >= beamCoordinates[stageBeam][i][0]) {

            player.style.marginTop = beamCoordinates[stageBeam][i][1] + "px";
            break;
        }
    }
    
}
setInterval(doMovement, 10);
