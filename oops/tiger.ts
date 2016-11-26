import {Animal} from './animal'
import {Car} from './car'

export /*abstract*/ class Tiger extends Animal {

    public walk() : void {
        console.log('Tiger is walking');
    }

    public eatNonVeg() : void {

    }
}