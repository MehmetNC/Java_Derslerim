//objects

const product ={
    //prperties
    title:"Samsung S25",
    description:"Güzel bir telefon",
    price:7000,
    stcck:100,

    //methods
    display:function(){
        return `Ürün başlığı:${this.title} ürün açıklaması:${this.description} ürün fiyatı:${this.price}`;
    },
    is_active:function(){
        return (this.stcck>0) ? "Satışta":"stok yok";
    }
};

console.log(product.title);
console.log(product.description);
console.log(product.price);
console.log(product.display());
console.log(product.is_active());



