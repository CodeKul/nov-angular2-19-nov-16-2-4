export class Car {
    
    private carName : String;
    private price : Number; // wrapper
    private speed : number; // data type

    constructor(carName : String, price : Number, speed : number){
        this.carName = carName;
        this.price = price;
        this.speed = speed;
    }
    public getCarName = () : String => this.carName;

    public get CarName() : String {
        return this.CarName
    }

    public set CarName(carName : String) {
        this.carName = carName;
    }

    public increaseSpeed () : number {
        console.log('Car Method ');
        return ++this.speed;
    }
}