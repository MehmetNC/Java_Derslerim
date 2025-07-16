//Uygulama:Constructor

function Player(username){
    this.username=username;
    this.score=0;
    this.start=function(){
        return `${username} oyuna başladı.`;
    },
    this.stop=function(){
        return `${username} oyundan çıktı.`;
    },
    this.pause=function(){
        return `${username} oyunu durdurdu.`;
    },
    this.add_score=function(val){
        this.score +=val;
    },
    this.showe_score=function(){
        this `${this.username} isimli oyuncunun scoru ${this.score}`;
    }
}

const oyuncu1=new Player("Ahmet");
const oyuncu2=new Player("Çınar");
const oyuncu3=new Player("Yeliz");

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());

console.log(oyuncu1.showe_score());
oyuncu1.add_score(50);
console.log(oyuncu1.showe_score());
console.log(oyuncu2.showe_score());
console.log(oyuncu3.showe_score());

