class Wall{
    constructor(x, y, width, height){
        var wall_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, wall_options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }

    display(){
        //create the striker
        rectMode(RADIUS);
        fill("white");

        noStroke();

        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}