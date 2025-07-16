//Strings app

let url="https://www.sadikturan.com/";
let kursAdi="Komple Uygulamalı Web Geliştirme Kursu";

let sonuç;

sonuç=url.length;
sonuç=kursAdi.split(' ');
sonuç=url.startsWith("https");
sonuç=kursAdi.indexOf("Eğitimi");
kursAdi=kursAdi.toLowerCase();
kursAdi=kursAdi.replaceAll(' ','-');
kursAdi=kursAdi.replace('ş','s').replace('ı','i');
sonuç=`${url}`+`${kursAdi}`;


console.log(sonuç);