//ap是以同等的身份看待函数和要被处理的数据
//map 提取装箱的数据
//applicator 将装箱的操作也提取出来
//monad 添加了降维操作

class Container {
    constructor(f) {
        this.__value = f;
    }

    map(f) {
        return Container.of(f(this.__value()));
    }

    ap(other) {//__value() == add
        //__value == ()=>add
        return other.map(this.__value());
    }

    static of(x) {
        return new Container( () => x );
    }

    join() {
        return this.__value();
    }
}

var add = x => x+3;
var x = Container.of(add);
var y = Container.of(100);
console.log(x.ap(y).__value());
