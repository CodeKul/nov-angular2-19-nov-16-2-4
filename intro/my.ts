export class My {
    private carName : String;
    private price : Number

    constructor(carName : String, price : Number){
        this.carName = carName;
        this.price = price;
    }

    public whatsCarName() : String {
        return this.carName;
    }

    public whatsPrice = () : Number => this.price

    public get CarName() : String{
        return this.carName;
    }

    public set CarName(carName : String) {
        this.carName = carName;
    }
}


var myObj : My = new My('Mercedez',500);

var click = (abc : My) : String => {
    var nm : String = abc.CarName; 
    abc.CarName = 'Benz'
    console.log('Hello '+nm);
    return '';
};

click(new My('Audi',10));

/*var hi : String = 'Android';

function myName () : String {
    return 'hi';
}*/