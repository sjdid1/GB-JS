/*
Задача

Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
*/


// 1. пишем функцию получения данных с api

const getData = async (URL) => {
    const responce = await fetch(URL);
    const data = await responce.json();
    return data;
}

// 2. в константу body получаем элемент body
const body = document.querySelector('body');
// 3. в константу task1 создаем и присваиваем элемент div, добавляем ему класс task-about-users и вставлем в конец body
const task1 = document.createElement('div');
task1.classList.add('task-about-users')
body.append(task1);

// 4. перед дивом task1 вставляем элементы h1 и h2(с задержкой в 2 сек)

task1.insertAdjacentHTML('beforebegin', '<h1>Мой самый главный супер скилл - дизайн </h1>');
setTimeout(() => task1.insertAdjacentHTML('beforebegin', '<h2>Так что извините</h2>'), 500);

//отсюда будем получать данные
const url = 'https://jsonplaceholder.typicode.com/users';

// 5. пишем ф-цию вывода юзеров
async function showUsers() {
    try {
        //сначала получаем данные и кладем их в массив
        const data = await getData(url);
        //console.log(data);

        // если хочу вывести данные после эффектной паузы в 2 секунды, то
        // вызываем settimeout (ф-ция, которая вызовет др ф-цию через время)ВНУТРИ try
        setTimeout(() => {
            // работаем с каждым элементом массива 
            // в див task1 добавляем новый  див с данными из массива
            data.forEach(element => {
                console.log(element);
                task1.insertAdjacentHTML('beforeend',
                    `
                <div class="user">
                <p class="user__info">Name:</p>
                <p>${element.name}</p>
                <p class="user__info">Username:</p>
                <p>${element.username}</p>
                <p class="user__info">E-mail:</p>
                <p>${element.email}</p>
                <p><a href="${element.website}">Website</a></p>
                <p class="user__info">Address:</p>
                <p>${element.address.city},${element.address.street}</p>
        </div>
            `)
            })
        }, 1000)
    }

    catch (error) {
        console.log(error);
    }
}
//вызываем showUsers
showUsers('https://jsonplaceholder.typicode.com/users');

//-------------------------------------------------------------ЗАДАЧА 2----------------------------------------
/*
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
*/

// 1. создаем див под собак

const dogs = document.createElement('div');
dogs.classList.add('dogs');
body.append(dogs);
const dogs1 = document.createElement('div');
dogs1.classList.add('dogs-1');
dogs.append(dogs1);
const dogs2 = document.createElement('div');
dogs2.classList.add('dogs-2');
dogs.append(dogs2);


// 2. тут тоже эффектное появление заголовка
setTimeout(() => task1.insertAdjacentHTML('afterend',
    `  <div class="dog-title">
    <h2>Задача про собак</h2>
    <div class="title-container">
        <p class="dog-task-heading">Здесь собаки картинки добавляются</p>
        <p class="dog-task-heading">Здесь картинка менятся</p>
    </div>
</div>`), 2000);

// 3.пишем функию показа собак
async function showDog(url, place) {
    try {
        // получаем данные с api
        const dog = await getData(url);

        //вставляем div с картинкой и кнопкой удалить, на кнопку вешаем обработчик, ф-ция deleteElement прописана ниже
        place.insertAdjacentHTML('beforeend',
            `
            <div class="dog_item">
            <div class="dog_picture">
            <img src="${dog.message}" alt=""></div>
            <button class="remove">Удалить</button>
        </div>
            `)
        const button = document.querySelectorAll('.remove');
        //console.log(button);
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', deleteElement);
        }
    }
    catch (error) {
        console.log(error)
    }
}

//устанавливаем счетчик, и запускаем ф-цию setinterval, которая будет запускать ф-цию
//showDog каждые 2 секунды, пока счетчик не дойдет до 10, затем закроет ее с помощью clearInterval

let i = 0;
let draw_dog = setInterval(() => {
    if (i == 10) {
        clearInterval(draw_dog);
    } else {
        showDog('https://dog.ceo/api/breeds/image/random', dogs1);
    }
    i++;
}, 2000);

/*
устанавливаем счетчик, и запускаем ф-цию setinterval, которая будет запускать ф-цию
showDog каждые 2 секунды, но перед этим сотрет див, в который вставила картинку при предыдущем вызове
пока счетчик не дойдет до 10, затем закроет ее с помощью clearInterval
*/
let j = 0;
let draw_dog_2 = setInterval(() => {

    const el = dogs2.lastElementChild; //тут получаем последний див (который создали в showDog)

    if (el != null && j != 10) { //если там не пусто, и если итерация не последняя
        el.remove();             //то удаляем его
    }
    if (j == 10) {               //если счетчик уже 10, останавливаем setInterval
        clearInterval(draw_dog_2);
    }
    else {
        showDog('https://dog.ceo/api/breeds/image/random', dogs2); //элзе рисуем нашу собаку
    }
    j++;

}, 2000);
/*
Удаление элемента по клику на кнопку
*/

function deleteElement(event) {// в функцию передаем событие

    console.log(event);//само событие
    console.log(event.target);//что за кнопка была нажата
    const myTatget = event.target;//присвоим эту кнопку в константу
    console.log(myTatget.previousElementSibling);// посмотрим, что у нас перед кнопкой
    console.log(myTatget.parentElement);//родитель кнопки(див, в котором кнопка)
    myTatget.parentElement.remove();//удалить див, в котором кнопка
}