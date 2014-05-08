var gCanvas;
var gContext;
var gGameState;
var gGRAVITY = .3;


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
    
    window.document.addEventListener("keydown", keyboard, true);
    
}

function loop(){
    
    gGameState.update();
    
    gGameState.draw();
    
   
    
    
}

// -- keyboard input -- //
function keyboard(event){
   
    
    var keyPressed = event.keyCode
    //UP
    if(keyPressed == 87){
        gGameState.mPlayer.isAirBorne = true;
        gGameState.mPlayer.jumpVelocity = -10;
       
      
    }
    
    //DOWN
    if(keyPressed == 83){
     
    }
    
    //RIGHT
    if(keyPressed == 68){
        gGameState.mPlayer.mDir     = 1;
        gGameState.mPlayer.hasMoved = true;
     
    }
    
    //LEFT
    if(keyPressed == 65){
        gGameState.mPlayer.mDir     = 2;
        gGameState.mPlayer.hasMoved = true;
    }
}
