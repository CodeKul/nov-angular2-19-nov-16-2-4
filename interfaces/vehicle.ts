import { GpsListener } from './gpslistener';

export class Vehicle implements GpsListener{

    private speed : Number = 10; // state

    public calculateSpeed() : Number { // behaviour
        return this.speed;
    }
}