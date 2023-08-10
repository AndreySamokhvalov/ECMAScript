/* Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript */

class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo(){
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Grade: ${this.grade}
        `);
    }
}

const student1 = new Student("Jhon Smith",16,"10th grade");
const student2 = new Student("Jane Doe",17,'11th grade');

student1.displayInfo();

student2.displayInfo();