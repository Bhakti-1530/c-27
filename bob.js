class Paper {
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':1.1,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(x,y,50, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    push();
    
    rotate(angle);
    ellipseMode(RADIUS);
    fill('yellow');
    ellipse(this.body.position.x,this.body.position.y,50,-50);
    pop();
  }




};