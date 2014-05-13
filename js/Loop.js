// -- main -- //
function main(){
    window.addEventListener('keydown',function(e){
        keyState[e.keyCode || e.which] = true;
    },true);    
    window.addEventListener('keyup',function(e){
        keyState[e.keyCode || e.which] = false;
    },true);
    
    gCanvas = document.getElementById("mCanvas");
    gContext = gCanvas.getContext("2d");
    
    gCanvas.width       = 320;
    gCanvas.height      = 240;
    
    gContext.fillStyle = "#FF00FF";
    gContext.fillRect(0, 0, gCanvas.width, gCanvas.height);
    
    gGameState = new GameState();
    gLoopID = setInterval(loop, 8);
}

function loop() {
    gGameState.run();
    
}

