function Rect(arg_x, arg_y, arg_color){
    this.width  = 8;
    this.left   = arg_x;
    this.right  = arg_x + this.width;
    this.top    = arg_y;
    this.bottom = arg_y + this.width;
    this.color  = arg_color;
    this.isSolid= true;
    this.isDestructable = true;
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

function ConveyorBeltTile(arg_x, arg_y, arg_color, arg_dir){
    
    Rect.call(this, arg_x, arg_y); 
    
    this.dir = arg_dir;
    this.color = arg_color;
    this.isSolid = true;
    this.counter = 0;
    this.x = arg_x;
    
}

ConveyorBeltTile.prototype = Object.create(Rect.prototype);

ConveyorBeltTile.prototype.interact = function(playerState){
  
    if(this.counter % 2 == 0)   playerState.VERTICAL_GRAVITY = this.dir;
    else playerState.VERTICAL_GRAVITY = 0;
   
    if(this.counter == 1000) this.counter = 0;
    this.counter++; 
       
}

ConveyorBeltTile.prototype.draw = function() {
    if( (this.counter + this.x) % 1000 > 20 && (this.counter + this.x) < 40) gContext.fillStyle = "#AAA";
    else gContext.fillStyle = "#CCC";
    gContext.fillRect(this.left, this.top, this.width, this.width);
};


function GoalTile(arg_x, arg_y, arg_color){
    
    Rect.call(this, arg_x, arg_y, arg_color);
    
    this.isSolid = true;   
}

GoalTile.prototype = Object.create(Rect.prototype);

GoalTile.prototype.interact = function(playerState){
    
    console.log("baaah");
    gGameState.mLevel.mPlayer.changeState(2);  
}
  
    



