Imp Links for JS Learn

https://www.aplyca.com/en/blog/micro-frontends-what-are-they-and-when-to-use-them
https://webpack.js.org/concepts/why-webpack/
https://medium.com/@mustafa.abdelmogoud/how-the-browsers-understand-javascript-d9699dced89b


const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const product = shoppingCart.reduce((productGrp, product)=>{
const name = product.name;
if(productGrp[name]==null){
	productGrp[name]= [];
}
productGrp[name].push(product);

return productGrp;  

},{})

console.log(product )

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const newObj = [obj1,obj2,obj3].reduce((acc,curr)=>{

console.log("11",acc, curr)

return {...acc, ...curr} 
},{})

console.log(newObj)
