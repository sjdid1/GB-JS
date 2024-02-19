// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число



for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} это нуль`);
    } else if (i % 2 === 0) {
        console.log(`${i} это четное число`);
    } else {
        console.log(`${i} это нечетное число`);
    }
}



// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]



let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.splice(3, 2);
console.log(numbers);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3




let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}

let sum = randomArray.reduce((acc, curr) => acc + curr, 0);
let minNumber = Math.min(...randomArray);
let hasNumberThree = randomArray.includes(3);

console.log("Сгенерированный массив:", randomArray);
console.log("Сумма элементов массива:", sum);
console.log("Минимальное число массива:", minNumber);
console.log("Есть ли число 3 в массиве:", hasNumberThree);


 
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx




for (let i = 1; i <= 20; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "x";
    }
    console.log(row);
}
