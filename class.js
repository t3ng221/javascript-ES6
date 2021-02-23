class student{
    constructor(sID,sName)
    {
        this.id =sID;
        this.name=sName;
        this.school='Abdur Rob';
    }
}
const student1= new student(12,"Sazedur");
const student2 =new student(24,'Rahman');
console.log(student1,student2);
console.log(student1.id,student2.name);