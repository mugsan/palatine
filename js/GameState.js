
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
                                    case 2:         this.currentLevel      += 1;
                                    case 1:         this.currentState       = State.PRELOAD;
                                                    break;
                                }
                                
                                if (gCounter % 4 == 0) {
                                    this.mLevel.draw();
                                    this.drawLevelStatus();
                                }
            
                                if(gCounter++ == 1000) gCounter = 0;
                                break;

        default:                this.mLevel.update();
    }
};

GameState.prototype.drawLevelStatus = function() {
    var tPrint                  = ((this.currentLevel + 1) == gLEVELS.length)? 'F I N A L  L E V E L' : ("L E V E L " + (this.currentLevel + 1) + " of " + gLEVELS.length);
        gContext.font           = "15px arcade";
        gContext.fillStyle      = "#888";

        gContext.fillText(tPrint, 10,10);

};



