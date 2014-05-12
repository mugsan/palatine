
function GameState(){
 
    this.currentLevel           = 0;
    this.currentState           = State.PRELOAD;
};

GameState.prototype.run = function() {

    switch (this.currentState) {
        case State.PRELOAD:     this.currentState = State.LOADING;
                                gLoading = true;
                                this.mLevel = new Level(gLEVELS[this.currentLevel]);
                                break;

        case State.LOADING:     if(!gLoading) this.currentState = State.RUNNING;
                                break;

        case State.RUNNING:     this.mLevel.update();
                                switch (this.mLevel.mPlayer.stateID) {
                                    case 1:         this.currentLevel       =-1;//DEAD
                                    case 2:         this.currentLevel      += 1;//VICTORY
                                                    this.currentState       = State.PRELOAD;
                                                    break;
                                }
                                gCounter += 1;
                                if (gCounter == 3) {
                                    this.mLevel.draw();
                                    this.drawLevelStatus();
                                    gCounter = 0;
                                }
                                break;

        default:                this.mLevel.update();
    }
};

GameState.prototype.drawLevelStatus = function() {
    var tPrint                  = ((this.currentLevel + 1) == gLEVELS.length)? 'F I N A L' : ((this.currentLevel + 1) + "/" + gLEVELS.length);
        gContext.font           = "20px arcade";
        gContext.fillStyle      = "#888";

        gContext.fillText(tPrint, 20,20);

};


function LevelData(arg_path, arg_color_background, arg_color_foreground, arg_color_conveyerbelt, arg_color_goal, arg_level_width, arg_level_height){
    this.path                   = arg_path;
    this.colorBackground        = arg_color_background;
    this.colorForeground        = arg_color_foreground;
    this.colorConveyerBelt      = arg_color_conveyerbelt;
    this.colorGoal              = arg_color_goal;
    this.levelWidth             = arg_level_width;
    this.levelHeight            = arg_level_height;
};



