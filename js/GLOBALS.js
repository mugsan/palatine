var gCanvas;
var gCanvasWidth;
var gCanvasHeight;
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
    breakTile                   : new AudioQue('./wav/break.wav',4),
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

    background                  : "#222222",
    conveyerLeft                : "#444444",
    conveyerRight               : "#444444",
    bridge                      : "#333333",
    trap                        : "#333333",
    wall                        : "#555555",
    goal                        : "#FFFFFF",
    dead                        : "#00CC00",
    tele                        : "#CCCCCC",

    glue                        : "#111177",
    jump                        : "#771111",
    helm                        : "#117711",
    anti                        : "#999911"
};

var gColorErotic = {

    background                  : "#441144",
    conveyerLeft                : "#664466",
    conveyerRight               : "#664466",
    bridge                      : "#663366",
    trap                        : "#663366",
    wall                        : "#994499",
    goal                        : "#FFCCFF",
    dead                        : "#332233",
    tele                        : "#DDAADD",

    glue                        : "#111177",
    jump                        : "#771111",
    helm                        : "#117711",
    anti                        : "#999911"
};

var gColorHell = {

    background                  : "#441111",
    conveyerLeft                : "#664444",
    conveyerRight               : "#664444",
    bridge                      : "#663333",
    trap                        : "#663333",
    wall                        : "#994444",
    goal                        : "#FFCCCC",
    dead                        : "#CC0000",
    tele                        : "#996666",

    glue                        : "#111177",
    jump                        : "#771111",
    helm                        : "#117711",
    anti                        : "#999911"
};



var gLEVELS = [
    {
        path                    : "./stage/testing.bmp",
        colorscheme             : gColorNormal 
    },
    {
        path                    : "./stage/stage1.bmp",
        colorscheme             : gColorHell
    },
    {
        path                    : "./stage/stage2.bmp",
        colorscheme             : gColorNormal
    },
    {
        path                    : "./stage/stage3.bmp",
        colorscheme             : gColorNormal,
        noJump                  : true
    },
    {
        path                    : "./stage/stage4.bmp",
        colorscheme             : gColorNormal
    },
    {
        path                    : "./stage/stage5.bmp",
        colorscheme             : gColorNormal
    },
    {
        path                    : "./stage/stage6.bmp",
        colorscheme             : gColorNormal
    },
    {
        path                    : "./stage/stage99.bmp",
        colorscheme             : gColorNormal,
        noJump                  : true
    }
];


