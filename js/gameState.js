var State = {
    INIT:                       0, 
    GAMEOVER:                   1,
    LOADING:                    2,
    RUNNING:                    3
};

function GameState(){
 
    console.log("point A in gamestate constructor.");
    this.currentLevel           = 0;
    this.currentState           = State.INIT;
    this.drawCount              = 0;
    this.gameLoopID             = 0;
};

GameState.prototype.run = function() {

    switch (this.currentState) {
        case State.INIT:        this.currentState = State.LOADING;
                                gLoading = true;
                                console.log("point B in gamestate constructor.");
                                this.mLevel = new Level(gLEVELS[this.currentLevel]);
                                break;

        case State.RUNNING:     this.mLevel.update();
                                gCounter += 1;
                                if (gCounter == 3) {
                                    this.mLevel.draw();
                                    gCounter = 0;
                                }
                                break;

        case State.LOADING:     if(!gLoading) this.currentState = State.RUNNING;
                                break;

        default:                this.mLevel.update();
    }
};

function LevelData(arg_path, arg_color_background, arg_color_foreground, arg_level_width, arg_level_height){
    this.path                   = arg_path;
    this.colorBackground        = arg_color_background;
    this.colorForeground        = arg_color_foreground;
    this.levelWidth             = arg_level_width;
    this.levelHeight            = arg_level_height;
}

var gLEVELS = [
    new LevelData('./stage/stage1.bmp','#333','#442222',40,30)
];
