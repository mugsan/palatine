var gCanvas;
var gContext;
var gGameState;
var gColor;
var gTileWidth                  = 8;
var gCounter                    = 0;
var gLoopID                     = 0;
var gLoading                    = false;
var keyState                    = {};    


var State = {
    GAMEOVER:                   1,
    LOADING:                    2,
    RUNNING:                    3,
    PRELOAD:                    4
};

var gSOUND = { 
    jump                        : new AudioQue('./wav/jump.wav',9)

};




var gStage = { 
    width                       : 40, 
    height                      : 30
};

var gColorNormal = {

    background                  : "#333333",
    conveyerLeft                : "#424242",
    conveyerRight               : "#424242",
    wall                        : "#442222",
    goal                        : "#FFFFFF",
    jump                        : "#FF0000",
    helm                        : "#00FF00",
    anti                        : "#0000FF",
    dead                        : "0000000"

};

var gLEVELS = [
    {
        path                    : "./stage/stage1.bmp",
        colorscheme             : gColorNormal
    },
    {
        path                    : "./stage/stage2.bmp",
        colorscheme             : gColorNormal
    }
];


