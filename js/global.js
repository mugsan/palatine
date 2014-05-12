var gCanvas;
var gContext;
var gGameState;
var gCounter = 0;
var gLoopID = 0;
var gLoading = false;
var keyState = {};    

var State = {
    INIT:                       0, 
    GAMEOVER:                   1,
    LOADING:                    2,
    RUNNING:                    3
};

var gLEVELS = [
    new LevelData('./stage/stage1.bmp','#333','#442222',40,30)
];


