class Test {
    constructor() { }
    start() {
        console.log('test');
    }
    stop() { }
    //static variable declaration
    static get DEFAULT_CAR_NAME() {
        return "Bananas-Benz";
    }
    static set DEFAULT_CAR_NAME(a) {
        console.log('NO NO NO');
    }
}

const test = new Test()

export default test

export { Test }