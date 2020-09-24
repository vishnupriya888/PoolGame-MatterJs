class Ball{
    constructor(x, y, r, g, b, num){
        var ball_options = {
            frictionAir: 0.015,
            restitution: 1
        }

        this.body = Bodies.circle(x, y, 25, ball_options);
        this.width = 25;
        
        this.r = r;
        this.g = g;
        this.b = b;
        
        this.num = num;
        this.inPlay = true;

        World.add(world, this.body);
    }
    display(){
        //make them go bye
        if(this.body.position.x >= 900 && this.body.position.x <= 950 && this.body.position.y >= 0 && this.body.position.y <= 90 ||
            this.body.position.x >= 900 && this.body.position.x <= 950 && this.body.position.y >= 610 && this.body.position.y <= 700 ||
            this.body.position.x >= 0 && this.body.position.x <= 50 && this.body.position.y >= 0 && this.body.position.y <= 90 ||
            this.body.position.x >= 0 && this.body.position.x <= 50 && this.body.position.y >= 610 && this.body.position.y <= 700 ||
            this.body.position.x >= 485 && this.body.position.x <= 515 && this.body.position.y >= 0 && this.body.position.y <= 90 ||
            this.body.position.x >= 485 && this.body.position.x <= 515 && this.body.position.y >= 610 && this.body.position.y <= 700){
            Matter.World.remove(world, this.body);
            if(this.inPlay === true){
                window.score++;
                this.inPlay = false;
            }
        }else{
            //create the striker
            ellipseMode(RADIUS);
            fill(this.r, this.g, this.b);

            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);

            stroke("black");
            strokeWeight(3);

            circle(0, 0, this.width);

            noStroke();
            fill("white");
            circle(0, 0, this.width - 8);

            fill("black");
            textSize(30);
            textAlign(CENTER);
            text(this.num, 0, 10);

            pop();
        }
    }
}