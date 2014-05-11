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



function LevelObject(arg_path, arg_color_background, arg_color_foreground, arg_player_pos_x, arg_player_pos_y){
    this.path                   = arg_path;
    this.color.background       = arg_color_background;
    this.color.foreground       = arg_color_foreground;
    this.player.x               = arg_player_pos_x;
    this.player.y               = arg_player_pos_y;
}
