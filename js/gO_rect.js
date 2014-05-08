function Rect(arg_x, arg_y, arg_color){
    this.width  = 8;
    this.left   = arg_x;
    this.right  = arg_x + this.width;
    this.top    = arg_y;
    this.bottom = arg_y + this.width;
    this.color  = arg_color;
    this.isSolid= true;
}

Rect.prototype.draw = function(context) {
    context.fillStyle = this.color;
    context.fillRect(this.left, this.top, this.width, this.width);
};

Rect.prototype.move = function(dX, dY) {
    this.left   += dX;
    this.right  += dX;
    this.top    += dY;
    this.bottom += dY;
}
