var gCanvas;
var gContext;
var gGameState;
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


/*
 *Array of levels
 *LevelData(url, backgroundColor, foregroundColor, width(40), height(30))
 */
var gLEVELS = [
    new LevelData('./stage/stage1.bmp','#333','#442222',40,30),
    new LevelData('./stage/stage2.bmp','#333','#442222',40,30)
];


