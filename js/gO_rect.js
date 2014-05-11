function Rect(arg_x, arg_y, arg_color){
    this.width  = 8;
    this.left   = arg_x;
    this.right  = arg_x + this.width;
    this.top    = arg_y;
    this.bottom = arg_y + this.width;
    this.color  = arg_color;
    this.isSolid= true;
}

Rect.prototype.draw = function() {
    gContext.fillStyle = this.color;
    gContext.fillRect(this.left, this.top, this.width, this.width);
};

Rect.prototype.move = function(dX, dY) {
    this.left   += parseInt(dX);
    this.right  += parseInt(dX);
    this.top    += parseInt(dY);
    this.bottom += parseInt(dY);

}

Rect.prototype.interact = function(player){
     player.VERTICAL_GRAVITY = 0;
    
}



function RedTile(arg_x, arg_y){
    
    Rect.call(this, arg_x, arg_y);
   
    this.isSolid= true;
    this.color  = "#FF0000";
     player.VERTICAL_GRAVITY = 0;
    
}

RedTile.prototype = Object.create(Rect.prototype);

RedTile.prototype.interact = function(player){
    
   
}

function IceTile(arg_x, arg_y, arg_color){
    
    Rect.call(this, arg_x, arg_y); 
    
    this.color = arg_color;
    this.isSolid = true;
    
}

IceTile.prototype = Object.create(Rect.prototype);

IceTile.prototype.interact = function(player){
    
    //console.log("hej");
    
    player.mBody.color = "#FF00FF";
    
    if(gCounter % 2 == 0) player.VERTICAL_GRAVITY = -1;
    else player.VERTICAL_GRAVITY = 0;
   // player.move(0, -1);
   
    
}
    



