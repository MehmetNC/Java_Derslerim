//constructor
//function constructor
function Product(title,description,price,stock){
    //prooerties
    this.title=title;
    this.description=description;
    this.price=price;
    this.stock=stock;
    //methods
    this.display=function(){
        return `Ürün başlığı:${this.title} ürün açıklaması:${this.description} ürün fiyatı:${this.price}`;
    },
    this.is_active=function(){
        return (this.stock>0) ? "Satışta":"stok yok";
    }
}
//object
const product1=new Product("Samsung S25","iyi telefon",5000,50);
const product2=new Product("Samsung S26","güzel telefon",6000,60);
const product3=new Product("Samsung S27","üst telefon",7000,70);

// console.log(product1.title,product1.description,product1.price,product1.stock);
// console.log(product2.title,product2.description,product2.price,product2.stock);
// console.log(product3.title,product3.description,product3.price,product3.stock);

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());
