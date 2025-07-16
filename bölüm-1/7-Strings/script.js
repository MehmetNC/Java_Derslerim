//Strings

var ad='Mehmet Nur';
var soyad='CEYLAN';
var yas=23;
var sehir='Şanlıurfa';

var mesaj=('Benim adım '+ad+' ve soyadım '+soyad+'.'+sehir+'\'da yasıyorum.'+'Emekliliğe '+(65-yas)+' yılım kaldı.');

//Template Strings
mesaj =`Benim adım ${ad} ve soyadım ${soyad}.${sehir}'da yasıyorum.Emekliliğe ${65-yas} yılım kaldı.`;

console.log(mesaj);