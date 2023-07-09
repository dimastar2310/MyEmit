import log from '@ajar/marker';
import Clock , { TICK, START, STOP } from './clock.mjs';


const rolex = new Clock(500);

rolex.on( TICK, onTick);
rolex.on( START, onStart);
rolex.on( STOP, onStop);

 rolex.start()

function onStart(count){log.magenta('starting clock', `begin with ${count}`);}
function onStop(count){log.magenta('enough is enough', `${count} times`);}
function onTick(count){
    log.info('my clock ticked', `${count} times`);
    if(count >= 5){
        rolex.stop();
    }
}