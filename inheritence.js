class wife{
    constructor()
    {
        this.wife='Mimu';
    }
}
class Child extends wife{
    constructor(name){
        super();
        this.name = name;
    }
    getfullname()
    {
        return this.name+" "+this.wife;
    }
}
const baby = new Child('Siam');
const baby2 = new Child('Simu');
console.log(baby);
console.log(baby2);
console.log(baby2.getfullname());