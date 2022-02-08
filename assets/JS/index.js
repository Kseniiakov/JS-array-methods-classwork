// 1. Создать пустой массив, с помощью push
// добавить в него цифры от 1 до 15

// const arr = [];

//  for (i = 1; i <=15; i++) {
//    arr.push(i);
//  }

//  console.log(arr);

//  2. Добавить значение 0 в начало в массив из пред задания

// arr.unshift(0);

// console.log(arr);

// 3. Удалить один элемент с конца из массива пред задания

// arr.pop();

// console.log(arr);

// 4. Удалить один элемент где нибудь в середине (splice) 
// из массива пред задания

// arr.splice(7, 1);

// console.log(arr);

// 5. Добавить цифру 5 в середину массива (splice) из пред задания

// arr.splice(7, 0, 5);

// console.log(arr);

// 6. Клонировать весь массив (slice или Object.assign) из пред задания

// const cloneArr = arr.slice();

// console.log(cloneArr);

// 7. У клона массива пред задания удалить первую половину элементов 
// (индексы от 0 до array.length/2 - 1)

// cloneArr.splice(0, cloneArr.length/2);

// console.log(cloneArr);

/////////////////////////////////////////////////////////////////////////

// 8. Создать пустой массив на 8 empty ячеек

// const arr = Array(8);

// 9. Заполнить массив от половины (от индекса 3) 
// до конца значениями null (fill),

// arr.fill(null, 3)

// console.log(arr);

// 10. Отфильтровать от пустых ячеек (forEach+push или filter)

// const filtArr = arr.filter((value) => {
//   return true;
// })

// console.log(filtArr);

/////////////////////////////////////////////////////////////////////////

// 11. Создать массив с числами от 1 до 10. На основе него 
// создать массив квадратов значений (map).

// const arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr);

// const map = arr.map (elem => Math.pow(elem, 2));

// console.log(map);

// 12. Перевести массив из предыдущего задания в строку, 
// с разделителем " && " (join)

// const strMap = map.join( " && ");

// console.log(strMap);

/////////////////////////////////////////////////////////////////////////

// 13. * Создать массив Склада. Заполнить массив от 3 до 5 продуктами
// Каждый продукт имеет свойства - наименование, базовая цена, 
// колво на складе.

const stock = [];

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

  for (i=0; i < 5; i++) {
    stock.push(new Product(`name${i}`, Math.round(Math.random()*100),Math.round(Math.random()*15)));
  }
  console.log(stock);

// 14. * Написать функцию которая будет фильтровать массив продуктов по количеству на складе больше 5 шт . 
// И потом сортировать по возрастанию цены. (filter().sort()).
// Функция возвращает новый массив - результат фильтрации.

function sortProduct () {
  const result = stock.filter(value => (value.quantity > 5)); // Фильтрация по количеству
  result.sort((a, b) => (a.price) - (b.price)); // Сортировка по возрастанию цены
  return result;
};

const funcResult = sortProduct();

// console.log(funcResult);

// 15. * Создать массив для Корзины покупок.
// Спрашивать у пользователя ИД продукта (индекс массива склада) 
// который он хочет положить в Корзину покупок.
// Клонировать_ в Корзину обьект продукта, взятый из массива Склада 
// (по ИД выбранному пользователем).

// const basket = [];

// const idUser = prompt('Укажите id продукта');

// function userBasket(id) {
//   basket.push(stock.at(id));
//   return basket;
// }

// const resultBasket = userBasket(idUser);

// console.log(resultBasket);

// 16. * Создать функ. конструктор Пользователь.
// Принимать параметры - username, age, isMale, password.

// Циклом создать 5 пользователей (new User) и поместить каждого в массив users.
// Имена, возрасты, пол, и пароль случайны (пусть зависят от индекса 
// ("username1", "username2" ...)

function User(name, age, ) {

}