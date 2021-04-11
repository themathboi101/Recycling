class Paper{
    constructor(x,y){
         var options={
            isStatic:false,
             'density':1.2,
             restitution:0.3,
             friction:0,
            } 
            this.body=ellipse(x,y,50,options);
            //this.width=20;
            //this.height=50;
            this.radius=40;                               
            this.image=loadImage("paper.png");
            World.add(world, this.body);
    }
    dislpay(){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

    }
 keyPressed(){
     if(keyCode===UP_ARROW){
         Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
     }
 } 
}