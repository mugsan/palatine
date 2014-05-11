function GameState(){
 
    this.currentLevel           = 0;
    //this.mPlayer                = new Player();//move to object level
    this.mLevel                 = new Level();
    this.mLevel.readBMP('./stage/stage1.bmp'); 
}

GameState.prototype.draw = function(){
    this.mLevel.draw();
};


GameState.prototype.update = function() {
    this.mLevel.update(); 
};
