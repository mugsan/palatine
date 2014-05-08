function Player(){
    
    this.width = 4;
    this.height = 4;
    this.mBody = new Rect(10, 14, this.width, this.height, "#999");
    this.mHead = new Rect(10, 10, this.width, this.height, "#777");
    this.speed = 1;
    this.hasMoved = false;

}

Player.prototype.draw = function(context){
    
    
    this.mBody.draw(context);
    this.mHead.draw(context);
          
};


Player.prototype.update = function(){
    
    if(this.hasMoved){
        this.mBody.move(1, 0);
        this.mHead.move(1, 0);
    }
    
    
    
    this.hasMoved = false;
  
}
    
    
    
    