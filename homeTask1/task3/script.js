// Напишем функцию, которая будет находить факториал числа с использованием рекурсии:

function factorial(num) {
    if (num===1){
        return 1;
    }
    return factorial(num-1)*num;
    
}
console.log(`${factorial(5)} - это факториал`);;