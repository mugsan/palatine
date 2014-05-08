function GameState(arg_context){
 
    //this.level = new Level();
    this.mPlayer = new Player();
    this.mContext = arg_context;
}

GameState.prototype.draw = function(){
    
    this.mContext.beginPath();
    this.mContext.fillStyle = "#222";
    this.mContext.fillRect(0, 0, 320, 200);
    
    
    this.mPlayer.draw(this.mContext);
    
    this.mContext.closePath();
};


GameState.prototype.update = function() {
    this.mPlayer.update();
};
