export  class EventEmitter {
    /**
     * Essential tasks
     **/
    #my_dict;
    #onse;
    constructor(){
     this.#my_dict = {}; //string to function
     this.#onse = {};
    }
    on(str,some_func) {
      //adds a callback to be called when an event occurs
      //need to make it cleaner
      this.#my_dict[str] = some_func;

    }
    off(str,some_func) {
      //removes a callback from a given event name
      delete this.#my_dict[str];
    }
    emit(str,...args) {
      //calls all callbacks registered to a given event
      //takes an event name, and any payload/s to pass to its registered callbacks.
      if(this.#onse[str]){ //for onse ,im kayam yaase
          this.#onse[str](...args);
          this.off(str,this.#onse[str]);

      }
      else if(this.#my_dict[str]){
        this.#my_dict[str](...args);
      }
      else{
        throw new Error('No on function for this Emit');
      }

    }
  
    /**
     * Bonus tasks
     **/
    once(str ,some_func) {
      // adds a callback to be called when an event occures
      // same as `on` but happens only once!
      this.#onse[str] = some_func;

    }
    listeners() {
      // returns ALL callbacks of a given event name
      //i thing this is the implementation
      return Object.values(this.#my_dict);
    }
    eventNames() {
      // returns ALL event names
      return Object.keys(this.#my_dict); //arr of strings keys
    }
    removeAllListeners() {
      // removes all listeners of a given event name
      keys_arr = this.eventNames();
      for(const i=0 ;i<keys_arr.length;i++){

        this.off(keys_arr[i],this.#my_dict[keys_arr[i]]);


      }
    }
  }