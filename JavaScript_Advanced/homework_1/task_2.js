/*Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/



const data = new Map();
const dishes = new Map();
dishes.set("Маргарита", "Пицца");
dishes.set("Пепперони", "Пицца");
dishes.set("Три сыра", "Пицца");
dishes.set("Филадельфия", "Суши");
dishes.set("Калифорния", "Суши");
dishes.set("Чизмаки", "Суши");
dishes.set("Сеякемаки", "Суши");
dishes.set("Чизкейк", "Десерт");
dishes.set("Тирамису", "Десерт");

const cheifs = new Map();
cheifs.set("Пицца", "Виктор");
cheifs.set("Суши", "Ольга");
cheifs.set("Десерт", "Дмитрий");



class Client {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }


}

class Manager {
    newOrder(client, ...order) {

        for (const value of order) {
            
            if (!dishes.has(value.name)) {
                return console.log(
                    `${value.type} "${value.name}" - такого блюда не существует.`
                ); 
            }
        }

        console.log(`Клиент ${client.firstname} заказал:`);

        for (const value of order) {
            Manager.clientInfo(client, dishes, cheifs, value, data); 
        }
    }
    static clientInfo(client, dishes, cheifs, value, data) {
        const dataKey = `${client.lastname} ${client.firstname} ${value.name}`;

        if (!data.has(dataKey)) {
            data.set(dataKey, value.quantity);
        } else {
            
            const dataValue = data.get(dataKey) + value.quantity;
            data.set(dataKey, dataValue);
        }

        return console.log(
            `${dishes.get(value.name)} "${value.name}" - ${data.get(
        dataKey
      )}; готовит повар ${cheifs.get(value.type)}`
        );
    }
    constructor(data) {

        this.data = data;
    }


}

const manager = new Manager(data);

manager.newOrder(
    new Client("Viktor"), { name: "Маргарита", quantity: 1, type: "Пицца" }, { name: "Пепперони", quantity: 2, type: "Пицца" }, { name: "Чизкейк", quantity: 1, type: "Десерт" }
);



const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
    clientPavel, { name: "Филадельфия", quantity: 5, type: "Суши" }, { name: "Калифорния", quantity: 3, type: "Суши" }
);

manager.newOrder(
    clientPavel, { name: "Филадельфия", quantity: 1, type: "Суши" }, { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" }
);

