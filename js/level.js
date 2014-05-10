/*
 *  Black   = 23
 *  White   = 255
 *  Red     = 212
 */









function Level(){
    
 
    this.mStage = new Array();
    
    this.width = 40;
    this.height = 30;
    
    
}



Level.prototype.render = function(){
    
 
    for(var i = 0; i < this.height; i++){
        
     
        for(var j = 0; j < this.width; j++){
            
            var currentTile = this.mStage[j + i * this.width];
            if(currentTile.color != "#333")
                currentTile.draw(gContext);
            
        }
        
    }
    
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
                        
    var tCanvas                     = document.createElement("canvas");
        tCanvas.width               = 40;
        tCanvas.height              = 30;

    var tContext                    = tCanvas.getContext("2d"),
        tImage                      = document.getElementById("stageHTML");  
        tImage.src                  = arg_string;

        tContext.drawImage(tImage,0,0);

    var tImageData                  = tContext.getImageData(0, 0, tCanvas.width, tCanvas.height);

        for (var row = 0; row < tCanvas.height; row++) {
            for (var col = 0; col < tCanvas.width; col++) {
                var tileData        = tImageData.data[(col + row * tCanvas.width) * 4];
                switch (tileData) {
                    case 212:       var r       = new Rect(col * 8, row * 8, '#442222');
                                    r.isSolid   = true
                                    this.mStage[col + row * tCanvas.width] = r;
                                    break;
                    
                    default:        var r       = new Rect(col * 8, row * 8, '#333');
                                    r.isSolid   = false 
                                    this.mStage[col + row * tCanvas.width] = r;
                                    break;
                }
            }
        }
};
