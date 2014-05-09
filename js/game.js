var gCanvas;
var gContext;
var gGameState;
var gGRAVITY = .2;


// --    init game    -- //
function init(){
    
    gContext.fillStyle = "#FF00FF";
    gContext.fillRect(0, 0, gCanvas.width, gCanvas.height);
    
    
    gGameState = new GameState(gContext);
     
}


// -- main -- //
function main(){
    
    gCanvas = document.getElementById("mCanvas");
    gContext = gCanvas.getContext("2d");
    
    gCanvas.width = 320;
    gCanvas.height = 240;
    
    
    init();

    setInterval(loop, 10);
    
    
}

function loop(){
    if (keyState[39] || keyState[68]){
        gGameState.mPlayer.mDir = 1;
        gGameState.mPlayer.hasMoved = true;
    }    
    if (keyState[37] || keyState[65]){
        gGameState.mPlayer.mDir = 2;
        gGameState.mPlayer.hasMoved = true;
    }
    if (keyState[38] || keyState[87]) {
        if (!gGameState.mPlayer.isAirborne) {
            gGameState.mPlayer.jumpVelocity = -4.5;
        }
    }
    
    gGameState.update();
    
    gGameState.draw();
    
   
    
    
}
var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);
