//object properties

function Rectangle(name,wigth,heigt){
    this.name=name;
    this.heigt=heigt;
    this.wigth=wigth;
    this.area=function(){
        return this.wigth*this.heigt;
    }
}

const rect1=new Rectangle("Rectangle 1",10,5);
const rect2=new Rectangle("Rectangle 2",20,15);

//add property
rect1.color="red";

//remove property
delete rect1.color

rect2.perimeter=function(){
    return 2*(this.wigth+this.heigt);
}


console.log(rect1);
console.log(rect2);

console.log(rect1.area());
console.log(rect2.area());
console.log(rect2.perimeter());
