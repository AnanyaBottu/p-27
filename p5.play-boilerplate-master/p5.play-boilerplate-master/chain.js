class Chain{
    constructor(A,B){
        var options = {
            bodyA:A,stiffness:0.05,
            bodyB:B,length:10
        }
         this.cons = Constraint.create(options);
        World.add(world,this.cons);
        


    }
}