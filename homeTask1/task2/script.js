/* Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
increment и decrement. Метод increment должен увеличивать значение счетчика на 1,
 а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

function counter() {
    let count = 0;
    function increment() {
      count++;
      console.log(count);
    }
    function decrement() {
      count--;
      console.log(count);
    }
    return {
      increment: increment,
      decrement: decrement,
    };
  }
  
  let counter1 = counter();
  counter1.increment(); 
  counter1.increment(); 
  counter1.decrement(); 
  