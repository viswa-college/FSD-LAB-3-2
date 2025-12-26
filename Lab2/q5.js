function updateProductInfo(obj) {
    const {id , name} = obj;
    const newObj = { id, name ,discount : 10 , inStock : true};
    return  newObj;
}
const product = {id: 101, name: 'Laptop', price: 1000, category: 'Electronics'} 
console.log(updateProductInfo(product))