class Mango  extends BaseClass {
    constructor(x,y) {
      
      super(x,y,50,50);
      var options = {
          
          isStatic: true,
          restitution: 0,
          friction: 1
          
      }
      this.x=x;
      this.y=y;
      this.image=loadImage("mango.png");
      }
    display(){
    //super.display();
    image(this.image,this.x,this.y,50,50);
  }
}