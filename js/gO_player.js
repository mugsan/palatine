function Player(){
    
    this.width = 4;
    this.height = 4;
    this.mBody = new Rect(10, 14, "#999");
    this.mHead = new Rect(10, 10, "#777");
    this.speed = 2;
    this.hasMoved = false;

}

Player.prototype.draw = function(){
    
    
    this.mBody.draw();
    this.mHead.draw();
          
};


Player.prototype.update = function(){
    
    if(this.hasMoved){
        this.mBody.move(this.speed, 0);
        this.mHead.move(this.speed, 0);
    }
    
    
    
    this.hasMoved = false;
  
}
    
    
    
    
