



function Player(arg_X, arg_Y){
    
    
    this.diffrentStates=[new State_basic(arg_X, arg_Y),
                         new State_dead(arg_X, arg_Y),
                         new State_win(arg_X, arg_Y),
                         new State_red(arg_X, arg_Y),
                         new State_helm(arg_X, arg_Y)];      //create a state list
    this.currentState=this.diffrentStates[0];   //set basic state
    this.stateIndex = 0;
}

Player.prototype.Get_state = function(){
    return this.stateIndex;  
}

Player.prototype.draw = function(){
    this.currentState.draw();
}

Player.prototype.move = function(dX, dY){
    this.currentState.move(dX, dY);
}

Player.prototype.collision = function(arg_dX,arg_dY){
    this.currentState.collision(arg_dX,arg_dY);
}

Player.prototype.update = function(){
    this.currentState.update();
}


Player.prototype.changeState = function(newState){  // NewState: O = basic, dead =1; red=2;helm=3;
    this.currentState = this.diffrentStates[newState];
    this.stateIndex = newState;
}





Player.prototype.Set_width = function(newValue){
    this.currentState.width=newValue;
}
Player.prototype.Get_width = function(){
    return this.currentState.width;
}

Player.prototype.Set_height = function(newValue){
    this.currentState.height=newValue;
}
Player.prototype.Get_height = function(){
    return this.currentState.height;
}

Player.prototype.Set_mBody = function(newValue){
    this.currentState.mBody=newValue;
}
Player.prototype.Get_mBody = function(){
    return this.currentState.mBody;
}

Player.prototype.Set_mHead = function(newValue){
    this.currentState.mHead=newValue;
}
Player.prototype.Get_mHead = function(){
    return this.currentState.mHead;
}

Player.prototype.Set_speed = function(newValue){
    this.currentState.speed=newValue;
}
Player.prototype.Get_speed = function(){
    return this.currentState.speed;
}

Player.prototype.Set_mDir = function(newValue){
    this.currentState.mDir=newValue;
}
Player.prototype.Get_mDir = function(){
    return this.currentState.mDir;
}

Player.prototype.Set_hasMoved = function(newValue){
    this.currentState.hasMoved=newValue;
}
Player.prototype.Get_hasMoved = function(){
    return this.currentState.hasMoved;
}

Player.prototype.Set_isAirborne = function(newValue){
    this.currentState.isAirborne=newValue;
}
Player.prototype.Get_isAirborne = function(){
    return this.currentState.isAirborne;
}

Player.prototype.Set_hasMoved = function(newValue){
    this.currentState.hasMoved=newValue;
}
Player.prototype.Get_hasMoved = function(){
    return this.currentState.hasMoved;
}

Player.prototype.Set_jumpVelocity = function(newValue){
    this.currentState.jumpVelocity=newValue;
}
Player.prototype.Get_jumpVelocity = function(){
    return this.currentState.jumpVelocity;
}

Player.prototype.Set_loadVelocity = function(newValue){
    this.currentState.loadVelocity=newValue;
}
Player.prototype.Get_loadVelocity = function(){
    return this.currentState.loadVelocity;
}

Player.prototype.Set_GRAVITY = function(newValue){
    this.currentState.GRAVITY=newValue;
}
Player.prototype.Get_GRAVITY = function(){
    return this.currentState.GRAVITY;
}

Player.prototype.Set_VERTICAL_GRAVITY = function(newValue){
    console.log("hitting this: VERTICAL_GRAVITY");
    this.currentState.VERTICAL_GRAVITY=newValue;
}
Player.prototype.Get_VERTICAL_GRAVITY = function(){
    return this.VERTICAL_GRAVITY;
}


//------------------------------State basic--------------------------------------


function State_basic(arg_X, arg_Y){
    
    //Player.call(this, arg_X, arg_Y);
    
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
    this.GRAVITY = .1;
    this.VERTICAL_GRAVITY = 0;

}


State_basic.prototype.draw = function(){
    
    
    this.mBody.draw();
    this.mHead.draw();
          
};


State_basic.prototype.update = function(){
    
    var dX = this.VERTICAL_GRAVITY;
    var dY = 0;
    
    this.move(dX, dY);
    
};

State_basic.prototype.move = function(dX, dY){
     
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
State_basic.prototype.collision = function(arg_dX, arg_dY){
    
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

//-------------------------------State win -------------------------

function State_win(arg_X, arg_Y){
    State_basic.call(arg_X, arg_Y);
   
}
State_win.prototype = Object.create(State_basic.prototype);

//------------------------------State Dead--------------------------------------


function State_dead(arg_X, arg_Y){
    
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
    this.VERTICAL_GRAVITY = 0;

}

State_dead.prototype = Object.create(State_basic.prototype);

State_dead.prototype.update = function(){
    
  
    
};

State_dead.prototype.move = function(dX, dY){
     
   
    
    
};


//- Player collision --//
State_dead.prototype.collision = function(arg_dX, arg_dY){
    
    
}

//------------------------------State red--------------------------------------

function State_red(arg_X, arg_Y){
    
    this.width              = 4;
    this.height             = 4;
    this.mBody              = new Rect(arg_X, arg_Y + 8, "#FF0000");
    this.mHead              = new Rect(arg_X, arg_Y, "#777");
    this.speed              = 1;
    this.mDir               = 0;
    this.hasMoved           = false;
    this.isAirborne         = true;
    this.jumpVelocity       = 0;
    this.loadVelocity       = -3;
    this.GRAVITY = .2;
    this.VERTICAL_GRAVITY = 0;

}

State_red.prototype = Object.create(State_basic.prototype);


State_red.prototype.update = function(){
    
    var dX = this.VERTICAL_GRAVITY;
    var dY = 0;
    
    this.move(dX, dY);
    
};

State_red.prototype.move = function(dX, dY){
     
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




//------------------------------State helm--------------------------------------


function State_helm(arg_X, arg_Y){
    
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
    this.VERTICAL_GRAVITY = 0;

}

State_helm.prototype = Object.create(State_basic.prototype);




State_helm.prototype.update = function(){
    
    var dX = this.VERTICAL_GRAVITY;
    var dY = 0;
    
    this.move(dX, dY);
    
};

State_helm.prototype.move = function(dX, dY){
     
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
State_helm.prototype.collision = function(arg_dX, arg_dY){
    
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
    
