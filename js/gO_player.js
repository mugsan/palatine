



function Player(arg_X, arg_Y){
    this.mBody              =   new Rect(arg_X, arg_Y + 8, "#999");
    this.mHead              =   new Rect(arg_X, arg_Y, "#777");

    this.diffrentStates     = [ new State_basic(),
                                new State_dead(),
                                new State_win(),
                                new State_red(),
                                new State_helm() ];      //create a state list

    this.currentState       =   this.diffrentStates[3];   //set basic state
    this.stateID            =   3;
    this.mDir               =   0;
    this.hasMoved           =   false;
    this.isAirborne         =   true;
}

Player.prototype.draw = function(){
    
    
    this.mBody.color = this.currentState.colorBody;
    this.mBody.draw();
    this.mHead.draw();
          
};

Player.prototype.update = function(){
    
    
    var dX                  =   this.currentState.VERTICAL_GRAVITY;
    var dY                  =   0;
    this.move(dX, dY);
    
};

Player.prototype.changeState = function(arg_state) {
    this.stateID = arg_state;
    this.currentState = this.diffrentStates[this.stateID];
}



Player.prototype.move = function(dX, dY){
     
    if(this.isAirborne){
        this.currentState.jumpVelocity += this.currentState.GRAVITY;
        if(this.currentState.jumpVelocity > 4) this.currentState.jumpVelocity = 4;
        dY = this.currentState.jumpVelocity;
    }
    
    if(this.hasMoved){
        if (this.mDir == 1) {
            dX += this.currentState.speed;
        }else if (this.mDir == 2) {
            dX -= this.currentState.speed;
        }
    }
    
    //check collision right/left
    if(this.collision(dX, 0)) dX = 0;
    
    //check collision up/down
    if(this.collision(dX, dY)){ 
        if(dY > 0) this.isAirborne = false;
        
        dY = 0;
        this.currentState.jumpVelocity = 0;
        
    }else{
        this.isAirborne = true;
    }
    
    this.mBody.move(dX, dY);
    this.mHead.move(dX, dY);
    
    this.mDir       = 0;
    this.hasMoved   = false;
    
    
};

Player.prototype.collision = function(arg_dX, arg_dY){
    
    arg_dX = parseInt(arg_dX);
    arg_dY = parseInt(arg_dY);
    var collided = false;
    
    for(var i = 0; i < 4; i++){
       if(  gGameState.mLevel.getTile(this.mHead.left + (i%2)*7 + arg_dX, this.mHead.top + Math.floor(i/2)*7 + arg_dY).isSolid){
            gGameState.mLevel.getTile(this.mHead.left + (i%2)*7 + arg_dX, this.mHead.top + Math.floor(i/2)*7 + arg_dY).interact(this);
            collided = true;
            return true;
        }
       if(  gGameState.mLevel.getTile(this.mBody.left + (i%2)*7 + arg_dX, this.mBody.top + Math.floor(i/2)*7 + arg_dY).isSolid){
            gGameState.mLevel.getTile(this.mBody.left + (i%2)*7 + arg_dX, this.mBody.top + Math.floor(i/2)*7 + arg_dY).interact(this);
            collided = true;
            return true;
        }
    }
    return collided;
}

function State_basic(){
    
    this.speed              = 1;
    this.jumpVelocity       = 0;
    this.GRAVITY            = .1;
    this.VERTICAL_GRAVITY   = 0;
}

function State_win(){
   
}

function State_dead(){
    
    this.speed              = 1;
    this.jumpVelocity       = 0;
    this.GRAVITY            = .2;
    this.VERTICAL_GRAVITY   = 0;
}

function State_red(){
    
    this.speed              = 1;
    this.jumpVelocity       = 0;
    this.GRAVITY            = .1;
    this.VERTICAL_GRAVITY   = 0;
    this.colorBody          = '#AA0000';
}

function State_helm(){
    
    this.speed              = 1;
    this.jumpVelocity       = 0;
    this.GRAVITY            = .2;
    this.VERTICAL_GRAVITY   = 0;
}

