(function f() {
    const foo = () => console.log(this);
    foo();
}).call({a: 1})