//import { EventEmitter } from 'events';

import {EventEmitter} from './eventEmitter.mjs';
export const TICK = 'my-ticking-event-name';
export const START = 'clock-started';
export const STOP = 'clock-stopped';

export default class Clock extends EventEmitter {

    // static TICK = 'my-ticking-event-name';
    
    #intervalID = -1;
    #count = 0;

    constructor(ms){
        super();
        this.mili = ms;
        
    }

    start(){
        this.#intervalID = setInterval(this.#tick, this.mili);
        console.log("my intervalID?=",this.#intervalID); 
        this.emit(START,this.#count);
    }
    stop(){
        clearInterval(this.#intervalID);
        this.emit(STOP,this.#count);
    }
    #tick = ()=> {
        this.#count++;
        this.emit(TICK,this.#count);
    }

}