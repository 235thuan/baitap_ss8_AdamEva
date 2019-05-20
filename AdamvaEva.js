let Apple= function() {
    this.weight=10;
    this.decrease= function () {
        this.weight--;
    };
    this.isEmpty= function() {
        return (this.weight===false);
    };
    this.getWeight= function() {
        return this.weight;
    }
};
let Human= function() {
    this.name ="";
    this.gender="";
    this.weight="";

    this.appleInfo="";
    this.isMale= function() {
        return (this.gender === true);
    };
    this.setGender=function() {
    return this.gender;
    };
    this.checkApple= function(apple) {
     return (apple.weight > 0);
    };
    this.eat= function(apple) {
        this.weight++;
        apple.weight--;
    };
    this.say= function(){
    alert("Ten cua toi la: "+this.name+" Toi la male: " +this.gender+ " Can nang cua toi la: "+this.weight)
    };
    this.getName= function(name) {
        this.name=name;
    };
    this.setName=function (){
        return this.name;
    };
    this.getWeight=function(weight) {
        this.weight=weight;
    };
    this.setWeight=function() {
        return this.weight
    }

};
humanA=new Human();
humanB=new Human();
appleA=new Apple();
appleB=new Apple();
 humanA.getWeight(60);
humanB.getWeight(40);
humanA.getName("Adam");
humanB.getName("Eva");
let originWeightA=humanA.setWeight();
let originWeightAppleA=appleA.getWeight();
humanA.isMale();
humanA.say();

function a () {
    if(humanA.checkApple(appleA)) {
        if(humanB.checkApple(appleB)) {
            humanB.eat(appleB);
        }
        humanA.eat(appleA);
    }
    alert("Ten toi la: "+humanA.name+ " Truoc khi an: "+ originWeightA+ "+"+ "can nang tao  "+ originWeightAppleA);
    alert("sau khi an: "+ humanA.name + humanA.weight + "+"+ "can nang tao  "+appleA.weight);
}
a();




