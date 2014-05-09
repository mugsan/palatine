function GameState(arg_context){
 
    //this.level = new Level();
    this.mPlayer = new Player();
    this.mLevel = new Level();
    this.mLevel.loadStage(stage1);
    
    this.mContext = arg_context;
}

GameState.prototype.draw = function(){
    
    this.mContext.beginPath();
    this.mContext.fillStyle = "#333";
    this.mContext.fillRect(0, 0, 320, 240);
    this.mContext.closePath();
    this.mLevel.render();
    
    
    this.mPlayer.draw();
    
  
};


GameState.prototype.update = function() {
    
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
            gGameState.mPlayer.jumpVelocity = -5.2;
        }
    }
    this.mPlayer.update();
    
    
};
