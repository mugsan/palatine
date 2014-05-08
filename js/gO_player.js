function Player(){
    
    this.mBody = new Rect(10, 26, 26, 42, "#999");
    this.mHead = new Rect(10, 10, 26, 26, "#777");

}

Player.prototype.draw = function(context){
    
    
    this.mBody.draw(context);
    this.mHead.draw(context);
          
};
    
    
    
    