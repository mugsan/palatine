function Player(arg_X, arg_Y){
    
    this.width              = 4;
    this.height             = 4;
    this.mBody              = new Rect(arg_X, arg_Y + 8, "#999");
    this.mHead              = new Rect(arg_X, arg_Y, "#777");
    this.speed              = 1;
    this.mDir               = 0;
    this.hasMoved           = false;
    this.isAirborne         = true;
    this.jumpVelocity       = 0;
    this.loadVelocity       = -3;
    this.GRAVITY = .2;

}

Player.prototype.draw = function(){
    
    
    this.mBody.draw();
    this.mHead.draw();
          
};


Player.prototype.update = function(){
    
    var dX = 0;
    var dY = 0;
    
    this.move(dX, dY);
    
};

Player.prototype.move = function(dX, dY){
    
    console.log("ok"); 
    if(this.isAirborne){
        this.jumpVelocity += this.GRAVITY;
        if(this.jumpVelocity > 4) this.jumpVelocity = 4;
        dY = this.jumpVelocity;
    }
    
    if(this.hasMoved){
        if (this.mDir == 1) {
            dX += this.speed;
        }else if (this.mDir == 2) {
            dX -= this.speed;
        }
    }
    
    //check collision right/left
    if(this.collision(dX, 0)) dX = 0;
    
    //check collision up/down
    if(this.collision(dX, dY)){ 
        
        if(dY > 0) this.isAirborne = false;
        
        dY = 0;
        this.jumpVelocity = 0;
        
    }else{
        //no floor under player
        this.isAirborne = true;
    }
    
    this.mBody.move(dX, dY);
    this.mHead.move(dX, dY);
    
    this.mDir       = 0;
    this.hasMoved   = false;
    
    
};


//- Player collision --//
Player.prototype.collision = function(arg_dX, arg_dY){
    
    arg_dX = parseInt(arg_dX);
    arg_dY = parseInt(arg_dY);
    var collided = false;
    
    for(var i = 0; i < 4; i++){
       if(gGameState.mLevel.getTile(this.mHead.left + (i%2)*7 + arg_dX, this.mHead.top + Math.floor(i/2)*7 + arg_dY).isSolid){
            gGameState.mLevel.getTile(this.mHead.left + (i%2)*7 + arg_dX, this.mHead.top + Math.floor(i/2)*7 + arg_dY).interact(this);
            collided = true;
           return true;
        }
       if(gGameState.mLevel.getTile(this.mBody.left + (i%2)*7 + arg_dX, this.mBody.top + Math.floor(i/2)*7 + arg_dY).isSolid){
           gGameState.mLevel.getTile(this.mBody.left + (i%2)*7 + arg_dX, this.mBody.top + Math.floor(i/2)*7 + arg_dY).interact(this);
           collided = true;
          return true;
        }
        
       
    }
    
    
    return collided;
    
}
    
    
    
    
