var State = {
    INIT:                       0, 
    GAMEOVER:                   1,
    LOADSTAGE:                  2,
    RUNNING:                    3
};

function GameState(){
 
    this.currentLevel           = 0;
    this.currentState           = State.INIT;
    this.mLevel                 = new Level();
    this.mLevel.readBMP('./stage/stage1.bmp'); 
}

GameState.prototype.draw = function(){
    this.mLevel.draw();
};


GameState.prototype.update = function() {
    switch (this.currentState) {
        case State.RUNNING:           this.mLevel.update();
                                break;
        default:                this.mLevel.update();
    }
};



function LevelData(arg_path, arg_color_background, arg_color_foreground){
    this.path                   = arg_path;
    this.color.background       = arg_color_background;
    this.color.foreground       = arg_color_foreground;
}
