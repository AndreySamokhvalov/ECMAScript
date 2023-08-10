/* Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
Класс должен иметь методы для установки и получения значений свойств, 
а также метод для вывода информации о студенте. */

class Student {
  #name;
  #age;
  #average;

  constructor(name, age, average) {
    this.#name = name;
    this.#age = age;
    this.#average = average;
  }
  setName(name) {
    this.#name = name;
  }
  setAge(age) {
    this.#age = age;
  }
  setAverageGrade(average) {
    this.#average = average;
  }
  displayInfo() {
    console.log(`
        Имя: ${this.#name}
        Возраст: ${this.#age}
        Средний бал: ${this.#average}`);
  }
}

const student = new Student();
student.setName("Питер Паркер");
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
