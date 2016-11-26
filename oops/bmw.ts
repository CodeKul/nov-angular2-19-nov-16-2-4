import {Car} from './car'

export class Bmw extends/* is a car*/  Car {
    private scale : number;

    constructor(carName : String, price : Number, speed : number, scale : number){
        super(carName,price,speed);
        this.scale = scale;
    }

    public increaseSpeed () : number {
        console.log('Bmw method');
        return super.increaseSpeed() + this.scale;
    }

    public scaleFactor() : void {
        this.increaseSpeed() + this.scale;
    }
}