function Player(){
    
    this.mBody = new Rect(10, 26, 26, 42, "#999");
    this.mHead = new Rect(10, 10, 26, 26, "#777");
    this.speed = 1;

}

Player.prototype.draw = function(context){
    
    
    this.mBody.draw(context);
    this.mHead.draw(context);
          
};


Player.prototype.update = function(){
    
    
    this.mBody.move(1, 0);
    this.mHead.move(1, 0);
    
    
}
    
    
    
    