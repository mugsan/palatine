/*
 *  Tiles.
 *  actualValue     : canvasValue   : tileType
 *  199             : 212           : Wall
 *  100             : 113           : ConveyerLeft
 *  60              : 74            : ConveyerRight
 *  179             : 192           : Player
 *  40              : 25            : Goal
 *  100             : 121
 *  221             : 230
 *  156             : 174
 *  64              : 82 
 *  209             : 218           : HammerTile
 *  173             : 187
 *  88              : 107
 *  174             : 189           : RedTile
 *  206             : 218
 *  176             : 190
 *  173             : 189
 *
 *
 */
function Level(arg_level_data){
    
 
    this.mStage                 = 0;        
    this.colorBackground        = arg_level_data.colorBackground;
    this.colorForeground        = arg_level_data.colorForeground;
    this.width                  = arg_level_data.levelWidth;
    this.height                 = arg_level_data.levelHeight;

    this.readBMP(arg_level_data);
    
};

Level.prototype.update = function(){

    if (keyState[39] || keyState[68]){
        this.mPlayer.mDir = 1;
        this.mPlayer.hasMoved = true;
    }    
    if (keyState[37] || keyState[65]){
        this.mPlayer.mDir = 2;
        this.mPlayer.hasMoved = true;
    }
    if (keyState[38] || keyState[87]) {
        if (!this.mPlayer.isAirborne) {
            this.mPlayer.currentState.jumpVelocity = -5.2;
        }
    }
    this.mPlayer.update();
};



Level.prototype.draw = function(){
    gContext.beginPath();
    gContext.fillStyle = this.colorBackground;
    gContext.fillRect(0, 0, gCanvas.width, gCanvas.height);
    gContext.closePath();
    for (var i = 0, len = this.mStage.length; i < len; i++) {
        if(this.mStage[i].isSolid) this.mStage[i].draw(gContext);
    }
    this.mPlayer.draw();
}



// - Get tile from current stage at arg_X, arg_Y
Level.prototype.getTile = function(arg_X, arg_Y){
    if(arg_X < 0 || arg_X  > gCanvas.width || arg_Y > gCanvas.height || arg_Y < 0){
        r = new Rect(0, 0, this.colorBackground);
        r.isSolid = false;
        return r;
    }
    return this.mStage[Math.floor(arg_X / gTileWidth) + Math.floor(arg_Y / gTileWidth) * this.width];   
};



//Reads BMP and populates tPixel with tiles.

Level.prototype.readBMP             = function(arg_level_data) {
    gLoading = true;

    
    var colorBackground             = arg_level_data.colorBackground,
        colorForeground             = arg_level_data.colorForeground,
        colorConveyerBelt           = arg_level_data.colorConveyerBelt,
        colorGoal                   = arg_level_data.colorGoal,
        width                       = arg_level_data.levelWidth,
        height                      = arg_level_data.levelHeight,
        path                        = arg_level_data.path;

    var tStage                      = new Array(),
        tCanvas                     = document.createElement("canvas");
        tCanvas.width               = this.width;
        tCanvas.height              = this.height;

    var tContext                    = tCanvas.getContext("2d"),
        tImage                      = new Image();  
        tImage.onload               = function() {

        tContext.drawImage(tImage,0,0);

    var tImageData                  = tContext.getImageData(0, 0, tCanvas.width, tCanvas.height);
    var tPixel                      = new Array();
    
        for (var row = 0; row < tCanvas.height; row++) {
            for (var col = 0; col < tCanvas.width; col++) {
                var tileData        = tImageData.data[(col + row * tCanvas.width) * 4];
                switch (tileData) {
                    
                    case 212:       var r       = new Rect(col * gTileWidth, row * gTileWidth, colorForeground);
                                    r.isSolid   = true
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                    
                        //conveyor belt moving to the left
                    case 113:     
                                    var r       = new ConveyorBeltTile(col * gTileWidth, row * gTileWidth, colorConveyerBelt, -1);
                                    r.isSolid   = true
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                        
                        
                    case 74:        var r       = new ConveyorBeltTile(col * gTileWidth, row * gTileWidth, colorConveyerBelt, 1);
                                    r.isSolid   = true
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                    
                    //GoalTile
                    case 25:        var r       = new GoalTile(col * gTileWidth, row * gTileWidth, colorGoal);
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                        
                      //Red tile
                    case 189:       var r = new RedTile(col * 8, row * 8);
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                     
                    //Hammer tile
                    case 218:       var r = new HammerTile(col * 8, row * 8);
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
      
                        //player spawn
                    case 192:       gGameState.mLevel.mPlayer                = new Player(col * gTileWidth, row * gTileWidth);
                    default:        var r       = new Rect(col * gTileWidth, row * gTileWidth, colorBackground);
                                    r.isSolid   = false 
                                    tPixel[col + row * tCanvas.width] = r;
                                    break;
                }
            }
        }
        gLoading = false;
        gGameState.mLevel.mStage = tPixel;

    };
    tImage.src                      = path;
};
