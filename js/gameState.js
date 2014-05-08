function GameState(){
 
    //this.level = new Level();
    this.mPlayer = new Player();
}

GameState.prototype.draw = function(){
    this.mPlayer.draw();
}


GameState.prototype.update = function() {
    this.mPlayer.update();
}
