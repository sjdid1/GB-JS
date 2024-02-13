// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени



function cubeAndSum(num) {
    const cube = num ** 3;
    const sum = (2 ** 3) + (3 ** 3);
    
    console.log(`Cube of ${num} is: ${cube}`);
    console.log(`Sum of 2^3 powers and 3^3 powers is: ${sum}`);
}

cubeAndSum(2);



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"



function calculateWages() {
    const userInput = prompt("Введите число:");
    
    if (isNaN(userInput)) {
        console.log("Данные некорректны. Проверьте данные");
    } else {
        const number = parseFloat(userInput);
        const taxAmount = number * 0.13;
        const wagesAfterTax = number - taxAmount;
        
        console.log(`Размер заработной платы за вычетом налогов равен ${wagesAfterTax}`);
    }
}

calculateWages();



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел



function findMaxAmongThreeNumbers() {
    const num1 = parseFloat(prompt("Введите первое число:"));
    const num2 = parseFloat(prompt("Введите второе число:"));
    const num3 = parseFloat(prompt("Введите третье число:"));

    let maxNumber = num1;

    if (num2 > maxNumber) {
        maxNumber = num2;
    }

    if (num3 > maxNumber) {
        maxNumber = num3;
    }

    return maxNumber;
}

const maxNumber = findMaxAmongThreeNumbers();
console.log(`Максималье число из введенных: ${maxNumber}`);



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(2, 6)); 
console.log(subtract(6, 2)); 
console.log(multiply(2, 6)); 
console.log(divide(6, 2)); 