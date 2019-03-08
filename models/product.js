path = require('path')
        let products = [];
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json' );

const fs = require('fs')
module.exports = class Product{
    constructor(t){
        this.title = t;

    }
    
    save(){
        fs.readFile(p, (err, fileContent) =>{
            console.log(fileContent)

            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this)
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    if(err)
                    console.log(err)
                });
            
        });
    };

    static fetchAll(cb){
        fs.readFile(p, (err, fileContent)=>{
            if(err){
            console.log("error reading file")
            cb([])
            }
            else{
                
            cb(JSON.parse(fileContent))
            }
        })
    }
}