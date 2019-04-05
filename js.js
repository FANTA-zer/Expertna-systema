var arrdisplay = [];
var possibleanswers = ['1','2','3','4','5']

var matched1 = true;
while (matched1) {
  var display1 = prompt('Яку музику ви слухаєте? \r 1)Мікс Dubstep, Хіп-хопа и Dj музики \r 2)Запальні ритми \r 3)Класична музика \r 4)Пісні стилю диско \r 5) Фольклорні, народні пісні');
    statement1: if (display1 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display1 === possibleanswers[i]) {
          arrdisplay.push(display1);
          matched1 = false;
          break statement1;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement1;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched2 = true;
while (matched2) {
  var display2 = prompt('Яким кольорам ви надали б перевагу? \r 1)Відтінки сірих, коричневих, синіх тонів \r 2)Яскраві, гарячі кольори \r 3)Чорно-білі відтінки \r 4)Різні прінти, смужка, клітинка \r 5) Червоні, білі, чорні кольори');
    statement2: if (display2 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display2 === possibleanswers[i]) {
          arrdisplay.push(display2);
          matched2 = false;
          break statement2;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement2;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched3 = true;
while (matched3) {
  var display3 = prompt('Який одяг переважає у вашій шафі? \r 1)Спортивний одяг \r 2)Одяг, підкреслює фігуру \r 3)Діловий стиль \r 4)Зручний та комфортний одяг \r 5) Стилізовані народні костюми');
    statement3: if (display3 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display3 === possibleanswers[i]) {
          arrdisplay.push(display3);
          matched3 = false;
          break statement3;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement3;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched4 = true;
while (matched4) {
  var display4 = prompt('Яке взуття ви б обрали? \r 1)Кросівки, кеди \r 2)Яскраві босоніжки або туфлі на підборах \r 3)Класичне взуття \r 4)Напівспортивне взуття, мокасини \r 5) Чоботи');
    statement4: if (display4 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display4 === possibleanswers[i]) {
          arrdisplay.push(display4);
          matched4 = false;
          break statement4;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement4;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched5 = true;
while (matched5) {
  var display5 = prompt('Як би ви охарактеризували себе? \r 1)Рішучий, незалежний \r 2)Запальний, кокетливий \r 3)Спокійний, стриманний \r 4)Енергійний, веселий \r 5) Сильний, емоційний');
    statement5: if (display5 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display5 === possibleanswers[i]) {
          arrdisplay.push(display5);
          matched5 = false;
          break statement5;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement5;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched6 = true;
while (matched6) {
  var display6 = prompt('Чого очікуєте від танцю? \r 1)Відкрити свої думки й почуття \r 2)Привернути увагу протилежної статі \r 3)Отримати душевний спокій \r 4)Зарядитись позитивими емоціями \r 5) Викластись на повну, щоб показати свою силу');
    statement6: if (display6 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display6 === possibleanswers[i]) {
          arrdisplay.push(display6);
          matched6 = false;
          break statement6;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement6;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}

var matched7 = true;
while (matched7) {
  var display7 = prompt('Які рухи вам сподобалось би повторювати? \r 1)Різкі й ритмічні \r 2)Динамічні \r 3)Плавні й спокійні \r 4)Швидкі \r 5) Різні');
    statement7: if (display7 !== null) {
      for (var i = 0; i < possibleanswers.length; i++) {
        if (display7 === possibleanswers[i]) {
          arrdisplay.push(display7);
          matched7 = false;
          break statement7;
        }
      }
      alert ('Оберіть відповідь від 1 до 5');
      break statement7;
    }
    else {
      alert ('Ви не хочете танювати, бо вам щось заважає?');
    }
}





var arrconclusions = [
  {
    field: 'Ваш стиль - Вуличні танці (хіп-хоп, брейк-данс, поппінг) <br \/>  Вам подобається відчуття свободи в танці. Вільний одяг, спортивне взуття, ритмічна музика – це ваш стиль. Васне бентежить, що ці танці не відносяться до наймодніших. Віддаєте перевагу активному відпочинку і руху!',
    img: 'hip-hop.jpg',
    vivod: "1"
  },
  {
    field: 'Ваш стиль - Латиноамериканські танці (румба, сальса, ча-ча-ча) <br \/>   Ви - пристрасна натура. Вам подобається виражати свої емоції через танець. Ви - дуже яскрава і приваблива особа, яка любить показати себе. Заводити і чарувати - ваша стихія.',
    img: 'latina.jpg',
    vivod: '2'
  },
  {
    field: 'Ваш стиль - Класичні танці (вальс, фокстрот, танго) <br \/>  Зірка балету. Вам подобаються балетні па. Будь-який рух ви прагнете виконати правильно. У вас є завдатки, щоб стати професійним танцюристом. Ви тонка і чуйна особа.',
    img: 'tango.jpg',
    vivod: '3'
  },
  {
    field: 'Ваш стиль - Ретро-танці (рок-н-ролл, джайв, свінг) <br \/>   Танцюрист диско. Вам подобається танцювати! Чим динамічніше танець, тим краще. Ви танцюєш так запально, що всім довкола теж хочеться танцювати! Ви - любитель запальних ритмів.',
    img: 'retro.jpg',
    vivod: '4'
  },
  {
    field: 'Ваш стиль - Народні танці. <br \/> Фольклорний танець — це стихійний вияв почуттів, настрою, емоцій і виконується в першу чергу для себе, а потім — для глядача. Хлопці танцюють енергійно, різко, задерикувато, а дівчата мяко, ласкаво й ніжно.',
    img: 'gopak.jpg',
    vivod: '5'
  }
];

var arranswers = [
  {
      answer: '1',
      index: '1'
  },
  {
      answer: '2',
      index: '2'
  },
  {
      answer: '3',
      index: '3'
  },
  {
      answer: '4',
      index: '4'
  },
  {
      answer: '5',
      index: '5'
  }
];


var arrindex = [];

for (var i = 0; i < arranswers.length; i++) {
  if (display1 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display2 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display3 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display4 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display5 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display6 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

for (var i = 0; i < arranswers.length; i++) {
  if (display7 === arranswers[i].answer) {
    arrindex.push(arranswers[i].index);
  }
}

var searchindex;
function findMode(numbers) {
    const counted = numbers.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }

        return acc;
    }, {});


    const item = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

    console.log('most frequent number is ', item, 'matches: ', Math.max(...Object.values(counted)))

    searchindex = item;
    return searchindex;

}

findMode(arrindex);




for (var i = 0; i < arrconclusions.length; i++) {
  if (searchindex == arrconclusions[i].vivod) {
    var conclusionviviod = arrconclusions[i].field;
    document.write('<img style="width: 400px; height: 400px; border: 3px solid #00a8e1;" src="images/' + arrconclusions[i].img + '"> <br \/>');
    document.write('<p>' +conclusionviviod + '</p>');

  }
}

console.log(conclusionviviod );
