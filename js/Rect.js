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

};

Rect.prototype.interact = function(arg_player){
    
    arg_player.currentState.VERTICAL_GRAVITY = 0;
    
     if(arg_player.stateID == 4 && arg_player.underRect(this)){
            this.isSolid = false;
            this.color = gColor.background; 
    }

}


// ----- RED JUMPTILLLEEEEEEEE ----------
function RedTile(arg_x, arg_y, arg_color){
    
    Rect.call(this, arg_x, arg_y);
   
    this.isSolid= true;
    this.color  = arg_color;
    
}

RedTile.prototype = Object.create(Rect.prototype);

RedTile.prototype.interact = function(player){
    
     gGameState.mLevel.mPlayer.changeState(3);
    
   
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

ConveyorBeltTile.prototype.interact = function(player){
    
    if(player.currentState.VERTICAL_GRAVITY <= -1) {player.currentState.VERTICAL_GRAVITY = 0;  }
    if(player.currentState.VERTICAL_GRAVITY >= 1 ) {player.currentState.VERTICAL_GRAVITY = 0;  }
    
    if(this.counter % 3 > 0)  
        player.currentState.VERTICAL_GRAVITY += this.dir;
        
   
    this.counter++;
    if(this.counter == 10) this.counter = 0;
     
       
}

ConveyorBeltTile.prototype.draw = function() {
    if( (this.counter + this.x) % 1000 > 20 && (this.counter + this.x) < 40) gContext.fillStyle = "#AAA";
    else gContext.fillStyle = "#CCC";
    gContext.fillRect(this.left, this.top, this.width, this.width);
};

//-------------Goal Tile-------------------//
function GoalTile(arg_x, arg_y, arg_color){
    
    Rect.call(this, arg_x, arg_y, arg_color);
   
}

GoalTile.prototype = Object.create(Rect.prototype);

GoalTile.prototype.interact = function(playerState){

    gGameState.mLevel.mPlayer.changeState(2);  
}


//----------- Anti gravity tile ---------/

function AntiGravityTile(arg_x, arg_y, arg_color){
    Rect.call(this, arg_x, arg_y, arg_color);   
}

AntiGravityTile.prototype = Object.create(Rect.prototype);
  
AntiGravityTile.prototype.interact = function(player){
 if(gGameState.mLevel.mPlayer.stateID != 5) gGameState.mLevel.mPlayer.changeState(5);  
    else gGameState.mLevel.mPlayer.changeState(0);
}
//------- Helmet TILE ------------------/

function HammerTile(arg_x, arg_y, arg_color){
    Rect.call(this, arg_x, arg_y, arg_color);
}

HammerTile.prototype = Object.create(Rect.prototype);

HammerTile.prototype.interact = function(player){
    gGameState.mLevel.mPlayer.changeState(4);
}

//------- Death TILE------------------/

function DeathTile(arg_x, arg_y, arg_color){
    Rect.call(this, arg_x, arg_y, arg_color);
}

DeathTile.prototype = Object.create(Rect.prototype);

DeathTile.prototype.interact = function(player){
    gGameState.mLevel.mPlayer.changeState(1);
}
    



