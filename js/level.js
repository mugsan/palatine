/*
 *  Black   = 23
 *  White   = 255
 *  Red     = 212
 *  LightBlue = 113
 */









function Level(){
    
 
    this.mStage                 = new Array();
    
    
    this.width                  = 40;
    this.height                 = 30;
    
    
};

Level.prototype.update = function(){

    if (keyState[39] || keyState[68]){
        this.mPlayer.Set_mDir(1);
        this.mPlayer.Set_hasMoved(true);
    }    
    if (keyState[37] || keyState[65]){
        this.mPlayer.Set_mDir(2);
        this.mPlayer.Set_hasMoved(true);
    }
    if (keyState[38] || keyState[87]) {
        if (!this.mPlayer.Get_isAirborne()) {
            this.mPlayer.Set_jumpVelocity(-5.2);
        }
    }
    this.mPlayer.update();
};



Level.prototype.draw = function(){
    gContext.beginPath();
    gContext.fillStyle = "#333";
    gContext.fillRect(0, 0, 320, 240);
    gContext.closePath();
    for (var i = 0, len = this.mStage.length; i < len; i++) {
            var currentTile = this.mStage[i];
            if(currentTile.color != "#333") currentTile.draw(gContext);
    }
    this.mPlayer.draw();
}



// - Get tile from current stage at arg_X, arg_Y
Level.prototype.getTile = function(arg_X, arg_Y){
    
    if(arg_X < 0 || arg_X  > 320 || arg_Y > 240 || arg_Y < 0){
        r = new Rect(0, 0, "#333");
        r.isSolid = false;
        return r;
    }
    
    
    return this.mStage[(Math.floor(arg_X / 8) + Math.floor(arg_Y / 8) * 40)];   
};



//Reads BMP and populates mStage with tiles.

Level.prototype.readBMP             = function(arg_string) {
    gLoading = true;

    var tStage                      = new Array(),
        tCanvas                     = document.createElement("canvas");
        tCanvas.width               = 40;
        tCanvas.height              = 30;

    var tContext                    = tCanvas.getContext("2d"),
        tImage                      = document.getElementById("stageHTML");  
        tImage.src                  = arg_string;

        tContext.drawImage(tImage,0,0);

    var tImageData                  = tContext.getImageData(0, 0, tCanvas.width, tCanvas.height);
    
    console.log(tImageData.data[0]);

        for (var row = 0; row < tCanvas.height; row++) {
            for (var col = 0; col < tCanvas.width; col++) {
                var tileData        = tImageData.data[(col + row * tCanvas.width) * 4];
                switch (tileData) {
                    case 212:       var r       = new Rect(col * 8, row * 8, '#442222');
                                    r.isSolid   = true
                                    this.mStage[col + row * tCanvas.width] = r;
                                    break;
                        
                    case 113:     
                                    var r       = new ConveyorBeltTile(col * 8, row * 8, '#AAFFFF');
                                    r.isSolid   = true
                                    this.mStage[col + row * tCanvas.width] = r;
                                    break;
                        
                        //player spawn
                    case 192: 
                                    this.mPlayer                = new Player(col * 8, col * 8);
                    default:        var r       = new Rect(col * 8, row * 8, '#333');
                                    r.isSolid   = false 
                                    this.mStage[col + row * tCanvas.width] = r;
                                    break;
                }
            }
        }
    gLoading = false;
};
