const Victor = {
  name: "Виктор",
};
const Olga = {
  name: "Ольга",
};

const Dmitry = {
  name: "Дмитрий",
};

const Irina = {
  name: "Ирина",
};

const Mariya = {
  name: "Мария",
};

const Alexey = {
  name: "Алексей",
};

let cookers = new Map();
cookers.set("Виктор", "Пицца");
cookers.set("Ольга", "Суши");
cookers.set("Дмитрий", "Десерты");

cookers.forEach((dish, cook) => {
  console.log(`${cook} - специализация: ${dish}`);
});

const DmitryDishes = new Set();
DmitryDishes.add("Тирамису");
DmitryDishes.add("Чизкейк");

const OlgaDishes = new Set();
OlgaDishes.add("Суши 'Филадельфия'");
OlgaDishes.add("Суши 'Калифорния'");

const VictorDishes = new Set();
VictorDishes.add("Пицца 'Маргарита'");
VictorDishes.add("Пицца 'Пепперони'");

let cookersAndDishes = new Map();
cookersAndDishes.set(Dmitry, DmitryDishes);
cookersAndDishes.set(Olga, OlgaDishes);
cookersAndDishes.set(Victor, VictorDishes);

cookersAndDishes.forEach((cook, dish) => {
  cook.forEach((dishPref) => {
    console.log(`${dishPref} повар: ${dish.name}`);
  });
});

const orderedDishes = new Map();
orderedDishes.set(Irina, "Чизкейк");
orderedDishes.set(Mariya, "Суши 'Калифорния' и Пиццу 'Маргарита'");
orderedDishes.set(Alexey, "Пиццу 'Пепперони' и Тирамису");

orderedDishes.forEach((dish, client) => {
  console.log(`Клиент ${client.name} заказал: ${dish}`);
});

// Задание 2

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.
