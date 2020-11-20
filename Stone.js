class Stone extends BaseClass {
    constructor(x,y) {

        super(x,y,50,50);
      var options = {
          
          isStatic: false,
          restitution: 0,
          friction: 1,
          density: 1.2
      }
      this.x=x;
      this.y=y;
      this.Image=loadImage("stone.png");
      }
    display(){
    //super.display();
    image(this.image,this.x,this.y,50,50);
  }
}
