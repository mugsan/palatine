function GameState(arg_context){
 
    //this.level = new Level();
    this.mPlayer = new Player();
    this.mContext = arg_context;
}

GameState.prototype.draw = function(){
    this.mPlayer.draw(this.mContext);
};


GameState.prototype.update = function() {
    this.mPlayer.update();
};
