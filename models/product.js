const products = [];
path = require('path')
module.exports = class Product{
    constructor(t){
        this.title = t;

    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename));
    }

    static fetchAll(){
        return products;
    }
}