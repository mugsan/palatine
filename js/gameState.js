var State = {
    INIT:                       0, 
    GAMEOVER:                   1,
    LOADSTAGE:                  2,
    RUNNING:                    3

};




function GameState(){
 
    this.currentLevel           = 0;
    this.currentState           = 0;
    this.mLevel                 = new Level();
    this.mLevel.readBMP('./stage/stage1.bmp'); 
}

GameState.prototype.draw = function(){
    this.mLevel.draw();
};


GameState.prototype.update = function() {
    this.mLevel.update(); 
};



function LevelObject(arg_path, arg_color_background, arg_color_foreground){
    this.path       = arg_path;
    this.bgColor    = arg_color_background;
    this.fgColor    = arg_color_foreground;
}
