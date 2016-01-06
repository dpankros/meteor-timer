
Timer = class Timer{
  constructor(delay, callback){
    this._delay = delay;
    this._fn = callback || function nullFn(a, data){};

  }

  start(opt_data) {
    if (this.timerId) this.stop();

    var that = this;
    var cb = function(){
      that.callback.call({}, that, that.data);
    }
    this._timerId = setTimeout(cb, this.delay, opt_data);
  }

  startPeriodic(opt_data) {
    if (this.timerId) this.stop();

    var that = this;
    var cb = function(){
      that.callback.call({}, that, that.data);
    }
    this._timerId = setInterval(cb, this.delay, opt_data);
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }

  restart(opt_data) {
    this.stop();
    this.start();
  }

  get timerId(){
    return this._timerId;
  }

  set timerId(val){
    this._timerId = val;
  }

  get delay(){
    return this._delay;
  }

  set delay(val){
    if (this.timerId) this.stop();
    this._delay = val;
  }

  get callback(){
    return this._fn;
  }

  set callback(val){
    this._fn = val;
  }
};