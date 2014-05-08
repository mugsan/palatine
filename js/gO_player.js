function Player(){
    
    this.width              = 4;
    this.height             = 4;
    this.mBody              = new Rect(10, 14, "#999");
    this.mHead              = new Rect(10, 6, "#777");
    this.speed              = 2;
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
    if(this.isAirborne){
        this.jumpVelocity += gGRAVITY;
        this.mBody.move(0,this.jumpVelocity);
        this.mHead.move(0,this.jumpVelocity);
    }
    if(this.hasMoved){
        if (this.mDir == 1) {
            this.mBody.move(this.speed, 0);
            this.mHead.move(this.speed, 0);
        }else if (this.mDir == 2) {
            this.mBody.move(-this.speed, 0);
            this.mHead.move(-this.speed, 0);
        }
    }
    this.mDir       = 0;
    this.hasMoved   = false;
}
    
    
    
    
