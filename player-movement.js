let currentMovement = null;
let stageBeam = 5;
let onLadder = false;
/* y_Pos is pixel pos -48 (16 for margin top + 32 for player height) */
/*x_Pos is pixel pos -16 (16 for margin left)*/
let beamCoordinates = [
    // Row 0
    [
        [0, 464, false], [16, 464, false], [48, 464, false], [80, 464, false],
        [112, 464, false], [144, 464, false], [176, 464, false], [208, 462, false],
        [240, 460, false], [272, 458, false], [304, 456, false], [336, 454, false],
        [368, 452, false], [400, 450, false]
    ],
    // Row 1
    [
        [0, 384, false], [16, 386, false], [48, 388, false], [80, 390, false],
        [112, 392, false], [144, 394, false], [176, 396, false], [208, 398, false],
        [240, 400, false], [272, 402, false], [304, 404, false], [336, 406, false],
        [368, 408, false], [400, 410, true]
    ],
    // Row 2
    [
        [0, 344, true], [16, 342, false], [48, 340, false], [80, 338, false],
        [112, 336, false], [144, 334, false], [176, 332, false], [208, 330, false],
        [240, 328, false], [272, 326, false], [304, 324, false], [336, 322, false],
        [368, 320, false], [400, 318, false]
    ],
    // Row 3
    [
        [0, 252, false], [16, 254, false], [48, 256, false], [80, 258, false],
        [112, 260, false], [144, 262, false], [176, 264, false], [208, 266, false],
        [240, 268, false], [272, 270, false], [304, 272, false], [336, 274, false],
        [368, 276, false], [400, 278, true]
    ],
    // Row 4
    [
        [0, 212, true], [16, 210, false], [48, 208, false], [80, 206, false],
        [112, 204, false], [144, 202, false], [176, 200, false], [208, 198, false],
        [240, 196, false], [272, 194, false], [304, 192, false], [336, 190, false],
        [368, 188, false], [400, 186, false]
    ],
    // Row 5
    [
        [0, 136, false], [16, 136, false], [48, 136, false], [80, 136, false],
        [112, 136, false], [144, 136, false], [176, 136, false], [208, 136, false],
        [240, 136, false], [272, 138, false], [304, 140, false], [336, 142, false],
        [368, 144, false], [400, 146, true]
    ],
    // Row 6
    [
        [0, 80, false], [16, 80, false], [48, 80, false], [80, 80, false],
        [112, 80, false], [144, 80, false], [160, 80, false], [208, 80, false],
        [240, 80, false], [272, 80, false], [304, 80, false], [336, 80, false],
        [368, 80, false], [400, 80, false]
    ]
];

// format(x_pos, beamstage)
let ladderCoordinates = [[352, 0], [48, 1], [176, 1], [208, 2], [352, 2], [48, 3], [128, 3], [352, 4], [112, 5], [144, 5], [240, 5], [112, 6], [144, 6], ]




let x_Pos = parseFloat(getComputedStyle(player).marginLeft); // takes px margin left
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
    y_Pos = parseFloat(getComputedStyle(player).marginTop);
    let whichBeam = calculatePosition(x_Pos, y_Pos);
    switch(currentMovement) {
    case "up":
        for(let i = 0; i <= ladderCoordinates.length - 1; i++) {
            if(x_Pos >= (ladderCoordinates[i][0] - 2) && x_Pos <= (ladderCoordinates[i][0] + 18) && stageBeam == ladderCoordinates[i][1]) {
                console.log("ladder here");
                if(y_Pos > beamCoordinates[stageBeam + 1][whichBeam][1]) {
                    onLadder = true;
                    y_Pos -= 1;
                    player.style.marginTop = y_Pos + "px";
                } else {
                onLadder = false;
                stageBeam += 1;
                }
            }
        }
        break;
    case "down":
        break;
    case "left":
        if(x_Pos > 0 && !onLadder) {
            x_Pos -= 1;
            player.style.marginLeft = x_Pos  + "px";
            //console.log(distance);
            player.style.transform = "scaleX(-1)";
        }
        break;
    case "right":
        if(x_Pos < 416 && !onLadder) {

            x_Pos += 1;
            player.style.marginLeft = x_Pos  + "px";
            player.style.transform = "scaleX(1)"; // flip image left/right
            //console.log(distance);
        }
        break;
    case null:
        break;
    default:
        break;
    }
    
}

function calculatePosition(x_Pos, y_Pos) {
    /*console.log(parseFloat(getComputedStyle(player).marginTop));*/
    /*check which segment of the beam the player is on*/
    for(let i = beamCoordinates[stageBeam].length - 1; i >= 0; i--) {
        if(x_Pos >= beamCoordinates[stageBeam][i][0]) {
            //console.log(beamCoordinates[stageBeam][i]);
            if(beamCoordinates[stageBeam][i][2]) {
                //console.log(beamCoordinates[stageBeam][i]);
                if(y_Pos < beamCoordinates[stageBeam-1][i][1]) {
                    y_Pos += 1.25;
                    player.style.marginTop = y_Pos + "px";
                } else {
                    y_Pos = beamCoordinates[stageBeam-1][i][1];
                    player.style.marginTop = y_Pos + "px";
                    stageBeam -= 1;}
                return
            }
            if(!onLadder) {
                player.style.marginTop = beamCoordinates[stageBeam][i][1] + "px";
                return i;
            } else {
                
                return i;
            }
        }
    }
    
}
setInterval(doMovement, 11);
