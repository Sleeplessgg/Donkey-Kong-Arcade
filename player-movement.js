let currentMovement = null;
let lastMovement = null;
let stageBeam = 6;
/* y_Pos is pixel pos -48 (16 for margin top + 32 for player height) */
/*x_Pos is pixel pos -16 (16 for margin left)*/
let beamCoordinates = [
    [[0, 464], [208, 462], [240, 460], [272, 458], [304, 456], [336, 454], [368, 452], [400, 450]],
    [[0, 384], [16, 386], [48, 388], [80, 390], [112, 392], [144, 394], [176, 396], [208, 398], [240, 400], [272, 402], [304, 404], [336, 406], [368, 408], [400, 410], [432, 412], [464, 414]],
    [[0, 344], [16, 342], [48, 340], [80, 338], [112, 336], [144, 334], [176, 332], [208, 330], [240, 328], [272, 326], [304, 324], [336, 322], [368, 320], [400, 318], [432, 316], [464, 314]],
    [[0, 252], [16, 254], [48, 256], [80, 258], [112, 260], [144, 262], [176, 264], [208, 266], [240, 268], [272, 270], [304, 272], [336, 274], [368, 276], [400, 278], [432, 280], [464, 282]],
    [[0, 212], [16, 210], [48, 208], [80, 206], [112, 204], [144, 202], [176, 200], [208, 198], [240, 196], [272, 194], [304, 192], [336, 190], [368, 188], [400, 186], [432, 184], [464, 182]],
    [[0, 136], [272, 138], [304, 140], [336, 142], [368, 144], [400, 146]],
    [[160, 80]]
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
