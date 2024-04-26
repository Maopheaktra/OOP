class Airport{
    constructor(
        private name:string, 
        private gate:Gate[]=[],
        private route:Route[]=[],
        // private aeroplan:Aeroplan[]=[]
    ){
        this.name = name;
        
    }
    getName(){
        return this.name;
    }
    addGate(gate:Gate){
       return this.gate.push(gate)
    }
    addRoute(route:Route){
       return this.route.push(route)
    }
    // addAeroplane(aeroplane: Aeroplane){
        // return this.airplane.push(airplane)
    // }

}