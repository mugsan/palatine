var gCanvas;
var gContext;
var gGameState;
var gGRAVITY = .2;
var gCounter = 0;


// --    init game    -- //
function init(){
    
    gContext.fillStyle = "#FF00FF";
    gContext.fillRect(0, 0, gCanvas.width, gCanvas.height);
    
    
    gGameState = new GameState();
     
}


// -- main -- //
function main(){
    
    gCanvas = document.getElementById("mCanvas");
    gContext = gCanvas.getContext("2d");
    
    gCanvas.width = 320;
    gCanvas.height = 240;
    
    
    init();

    setInterval(loop, 8);
    
     
    
    
}

function loop(){
   
    
      gGameState.update();
    
      if(gCounter % 4 == 0) gGameState.draw();
    
   
        gCounter++;
    
}
var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);
