//Strings metods

var kursAdi="  Komple Uygulamalı Web Geliştirme Eğitimi  ";
var sonuç;

sonuç= kursAdi.toLowerCase();
sonuç= kursAdi.toUpperCase();
sonuç= kursAdi.length;
sonuç= kursAdi[0];
sonuç= kursAdi.slice(0,6);
sonuç= kursAdi.slice(10);
sonuç= kursAdi.slice(-10);
sonuç= kursAdi.slice(-10,-5);
sonuç= kursAdi.replace("Eğitimi","Kursu");
sonuç= kursAdi.trim();
sonuç= kursAdi.indexOf("Web");



console.log(sonuç);