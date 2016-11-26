import { GpsListener } from './gpslistener';

export class Vehicle implements GpsListener {

    private speed : Number = 10; // state
    vendor = 'MeLayer';

    contructor(speed : Number, vendor : string){
        this.speed = speed;
        this.vendor = vendor;
    }
    public calculateSpeed() : Number { // behaviour
        return this.speed;
    }

    public locate() : void {
        console.log('In City');
    }
 }