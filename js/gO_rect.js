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

Rect.prototype.interact = function(playerState){
    playerState.VERTICAL_GRAVITY=0;

}



function RedTile(arg_x, arg_y){
    
    Rect.call(this, arg_x, arg_y);
   
    this.isSolid= true;
    this.color  = "#FF0000";
    //player.Set_VERTICAL_GRAVITY(0);
    
}

RedTile.prototype = Object.create(Rect.prototype);

RedTile.prototype.interact = function(player){
    
   
}

function ConveyorBeltTile(arg_x, arg_y, arg_color){
    
    Rect.call(this, arg_x, arg_y); 
    
    this.color = arg_color;
    this.isSolid = true;
    this.counter = 0;
    
}

ConveyorBeltTile.prototype = Object.create(Rect.prototype);

ConveyorBeltTile.prototype.interact = function(playerState){
  
    if(this.counter % 2 == 0)   playerState.VERTICAL_GRAVITY = -1;
    else playerState.VERTICAL_GRAVITY = 0;
   
    if(this.counter == 100) this.counter = 0;
    this.counter++; 
       
}

  
    



