function Player(){
    
    this.width              = 4;
    this.height             = 4;
    this.mBody              = new Rect(10, 30, "#999");
    this.mHead              = new Rect(10, 22, "#777");
    this.speed              = 1.5;
    this.mDir               = 0;
    this.hasMoved           = false;
    this.isAirborne         = true;
    this.jumpVelocity       = 0;

}

Player.prototype.draw = function(){
    
    
    this.mBody.draw();
    this.mHead.draw();
          
};


Player.prototype.update = function(){
    
    var dX = 0;
    var dY = 0;
    
    
    
    if(this.isAirborne){
        this.jumpVelocity += gGRAVITY;
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
    
    if(this.collision(dX, 0)) dX = 0;
    if(this.collision(0, dY)){ 
        dY = 0;
        this.jumpVelocity = 0;
        this.isAirborne = false;
    }else{
        this.isAirborne = true;
    }
    
    this.mBody.move(dX, dY);
    this.mHead.move(dX, dY);
    
    this.mDir       = 0;
    this.hasMoved   = false;
}


Player.prototype.collision = function(arg_dX, arg_dY){
    
    
    if(this.mBody.left + arg_dX < 0) return false;
    if(this.mBody.right + arg_dX > 320) return false;
    if(this.mBody.bottom + arg_dY > 240) return false;
    if(this.mBody.top + arg_dY < 0) return false;
    
    if(gGameState.mLevel.mStage[Math.floor((this.mBody.left + arg_dX)/8) + Math.floor((this.mBody.top + arg_dY) / 8) * 40].isSolid) return true;
    if(gGameState.mLevel.mStage[Math.floor((this.mBody.right + arg_dX)/8)+ Math.floor((this.mBody.top + arg_dY) / 8) * 40].isSolid) return true;
    if(gGameState.mLevel.mStage[Math.floor((this.mBody.left + arg_dX)/8)+ Math.floor((this.mBody.bottom + arg_dY) /8) * 40].isSolid) return true;
    if(gGameState.mLevel.mStage[Math.floor((this.mBody.right + arg_dX)/8) + Math.floor((this.mBody.bottom + arg_dY)/8)*40].isSolid) return true;
    
    
    return false;
    
}
    
    
    
    
