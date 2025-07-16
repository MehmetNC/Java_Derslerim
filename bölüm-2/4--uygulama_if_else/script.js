//uygulama if/else

let sayı=70;
if(sayı>=50 && sayı<=100)
{
    console.log("Sayı50 ile 100 arasında bir sayıdır.");
}
else
{
    console.log("Sayı50 ile 100 arasında bir sayı değildir.");
}

let sayı1=10;
if(sayı1%2==0 && sayı1>0)
{
    console.log("sayı pozitif çift sayıdır.");
}
else
{
    console.log("sayı pozitif çift ssayı değildir.");
}

let x=10,y=20,z=30;
if(x>y && x>z)
{
    console.log("x en büyüktür.");
}
else if(y>x &&y>z)
{
    console.log("y en büyüktür.");
}
else if(z>x &&z>y)
{
    console.log("z en büyüktür.");
}

let vize1=50,vize2=60,final=70;

let ort=(vize1*0.4+vize2*0.42+final*0.6)
console.log(ort);

if(ort==50 || final==50)
{
    console.log("Dersten Geçti!!!");
}
else if(ort<50 && final==70)
{
    console.log("Dersten Geçti!!!");
}
else
{
    console.log("Dersten Kaldı!!!");
}