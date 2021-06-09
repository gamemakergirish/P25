class paper {
	constructor(x,y){
        var options = {
		   isStatic : false,				
		   'restitution': 0.3,
           'friction': 0,
           'density': 1.2 
        }
		
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("paper.png");
    
        World.add(world,this.image);
    }
    display() {
      var pos = this.body.position; 
      //var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       //rotate(angle);
       imageMode(CENTER);
       image(this.image,50,50, this.width, this.height);
       pop();
    }
}    
function keyPressed() {
   if(keyCode === UP_ARROW) {       
    
      Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:130,y:-145});   
 
   }
} 