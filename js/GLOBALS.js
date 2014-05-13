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

var gSound = { 
    jump                        : new AudioQue('./wav/jump.wav',4),
    dead                        : new AudioQue('./wav/dead.wav',1),
    breakTile                   : new AudioQue('./wav/break.wav',2),
    swapState                   : new AudioQue('./wav/swap.wav',1),
    win                         : new AudioQue('./wav/win.wav',1),
    antiGrav                    : new AudioQue('./wav/antiGrav2.wav',2),
    convey                      : new AudioQue('./wav/convey.wav',2)

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


