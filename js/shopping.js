$(document).ready(function() {

console.log( sessionStorage['level'] );

// Time Variables
var timeLevel = '';

switch( sessionStorage['level'] ) {
 case '1':
 case '2':
  timeLevel = 30;
  break;
 case '3':
 case '4':
  timeLevel = 75;
  break;
 case '5':
 case '6':
  timeLevel = 90;
  break;
 case '7':
 case '8':
  timeLevel = 120;
  break;
 case '9':
 case '10':
  timeLevel = 150;
  break;
 default:
  break;
}

createTimerShopping(timeLevel);

// Launch timer
  
function createTimerShopping(level) {
 var i = level;

 time = setInterval(function() {
  if(i >= 0) {
   $('#timer h2 span').text(i);
   i--;
  } else {
   clearInterval(time);
   getArr();
  }
 }, 1000);
}

// Clear timer

$('#shoppingDone').click(function() {
 clearInterval(time);
 getArr();
});

// Validation 

function getArr() {
 var divs = $('#basketInside').html();
 var arr = divs.split('</div>');
 arr.length = arr.length - 1;
 
 var newarr = [];
 
 for(var i=0; i<arr.length; i++) {
  var spliced = arr[i].slice(39, -4);
  var splited = spliced.split('/');
  newarr.push(splited[splited.length - 1]);
 }
 
 
 var convertedToString = convertToString(newarr);
 console.log('getArr() \n 1 : chosen set converted to string ' +  convertedToString);
 console.log('getArr() \n 2 : set from remember ' + sessionStorage['arr']);
 
 compareArray(convertedToString, sessionStorage['arr']);
 
}


// Converting to String

function convertToString(arr) {
 for(var i=0; i<arr.length; i++) {
  var item = arr[i];
  switch(item) {
  
   // Fruits and Berries
   
   case 'abrikos.png':
    item = 'Абрикос';
	arr[i] = item;
	break;
   case 'ananas.png':
    item = 'Ананас';
	arr[i] = item;
	break;
   case 'apelsin.png':
    item = 'Апельсин';
	arr[i] = item;
	break;
   case 'arbuz.png':
    item = 'Арбуз';
	arr[i] = item;
	break;
   case 'boyaryshnik.png':
    item = 'Боярышник';
	arr[i] = item;
	break;
   case 'ezhevika.png':
    item = 'Ежевика';
	arr[i] = item;
	break;
   case 'grejpfrut.png':
    item = 'Грейпфрут';
	arr[i] = item;
	break;
   case 'sliva.png':
    item = 'Слива';
	arr[i] = item;
	break;
   case 'smorodina-chernaya.png':
    item = 'Черная смородина';
	arr[i] = item;
	break;
   case 'smorodina-krasnaya.png':
    item = 'Красная смородина';
	arr[i] = item;
	break;
   case 'vinograd.png':
    item = 'Виноград';
	arr[i] = item;
	break;
   case 'vishnya.png':
    item = 'Вишня';
	arr[i] = item;
	break;
	
   // Vegetables
   
   case 'baklazhan.png':
    item = 'Баклажан';
	arr[i] = item;
	break;
   case 'bobi.png':
    item = 'Бобы';
	arr[i] = item;
	break;
   case 'brokkoli.png':
    item = 'Брокколи';
	arr[i] = item;
	break;
   case 'chesnok.png':
    item = 'Чеснок';
	arr[i] = item;
	break;
   case 'fasol-struchkovaya.png':
    item = 'Фасоль';
	arr[i] = item;
	break;
   case 'goroh.png':
    item = 'Горох';
	arr[i] = item;
	break;
   case 'kabachok.png':
    item = 'Кабачок';
	arr[i] = item;
	break;
   case 'kapusta.png':
    item = 'Капуста';
	arr[i] = item;
	break;
   case 'kartofel.png':
    item = 'Картофель';
	arr[i] = item;
	break;
   case 'morkov.png':
    item = 'Морковь';
	arr[i] = item;
	break;
   case 'ogurec.png':
    item = 'Огурец';
	arr[i] = item;
	break;
   case 'tykva.png':
    item = 'Тыква';
	arr[i] = item;
	break;
	
   // Mushrooms
   
   case 'belyj-grib.png':
    item = 'Белый гриб';
	arr[i] = item;
	break;
   case 'gruzd.png':
    item = 'Груздь';
	arr[i] = item;
	break;
   case 'lisichki.png':
    item = 'Лисички';
	arr[i] = item;
	break;
   case 'maslyata.png':
    item = 'Маслята';
	arr[i] = item;
	break;
   case 'opyata.png':
    item = 'Опята';
	arr[i] = item;
	break;
   case 'podberyozovik.png':
    item = 'Подберезовик';
	arr[i] = item;
	break;
   case 'podosinovik.png':
    item = 'Подосиновик';
	arr[i] = item;
	break;
   case 'ryzhyk.png':
    item = 'Рыжик';
	arr[i] = item;
	break;
   case 'shapmpinoni.png':
    item = 'Шампиньоны';
	arr[i] = item;
	break;
   case 'smorchok.png':
    item = 'Сморчок';
	arr[i] = item;
	break;
   case 'syroezhka.png':
    item = 'Сыроежка';
	arr[i] = item;
	break;
   case 'tryufel.png':
    item = 'Трюфель';
	arr[i] = item;
	break;
	
   // Eggs and milk
   
   case 'kurinoe-yaytso.png':
    item = 'Куриное яйцо';
	arr[i] = item;
	break;
   case 'maslo-slivochnoe.png':
    item = 'Сливочное масло';
	arr[i] = item;
	break;
   case 'moloko.png':
    item = 'Молоко';
	arr[i] = item;
	break;
   case 'perepelinye-yaytsa.png':
    item = 'Перепелиное яйцо';
	arr[i] = item;
	break;
   case 'sgushhenka.png':
    item = 'Сгущенка';
	arr[i] = item;
	break;
   case 'smetana.png':
    item = 'Сметана';
	arr[i] = item;
	break;
   case 'syr-chedder.png':
    item = 'Сыр Чеддер';
	arr[i] = item;
	break;
   case 'syr-chedder.png':
    item = 'Сыр Чеддер';
	arr[i] = item;
	break;
   case 'syr-feta.png':
    item = 'Сыр Фета';
	arr[i] = item;
	break;
   case 'syr-mocarella.png':
    item = 'Сыр Моцарелла';
	arr[i] = item;
	break;
   case 'syr-parmezan.png':
    item = 'Сыр Пармезан';
	arr[i] = item;
	break;
   case 'syr-rossijskij.png':
    item = 'Сыр Российский';
	arr[i] = item;
	break;
   case 'tvorog.png':
    item = 'Творог';
	arr[i] = item;
	break;
	
  // Meat
  
   case 'bekon.png':
    item = 'Бекон';
	arr[i] = item;
	break;
   case 'buzhenina.png':
    item = 'Буженина';
	arr[i] = item;
	break;
   case 'govjazhij-jazyk.png':
    item = 'Говяжий язык';
	arr[i] = item;
	break;
   case 'gusinaja-pechen.png':
    item = 'Гусиная печень';
	arr[i] = item;
	break;
   case 'kolbasa-servelat.png':
    item = 'Колбаса Сервелат';
	arr[i] = item;
	break;
   case 'ohotnichji-kolbaski.png':
    item = 'Охотничьи колабски';
	arr[i] = item;
	break;
   case 'okorochka-kurinye.png':
    item = 'Куриные окорочка';
	arr[i] = item;
	break;
   case 'sardelki-svinye.png':
    item = 'Свиные сардельки';
	arr[i] = item;
	break;
   case 'sosiski-molochnie.png':
    item = 'Сосиски молочные';
	arr[i] = item;
	break;
   case 'svinoj-farsh.png':
    item = 'Свиной фарш';
	arr[i] = item;
	break;
   case 'svinoj-okorok.png':
    item = 'Свиной окорок';
	arr[i] = item;
	break;
   case 'svinye-rebryshki.png':
    item = 'Свиные ребрышки';
	arr[i] = item;
	break;
	
  // Fish
  
   case 'anchousi.png':
    item = 'Анчоусы';
	arr[i] = item;
	break;
   case 'chernaya-ikra.png':
    item = 'Черная икра';
	arr[i] = item;
	break;
   case 'kalmar.png':
    item = 'Кальмар';
	arr[i] = item;
	break;
   case 'karas.png':
    item = 'Карась';
	arr[i] = item;
	break;
   case 'karp.png':
    item = 'Карп';
	arr[i] = item;
	break;
   case 'krabovye-palochki.png':
    item = 'Крабовые палочки';
	arr[i] = item;
	break;
   case 'krasnaya-ikra.png':
    item = 'Красная икра';
	arr[i] = item;
	break;
   case 'krevetki.png':
    item = 'Креветки';
	arr[i] = item;
	break;
   case 'lobster.png':
    item = 'Лобстер';
	arr[i] = item;
	break;
   case 'morskaya-kapusta.png':
    item = 'Морская капуста';
	arr[i] = item;
	break;
   case 'myaso-kraba.png':
    item = 'Краб';
	arr[i] = item;
	break;
   case 'osminog.png':
    item = 'Осьминог';
	arr[i] = item;
	break;
	
  // Nuts
  
   case 'arahis.png':
    item = 'Арахис';
	arr[i] = item;
	break;
   case 'chernosliv.png':
    item = 'Чернослив';
	arr[i] = item;
	break;
   case 'cukaty.png':
    item = 'Цукаты';
	arr[i] = item;
	break;
   case 'cukaty.png':
    item = 'Цукаты';
	arr[i] = item;
	break;
   case 'finiki.png':
    item = 'Финики';
	arr[i] = item;
	break;
   case 'fistashki.png':
    item = 'Фисташки';
	arr[i] = item;
	break;
   case 'gretskiy-oreh.png':
    item = 'Грецкий орех';
	arr[i] = item;
	break;
   case 'Izum.png':
    item = 'Изюм';
	arr[i] = item;
	break;
   case 'keshju-zhareniy.png':
    item = 'Кешью';
	arr[i] = item;
	break;
   case 'kokosoviy-oreh.png':
    item = 'Кокос';
	arr[i] = item;
	break;
   case 'kuraga.png':
    item = 'Курага';
	arr[i] = item;
	break;
   case 'mindal-sladkiy.png':
    item = 'Миндаль';
	arr[i] = item;
	break;
   case 'semechki-podsolnechnika.png':
    item = 'Семечки подсолнуха';
	arr[i] = item;
	break;
	
   default:
    return;
    
    
  }
 }
 
 return arr;
}



// Comparing Arrays 

function compareArray(chosenSet, setFromRemember) {
 arrayFromRemember = setFromRemember.split(',');
 
 var matches = 0;
 var matchesArr = [];
 
 outer:
 for(var i=0; i<chosenSet.length; i++) {
  var item = chosenSet[i];
  for(var j=0; j<arrayFromRemember.length; j++) {
   if(arrayFromRemember[j] == item) { 
    matches++;
	matchesArr.push(item);
    continue outer;
   }
  }
 }
  
  console.log('compareArray() \n 3 : number of matches ' + matches);
  console.log('compareArray() \n 4 : array of matches ' + matchesArr);

  feedback(matches, matchesArr, chosenSet, arrayFromRemember);
}



// Feedback

function feedback(res, arrayOfMatches, arrPicked, arrFromRemem) {
 
 var arrRemLength = arrFromRemem.length;
 arrRemLength = arrRemLength + '';
 console.log('feedback() \n 5 : length of array from remember ' + arrRemLength);
 
 var percent = (res*100)/arrRemLength;
 percent = percent.toFixed(0) + '%';
 console.log('feedback() \n 6 : Percent of success ' + percent);
 
 $('.overlay').fadeIn();
 
 if( sessionStorage['level'] == '10' ) {                           // whether it is 10th level
 
  $('#dialog').fadeIn().html('<h1>Поздравляем! Вы прошли игру! Теперь у Вас отличная память! <br><br> Congrats! You won the game! Now you have an excellent memory! </h1>');
  $('#dialog').append('<div id="dialogButton" style="padding-top: 15px; box-sizing: border-box;" class="success">Играть с начала</div>');
  
  $(document).on('click', '#dialogButton', function() {
   window.location.assign('index.html');
  });
 
 } else {
 
   $('#dialog').fadeIn().html('<p>' + 'Ваш результат: ' + '<strong>' + percent + 
 '</strong>' + '<br>' + '<strong>' + res + '</strong>' + ' из ' + '<strong>' + arrRemLength + '</strong>' + '</p>');
 $('#dialog').append('<h3>Правильно выбранные продукты:</h3>');
 $('#dialog').append('<section></section>');
 
 for(var i=0; i<arrayOfMatches.length; i++) {
  $('#dialog section').append('<p>' + arrayOfMatches[i] + '</p>');
 }
 
  
  if(percent == '100%') {
   $('#dialog').append('<div id="dialogButton" class="success">На следующий уровень!</div>');
   
   $(document).on('click', '#dialogButton', function() {
    $('.overlay').hide();
    $('#dialog').hide();
  
  
    switch(sessionStorage['level']) {
     case '1':
      window.location.assign('remember_2.html');
      break;
	 case '2':
      window.location.assign('remember_3.html');
      break;
	 case '3':
      window.location.assign('remember_4.html');
      break;
	 case '4':
      window.location.assign('remember_5.html');
      break;
	 case '5':
      window.location.assign('remember_6.html');
      break;
	 case '6':
      window.location.assign('remember_7.html');
      break;
	 case '7':
      window.location.assign('remember_8.html');
      break;
	 case '8':
      window.location.assign('remember_9.html');
      break;
	 case '9':
      window.location.assign('remember_10.html');
      break;
	 case '10':
      alert('Congratulations! You won the game!');
      break;
     default:
      break;
    }
   
 
   });
  } else {
   $('#dialog').append('<div id="dialogButton" class="failure">Попробовать еще раз</div>');
   $(document).on('click', '#dialogButton', function() {
    $('.overlay').hide();
    $('#dialog').hide();
	
	switch(sessionStorage['level']) {
     case '1':
      window.location.assign('remember.html');
      break;
	 case '2':
      window.location.assign('remember_2.html');
      break;
	 case '3':
      window.location.assign('remember_3.html');
      break;
	 case '4':
      window.location.assign('remember_4.html');
      break;
	 case '5':
      window.location.assign('remember_5.html');
      break;
	 case '6':
      window.location.assign('remember_6.html');
      break;
	 case '7':
      window.location.assign('remember_7.html');
      break;
	 case '8':
      window.location.assign('remember_8.html');
      break;
	 case '9':
      window.location.assign('remember_9.html');
      break;
	 case '10':
      window.location.assign('remember_10.html');
      break;
     default:
      break;
    }
   });
  }
 
 
 }
 
}



// Overlay

/*
$('.overlay:not("#dialog")').click(function() {
  if( $('#dialog').css('display') == 'block' ) {
   $('.overlay').hide();
   $('#dialog').hide();
  }
});
*/

 

// Item click

$('.shelf1 a div, .shelf2 a div, .shelf3 a div, .shelf4 a div').click(function() {
 $(this).hide();
 
 var self = $(this);
 
 setCountItem(self);
 
 var getBg = defineDiv(self);
 
 showPic(getBg);
});



// Thumb click

$(document).on('click', '#basketInside div', function() {
 
 var self = $(this);
 
 setCountItem(self);
 
 $(this).remove();
 
 var getBg = defineDiv(self);
 
 showPic(getBg);
});



// Count of Items in the Basket

function setCountItem(self) {
 
 var parent = self.parent();
 
 if($(parent).is('#basketInside')) {
  setCountItem.y--;
 } else {
  setCountItem.y++;
 }
 
 $('#basket div h1').html( setCountItem.y );
  
}
setCountItem.y = 0;


// Length of required elements in the basket

var required = sessionStorage['arr'];
var requiredSplit = required.split(',');
$('#basket div h3').html( requiredSplit.length );


// Parsing url

function defineDiv(div) {
 
 var back = div.css('background-image');
 
 var str = back.slice(11, -1);
 
 var parsedArr = str.split('/');
 return parsedArr[parsedArr.length - 1]; 
}


$('#basket div').click(function() {
 $('#basketInside').fadeToggle('slow');
});



// Items functional

function showPic(bg) {
  
 switch(bg) {
 // Fruits&Berries 
  case 'abrikos.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/abrikos.png)'});
   break;
  case 'ananas.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/ananas.png)'});
   break;
  case 'apelsin.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/apelsin.png)'});
   break;
  case 'arbuz.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/arbuz.png)'});
   break;
  case 'boyaryshnik.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/boyaryshnik.png)'});
   break;
  case 'ezhevika.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/ezhevika.png)'});
   break;
  case 'grejpfrut.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/grejpfrut.png)'});
   break;
  case 'sliva.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/sliva.png)'});
   break;
  case 'smorodina-chernaya.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/smorodina-chernaya.png)'});
   break;
  case 'smorodina-krasnaya.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/smorodina-krasnaya.png)'});
   break;
  case 'vinograd.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/vinograd.png)'});
   break;
  case 'vishnya.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fruits&berries/Thumbnails/vishnya.png)'});
   break;
  // Fruits&Berries Thumbs 
  case 'abrikos.png':
   $('#fruits_berries .shelf1 a:nth-child(1) div').show();
   break;
  case 'ananas.png':
   $('#fruits_berries .shelf1 a:nth-child(2) div').show();
   break;
  case 'apelsin.png':
   $('#fruits_berries .shelf1 a:nth-child(3) div').show();
   break;
  case 'arbuz.png':
   $('#fruits_berries .shelf2 a:nth-child(1) div').show();
   break;
  case 'boyaryshnik.png':
   $('#fruits_berries .shelf2 a:nth-child(2) div').show();
   break;
  case 'ezhevika.png':
   $('#fruits_berries .shelf2 a:nth-child(3) div').show();
   break;
  case 'grejpfrut.png':
   $('#fruits_berries .shelf3 a:nth-child(1) div').show();
   break;
  case 'sliva.png':
   $('#fruits_berries .shelf3 a:nth-child(2) div').show();
   break;
  case 'smorodina-chernaya.png':
   $('#fruits_berries .shelf3 a:nth-child(3) div').show();
   break;
  case 'smorodina-krasnaya.png':
   $('#fruits_berries .shelf4 a:nth-child(1) div').show();
   break;
  case 'vinograd.png':
   $('#fruits_berries .shelf4 a:nth-child(2) div').show();
   break;
  case 'vishnya.png':
   $('#fruits_berries .shelf4 a:nth-child(3) div').show();
   break;
   
   // Vegetables
   
  case 'baklazhan.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/baklazhan.png)'});
   break;
  case 'bobi.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/bobi.png)'});
   break;
  case 'brokkoli.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/brokkoli.png)'});
   break;
  case 'chesnok.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/chesnok.png)'});
   break;
  case 'fasol-struchkovaya.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/fasol-struchkovaya.png)'});
   break;
  case 'goroh.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/goroh.png)'});
   break;
  case 'kabachok.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/kabachok.png)'});
   break;
  case 'kapusta.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/kapusta.png)'});
   break;
  case 'kartofel.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/kartofel.png)'});
   break;
  case 'morkov.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/morkov.png)'});
   break;
  case 'ogurec.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/ogurec.png)'});
   break;
  case 'tykva.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/vegetables/Thumbnails/tykva.png)'});
   break;
   // Vegetables thumbs
  case 'baklazhan.png':
   $('#vegetables .shelf1 a:nth-child(1) div').show();
   break;
  case 'bobi.png':
   $('#vegetables .shelf1 a:nth-child(2) div').show();
   break;
  case 'brokkoli.png':
   $('#vegetables .shelf1 a:nth-child(3) div').show();
   break;
  case 'chesnok.png':
   $('#vegetables .shelf2 a:nth-child(1) div').show();
   break;
  case 'fasol-struchkovaya.png':
   $('#vegetables .shelf2 a:nth-child(2) div').show();
   break;
  case 'goroh.png':
   $('#vegetables .shelf2 a:nth-child(3) div').show();
   break;
  case 'kabachok.png':
   $('#vegetables .shelf3 a:nth-child(1) div').show();
   break;
  case 'kapusta.png':
   $('#vegetables .shelf3 a:nth-child(2) div').show();
   break;
  case 'kartofel.png':
   $('#vegetables .shelf3 a:nth-child(3) div').show();
   break;
  case 'morkov.png':
   $('#vegetables .shelf4 a:nth-child(1) div').show();
   break;
  case 'ogurec.png':
   $('#vegetables .shelf4 a:nth-child(2) div').show();
   break;
  case 'tykva.png':
   $('#vegetables .shelf4 a:nth-child(3) div').show();
   break;
  
   // Mushrooms
   
  case 'belyj-grib.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/belyj-grib.png)'});
   break;
  case 'gruzd.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/gruzd.png)'});
   break;
  case 'lisichki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/lisichki.png)'});
   break;
  case 'maslyata.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/maslyata.png)'});
   break;
  case 'opyata.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/opyata.png)'});
   break;
  case 'podberyozovik.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/podberyozovik.png)'});
   break;
  case 'podosinovik.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/podosinovik.png)'});
   break;
  case 'ryzhyk.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/ryzhyk.png)'});
   break;
  case 'shapmpinoni.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/shapmpinoni.png)'});
   break;
  case 'smorchok.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/smorchok.png)'});
   break;
  case 'syroezhka.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/syroezhka.png)'});
   break;
  case 'tryufel.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/mushrooms/Thumbnails/tryufel.png)'});
   break;
  // Mushrooms Thumbs 
  case 'belyj-grib.png':
   $('#mushrooms .shelf1 a:nth-child(1) div').show();
   break;
  case 'gruzd.png':
   $('#mushrooms .shelf1 a:nth-child(2) div').show();
   break;
  case 'lisichki.png':
   $('#mushrooms .shelf1 a:nth-child(3) div').show();
   break;
  case 'maslyata.png':
   $('#mushrooms .shelf2 a:nth-child(1) div').show();
   break;
  case 'opyata.png':
   $('#mushrooms .shelf2 a:nth-child(2) div').show();
   break;
  case 'podberyozovik.png':
   $('#mushrooms .shelf2 a:nth-child(3) div').show();
   break;
  case 'podosinovik.png':
   $('#mushrooms .shelf3 a:nth-child(1) div').show();
   break;
  case 'ryzhyk.png':
   $('#mushrooms .shelf3 a:nth-child(2) div').show();
   break;
  case 'shapmpinoni.png':
   $('#mushrooms .shelf3 a:nth-child(3) div').show();
   break;
  case 'smorchok.png':
   $('#mushrooms .shelf4 a:nth-child(1) div').show();
   break;
  case 'syroezhka.png':
   $('#mushrooms .shelf4 a:nth-child(2) div').show();
   break;
  case 'tryufel.png':
   $('#mushrooms .shelf4 a:nth-child(3) div').show();
   break;
   
   // Eggs and milk
   
  case 'kurinoe-yaytso.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/kurinoe-yaytso.png)'});
   break;
  case 'maslo-slivochnoe.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/maslo-slivochnoe.png)'});
   break;
  case 'moloko.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/moloko.png)'});
   break;
  case 'perepelinye-yaytsa.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/perepelinye-yaytsa.png)'});
   break;
  case 'sgushhenka.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/sgushhenka.png)'});
   break;
  case 'smetana.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/smetana.png)'});
   break;
  case 'syr-chedder.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/syr-chedder.png)'});
   break;
  case 'syr-feta.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/syr-feta.png)'});
   break;
  case 'syr-mocarella.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/syr-mocarella.png)'});
   break;
  case 'syr-parmezan.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/syr-parmezan.png)'});
   break;
  case 'syr-rossijskij.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/syr-rossijskij.png)'});
   break;
  case 'tvorog.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/eggs_milk/Thumbnails/tvorog.png)'});
   break;
   
   // Eggs and milk thumbs
   
  case 'kurinoe-yaytso.png':
   $('#eggs_milk .shelf1 a:nth-child(1) div').show();
   break;
  case 'maslo-slivochnoe.png':
   $('#eggs_milk .shelf1 a:nth-child(2) div').show();
   break;
  case 'moloko.png':
   $('#eggs_milk .shelf1 a:nth-child(3) div').show();
   break;
  case 'perepelinye-yaytsa.png':
   $('#eggs_milk .shelf2 a:nth-child(1) div').show();
   break;
  case 'sgushhenka.png':
   $('#eggs_milk .shelf2 a:nth-child(2) div').show();
   break;
  case 'smetana.png':
   $('#eggs_milk .shelf2 a:nth-child(3) div').show();
   break;
  case 'syr-chedder.png':
   $('#eggs_milk .shelf3 a:nth-child(1) div').show();
   break;
  case 'syr-feta.png':
   $('#eggs_milk .shelf3 a:nth-child(2) div').show();
   break;
  case 'syr-mocarella.png':
   $('#eggs_milk .shelf3 a:nth-child(3) div').show();
   break;
  case 'syr-parmezan.png':
   $('#eggs_milk .shelf4 a:nth-child(1) div').show();
   break;
  case 'syr-rossijskij.png':
   $('#eggs_milk .shelf4 a:nth-child(2) div').show();
   break;
  case 'tvorog.png':
   $('#eggs_milk .shelf4 a:nth-child(3) div').show();
   break;
   
  // Meat
  
  case 'bekon.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/bekon.png)'});
   break;
  case 'buzhenina.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/buzhenina.png)'});
   break;
  case 'govjazhij-jazyk.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/govjazhij-jazyk.png)'});
   break;
  case 'gusinaja-pechen.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/gusinaja-pechen.png)'});
   break;
  case 'kolbasa-servelat.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/kolbasa-servelat.png)'});
   break;
  case 'ohotnichji-kolbaski.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/ohotnichji-kolbaski.png)'});
   break;
  case 'okorochka-kurinye.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/okorochka-kurinye.png)'});
   break;
  case 'sardelki-svinye.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/sardelki-svinye.png)'});
   break;
  case 'sosiski-molochnie.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/sosiski-molochnie.png)'});
   break;
  case 'svinoj-farsh.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/svinoj-farsh.png)'});
   break;
  case 'svinoj-okorok.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/svinoj-okorok.png)'});
   break;
  case 'svinye-rebryshki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/meat/Thumbnails/svinye-rebryshki.png)'});
   break;
  
  // Meat thumbs
  
  case 'bekon.png':
   $('#meat .shelf1 a:nth-child(1) div').show();
   break;
  case 'buzhenina.png':
   $('#meat .shelf1 a:nth-child(2) div').show();
   break;
  case 'govjazhij-jazyk.png':
   $('#meat .shelf1 a:nth-child(3) div').show();
   break;
  case 'gusinaja-pechen.png':
   $('#meat .shelf2 a:nth-child(1) div').show();
   break;
  case 'kolbasa-servelat.png':
   $('#meat .shelf2 a:nth-child(2) div').show();
   break;
  case 'ohotnichji-kolbaski.png':
   $('#meat .shelf2 a:nth-child(3) div').show();
   break;
  case 'okorochka-kurinye.png':
   $('#meat .shelf3 a:nth-child(1) div').show();
   break;
  case 'sardelki-svinye.png':
   $('#meat .shelf3 a:nth-child(2) div').show();
   break;
  case 'sosiski-molochnie.png':
   $('#meat .shelf3 a:nth-child(3) div').show();
   break;
  case 'svinoj-farsh.png':
   $('#meat .shelf4 a:nth-child(1) div').show();
   break;
  case 'svinoj-okorok.png':
   $('#meat .shelf4 a:nth-child(2) div').show();
   break;
  case 'svinye-rebryshki.png':
   $('#meat .shelf4 a:nth-child(3) div').show();
   break;
   
   // Fish
   
  case 'anchousi.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/anchousi.png)'});
   break;
  case 'chernaya-ikra.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/chernaya-ikra.png)'});
   break;
  case 'kalmar.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/kalmar.png)'});
   break;
  case 'karas.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/karas.png)'});
   break;
  case 'karp.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/karp.png)'});
   break;
  case 'krabovye-palochki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/krabovye-palochki.png)'});
   break;
  case 'krasnaya-ikra.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/krasnaya-ikra.png)'});
   break;
  case 'krevetki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/krevetki.png)'});
   break;
  case 'lobster.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/lobster.png)'});
   break;
  case 'morskaya-kapusta.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/morskaya-kapusta.png)'});
   break;
  case 'myaso-kraba.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/myaso-kraba.png)'});
   break;
  case 'osminog.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/fish/Thumbnails/osminog.png)'});
   break;
   
  // Fish Thumbs
  
  case 'anchousi.png':
   $('#fish .shelf1 a:nth-child(1) div').show();
   break;
  case 'chernaya-ikra.png':
   $('#fish .shelf1 a:nth-child(2) div').show();
   break;
  case 'kalmar.png':
   $('#fish .shelf1 a:nth-child(3) div').show();
   break;
  case 'karas.png':
   $('#fish .shelf2 a:nth-child(1) div').show();
   break;
  case 'karp.png':
   $('#fish .shelf2 a:nth-child(2) div').show();
   break;
  case 'krabovye-palochki.png':
   $('#fish .shelf2 a:nth-child(3) div').show();
   break;
  case 'krasnaya-ikra.png':
   $('#fish .shelf3 a:nth-child(1) div').show();
   break;
  case 'krevetki.png':
   $('#fish .shelf3 a:nth-child(2) div').show();
   break;
  case 'lobster.png':
   $('#fish .shelf3 a:nth-child(3) div').show();
   break;
  case 'morskaya-kapusta.png':
   $('#fish .shelf4 a:nth-child(1) div').show();
   break;
  case 'myaso-kraba.png':
   $('#fish .shelf4 a:nth-child(2) div').show();
   break;
  case 'osminog.png':
   $('#fish .shelf4 a:nth-child(3) div').show();
   break;
   
  // Nuts
  
  case 'arahis.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/arahis.png)'});
   break;
  case 'chernosliv.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/chernosliv.png)'});
   break;
  case 'cukaty.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/cukaty.png)'});
   break;
  case 'finiki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/finiki.png)'});
   break;
  case 'fistashki.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/fistashki.png)'});
   break;
  case 'gretskiy-oreh.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/gretskiy-oreh.png)'});
   break;
  case 'Izum.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/Izum.png)'});
   break;
  case 'keshju-zhareniy.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/keshju-zhareniy.png)'});
   break;
  case 'kokosoviy-oreh.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/kokosoviy-oreh.png)'});
   break;
  case 'kuraga.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/kuraga.png)'});
   break;
  case 'mindal-sladkiy.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/mindal-sladkiy.png)'});
   break;
  case 'semechki-podsolnechnika.jpg':
   $('#basketInside').append('<div></div>');
   $('#basketInside div:last-child').css({'background' : 'url(img/nuts/Thumbnails/semechki-podsolnechnika.png)'});
   break;
  
  // Nuts thumbs
  
  case 'arahis.png':
   $('#nuts .shelf1 a:nth-child(1) div').show();
   break;
  case 'chernosliv.png':
   $('#nuts .shelf1 a:nth-child(2) div').show();
   break;
  case 'cukaty.png':
   $('#nuts .shelf1 a:nth-child(3) div').show();
   break;
  case 'finiki.png':
   $('#nuts .shelf2 a:nth-child(1) div').show();
   break;
  case 'fistachki.png':
   $('#nuts .shelf2 a:nth-child(2) div').show();
   break;
  case 'gretskiy-oreh.png':
   $('#nuts .shelf2 a:nth-child(3) div').show();
   break;
  case 'Izum.png':
   $('#nuts .shelf3 a:nth-child(1) div').show();
   break;
  case 'keshju-zhareniy.png':
   $('#nuts .shelf3 a:nth-child(2) div').show();
   break;
  case 'kokosoviy-oreh.png':
   $('#nuts .shelf3 a:nth-child(3) div').show();
   break;
  case 'kuraga.png':
   $('#nuts .shelf4 a:nth-child(1) div').show();
   break;
  case 'mindal-sladkiy.png':
   $('#nuts .shelf4 a:nth-child(2) div').show();
   break;
  case 'semechki-podsolnechnika.png':
   $('#nuts .shelf4 a:nth-child(3) div').show();
   break;
  
  default:
   return;
 }
}





});