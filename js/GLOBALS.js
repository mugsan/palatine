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

    background                  : "#555555",
    conveyerLeft                : "#424242",
    conveyerRight               : "#424242",
    bridge                      : "#89F354",
    wall                        : "#442222",
    goal                        : "#FFFFFF",
    jump                        : "#FF8000",
    helm                        : "#339955",
    anti                        : "#FFFFFF",
    dead                        : "#FF0000",
    glue                        : "#1188AA",
    trap                        : "#CCCCCC"
};

var gColorErotic = {

    background                  : "#AD3D95",
    conveyerLeft                : "#424242",
    conveyerRight               : "#424242",
    bridge                      : "#89F354",
    wall                        : "#D49BC7",
    goal                        : "#F2D3EB",
    jump                        : "#D585F2",
    helm                        : "#711094",
    anti                        : "#5987BA",
    dead                        : "#6A4E87",
    glue                        : "#1188AA",
    trap                        : "#CCCCCC"
};

var gColorHell = {

    background                  : "#7A3131",
    conveyerLeft                : "#8C7474",
    conveyerRight               : "#8C7474",
    bridge                      : "#89F354",
    wall                        : "#6E2121",
    goal                        : "#FF9E9E",
    jump                        : "#9E5252",
    helm                        : "#613636",
    anti                        : "#787878",
    dead                        : "#FF0000",
    glue                        : "#80824F"
    trap                        : "#CCCCCC"
};



var gLEVELS = [
    {
        path                    : "./stage/stage0.bmp",
        colorscheme             : gColorErotic
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
        path                    : "./stage/stage99.bmp",
        colorscheme             : gColorNormal
    }
];


