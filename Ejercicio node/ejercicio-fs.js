const fs = require('fs');

var obj=JSON.parse(fs.readFileSync('products-ecommerce.json', 'utf8')).items;

let filtered = (b)=> b.filter(b=>{return b.price.amount>10000});

fs.writeFileSync('filtered-products-ecommerce.json',JSON.stringify(filtered(obj,null,2)))

//console.log(obj);
console.log(filtered(obj))



