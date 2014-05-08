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
    gCanvas.height = 200;
    
    
    init();

    setInterval(loop, 40);
    
    document.addEventListener("keydown", keyboard, true);
    
}

function loop(){
    
    gGameState.update();
    
    gGameState.draw();
    
   
    
    
}

// -- keyboard input -- //
function keyboard(event){
   
    
    var keyPressed = event.keyCode;
    //UP
    if(keyPressed == 38){
        
       
      
    }
    
    //DOWN
    else if(keyPressed == 40){
     
    }
    
    //RIGHT
    else if(keyPressed == 39){
        gGameState.mPlayer.mDir     = 2;
        gGameState.mPlayer.hasMoved = true;
     
    }
    
    //LEFT
    else if(keyPressed == 37){
        gGameState.mPlayer.mDir     = 1;
        gGameState.mPlayer.hasMoved = true;
    }
}
