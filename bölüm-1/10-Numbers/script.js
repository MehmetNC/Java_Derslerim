//Numbers

let sonuç;

sonuç=10;
sonuç="10";
sonuç=Number("10");
sonuç=parseInt("10.7");
sonuç=parseFloat("10.7");
sonuç=parseInt("10a");
sonuç=parseInt("a10");
sonuç=isNaN("10a");// is not a number?
sonuç=Number.isInteger(10.5);

let sayi=10.12355;

sonuç=sayi.toPrecision(5);
sonuç=sayi.toFixed(2);
sonuç=Math.round(2.4);
sonuç=Math.round(2.6);
sonuç=Math.ceil(2.2);
sonuç=Math.floor(2.2);
sonuç=Math.sqrt(25);







console.log(typeof sonuç);
console.log(sonuç);