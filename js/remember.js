$(document).ready(function() {

console.log('level ' + sessionStorage['level']);
   
var fruits_berries = [
 'Абрикос', 'Ананас', 'Апельсин', 'Арбуз', 'Боярышник', 'Ежевика', 'Грейпфрут',
 'Слива', 'Черная смородина', 'Красная смородина', 'Виноград', 'Вишня'
];

var vegetables = ['Баклажан', 'Бобы', 'Брокколи', 'Чеснок', 'Фасоль', 'Горох',
 'Кабачок', 'Капуста', 'Картофель', 'Морковь', 'Огурец', 'Тыква'
];

var mushrooms = [
 'Белый гриб', 'Груздь', 'Лисички', 'Маслята', 'Опята', 'Подберезовик',
 'Подосиновик', 'Рыжик', 'Шампиньоны', 'Сморчок', 'Сыроежка', 'Трюфель'
];

var eggs_milk = [
 'Куриное яйцо', 'Сливочное масло', 'Молоко', 'Перепелиное яйцо',
 'Сгущенка', 'Сметана', 'Сыр Чеддер', 'Сыр Фета', 'Сыр Моцарелла', 'Сыр Пармезан',
 'Сыр Российский', 'Творог'
];

var meat = [
 'Бекон', 'Буженина', 'Говяжий язык', 'Гусиная печень', 'Колбаса Сервелат', 'Охотничьи колабски',
 'Куриные окорочка', 'Свиные сардельки', 'Сосиски молочные', 'Свиной фарш', 'Свиной окорок', 'Свиные ребрышки'
];

var fish = [
 'Анчоусы', 'Черная икра', 'Кальмар', 'Карась', 'Карп', 'Крабовые палочки', 'Красная икра',
 'Креветки', 'Лобстер', 'Морская капуста', 'Краб', 'Осьминог'
];

var nuts = [
 'Арахис', 'Чернослив', 'Цукаты', 'Финики', 'Фисташки', 'Грецкий орех', 'Изюм', 'Кешью', 'Кокос',
 'Курага', 'Миндаль', 'Семечки подсолнуха'
];

// Time levels
var level_1_time = 10;
var level_2_time = 15;
var level_3_time = 20;
var level_4_time = 30;
var level_5_time = 45;

// Amount levels

var level_1_amountOfItems = 5;
var level_2_amountOfItems = 7;
var level_3_amountOfItems = 9;
var level_4_amountOfItems = 11;
var level_5_amountOfItems = 13;
var level_6_amountOfItems = 16;
var level_7_amountOfItems = 19;
var level_8_amountOfItems = 22;
var level_9_amountOfItems = 25;
var level_10_amountOfItems = 28;

// Create List

var global = null;

function randomList(amountOfItems, numberOfSets) {

 if( $('#listOfItems').html() !== '' ) {
  return;
 } else {
 
  var arr = [];
 var obj = {};
 
 var amount1 = amount2 = amount3 = amount4 = amount5 = amount6 = amount7 = 12;
 
 for(var i=0; i<amountOfItems; i++) {
  var whichArr = Math.floor(Math.random()*numberOfSets);
  
  switch(whichArr) {
   case 0:
    arr = fruits_berries;
	var key = arr.splice(getItem(amount1), 1);
	amount1--;
	break;
   case 1:
    arr = vegetables;
	var key = arr.splice(getItem(amount2), 1);
	amount2--;
	break;
   case 2:
    arr = eggs_milk;
	var key = arr.splice(getItem(amount3), 1);
	amount3--;
	break;
   case 3:
    arr = mushrooms;
	var key = arr.splice(getItem(amount4), 1);
	amount4--;
	break;
   case 4:
    arr = meat;
	var key = arr.splice(getItem(amount5), 1);
	amount5--;
	break;
   case 5:
    arr = fish;
	var key = arr.splice(getItem(amount6), 1);
	amount6--;
	break;
   case 6:
    arr = nuts;
	var key = arr.splice(getItem(amount7), 1);
	amount7--;
	break;
   default:
    break;
  }
 
  obj[key] = true;
 }
 
 function getItem(x) {
  var whichItem = Math.floor(Math.random()*x);
  return whichItem;
 }
  
  totalArr = Object.keys(obj);
 
  for(var i=0; i<totalArr.length; i++) {
   $('#listOfItems').append('<li>' + totalArr[i] + '</li>');
  }
  
  sessionStorage.setItem('arr', totalArr);
  
 }
}

// Create Timer

function createTimer(level) {

 if( $('#listOfItems').html() !== '' ) {
  return;
 } else {
  
  var i = level;

  time = setInterval(function() {
 
  if(i >= 0) {
   $('#timerRemember h2 span').text(i);
   i--;
  } else {
  
   switch( sessionStorage['level'] ) {
    case '1':
	case '2':
	 window.location.assign('shopping.html');
	 break;
	case '3':
	case '4':
	 window.location.assign('shopping_2.html');
	 break;
	case '5':
	 window.location.assign('shopping_3.html');
	 break;
	case '6':
	 window.location.assign('shopping_3.1.html');
	 break;
	case '7':
	case '8':
	 window.location.assign('shopping_4.html');
	 break;
	case '9':
	case '10':
	 window.location.assign('shopping_5.html');
	 break;
	default:
	 break;
   }
   
  }
 }, 1000); 
 
 }
}

// Clear timer and location


$('#goShoppingButton').click(function() {
  
  clearInterval(time);
  
  switch( sessionStorage['level'] ) {
    case '1':
	case '2':
	 window.location.assign('shopping.html');
	 break;
	case '3':
	case '4':
	 window.location.assign('shopping_2.html');
	 break;
	case '5':
	 window.location.assign('shopping_3.html');
	 break;
	case '6':
	 window.location.assign('shopping_3.1.html');
	 break;
	case '7':
	case '8':
	 window.location.assign('shopping_4.html');
	 break;
	case '9':
	case '10':
	 window.location.assign('shopping_5.html');
	 break;
	default:
	 break;
   }
  
});


$('.startGame').click(function() {

 switch( sessionStorage['level'] ) {
  case '1':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
   
   createTimer(level_1_time);
   randomList(level_1_amountOfItems, 2);
   break;
  case '2':
   
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_1_time);
   randomList(level_2_amountOfItems, 2);
   break;
  case '3':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_2_time);
   randomList(level_3_amountOfItems, 4);
   break;
  case '4':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_2_time);
   randomList(level_4_amountOfItems, 4);
   break;
  case '5':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_3_time);
   randomList(level_5_amountOfItems, 5);
   break;
  case '6':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_3_time);
   randomList(level_6_amountOfItems, 5);
   break;
  case '7':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_4_time);
   randomList(level_7_amountOfItems, 6);
   break;
  case '8':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_4_time);
   randomList(level_8_amountOfItems, 6);
   break;
  case '9':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_5_time);
   randomList(level_9_amountOfItems, 7);
   break;
  case '10':
  
   $('.label').html('Запомните список товаров, который Вам необходимо будет купить');
   $('.startGame').hide();
   $('#timerRemember').show();
   $('.submitButton').show();
  
   createTimer(level_5_time);
   randomList(level_10_amountOfItems, 7);
   break;
  default:
   return;
 }

});

 
 
 
});