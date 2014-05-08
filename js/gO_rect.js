function Rect(arg_x, arg_y, arg_w, arg_h, arg_color){
    this.left   = arg_x;
    this.right  = arg_x + arg_w;
    this.top    = arg_y;
    this.bottom = arg_y + arg_h;
    this.width  = arg_w;
    this.height = arg_h;
    this.color  = arg_color;
}

Rect.prototype.draw = function(context) {
    context.fillStyle = this.color;
    context.fillRect(this.left, this.top, this.width, this.height);
};
