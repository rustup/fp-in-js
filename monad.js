var join = x=>x.__value();

class IO {
    constructor(f) {
        this.__value = f;
    }


    map(f) {
        return IO.of(f(this.__value()));
    }


    chain(f) {
       // return f(this.__value()).join();
       //return console.log(f(this.__value()).join())
        // return this.compose(f, this.join.bind(this))(this.__value());
        //console.log( this.compose(f, this.join.bind(this) )(100) );
        return  this.compose(f, join )(100) ;
    }
    compose(f,g) {
        return x=>g(f(x));
    }
    join() {
        return this.__value();
    }

    static of (x)  {
        return new IO(() =>x);
    }
}
console.log(IO.of(100).join());
console.log(IO.of(100).chain(x=>IO.of(x+1)));
//    /Users/sensetime/javascript/monad.js:7
//return this.__value();
//    ^
//TypeError: Cannot read property '__value' of undefined
//at join (/Users/sensetime/javascript/monad.js:7:21)
//at /Users/sensetime/javascript/monad.js:15:23
//at IO.chain (/Users/sensetime/javascript/monad.js:20:42)
//at Object.<anonymous> (/Users/sensetime/javascript/monad.js:30:24)
//at Module._compile (module.js:635:30)
//at Object.Module._extensions..js (module.js:646:10)
//at Module.load (module.js:554:32)
//at tryModuleLoad (module.js:497:12)
//at Function.Module._load (module.js:489:3)
//at Function.Module.runMain (module.js:676:10)
