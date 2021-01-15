//extends = make the bird class as child class of base class(parent class)

class Bird extends BaseClass{
  constructor(x,y){
    // super transfers all the properties from parent class to child class(should be first statement in the constructor
    super(x,y,50,50);
    //special property of the bird
    this.image = loadImage("sprites/bird.png");

  }
  display(){
    //special property of the bird
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //function over riding=same name function in parent and child class,it is called to display the world
    super.display();
  }
}