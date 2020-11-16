class Box
{
    constructor(x,y,width,height){

        var option = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.width = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        fill('blue')
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}
