
    // obj = { "hello": 1 }
    // ES 5
    const key = "hello";
    const obj = {  };
    obj[key] = 1;

    const person = {};
    const name = "name"
    person[name] = "조현진"

    const kind = "plant";
    const animal = {}
    animal[kind] = "flower";

    console.log(person);
    console.log(animal);
    console.log(obj);
    console.log("------------- Es6")

    const person1 = {
        name: "조현진"
    }
    console.log(person1)
    /* es6
    * person1 = { [key]: value }
    * */
    var Person = {
        key: "hi"
    };

    // log(Person[key])
    log(Person["key"])
    Person["name"] = "johyeonjin"
    log(Person);

    log("객체 축약 표현")
    var x = 1; y = 2;
    const obj = {
        x: x,
        y: y
    }
    log("es 5  --- ", obj)

    const obj2 = { x, y }
    log("es 6 --- 동일한 이름으로 키 생략 가능 ", obj2)

    log("계산된 프로퍼티 이름")
    var prefix = "prop";
    var i = 0;
    var objPrefixEs5 = {}
    objPrefixEs5[prefix + "-" + ++i] = i;
    objPrefixEs5[prefix + "-" + ++i] = i;
    objPrefixEs5[prefix + "-" + ++i] = i;
    log("es 5  --- objPrefixEs5", objPrefixEs5)


    const prefix2 = "prop";
    let j = 0
    const objPrefixEs6 = {
        [`${prefix2}-${++j}`]: j,
        [`${prefix2}-${++j}`]: j,
        [`${prefix2}-${++j}`]: j

    }
    console.log("es 6 --- objPrefixEs6", objPrefixEs6)
    log("함수");

    const person2 = {
        name: "hj",
        talk: function () {
            console.log("es5", this.name)
        }
    }

    const person3 = {
        name: "jhj",
        talk() {
            console.log(" es 6", this.name)
        }
    }
    person2.talk();
    person3.talk();
