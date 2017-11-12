
//map是打通箱内数据和箱外函数的通道

class Container {
    constructor(f) {
        this.__value = f;
    }

    map(f) {
        return Container.of(f(this.__value()));
    }

    static of(x) {
        return new Container( () => x);
    }
}

var add1 = (x)=>x+1;
console.log(Container.of(100).map(add1));
