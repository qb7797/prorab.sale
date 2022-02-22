import 'bootstrap.native'
import Swiper from 'swiper/bundle'
import 'chart.js'
import 'chartjs-plugin-datalabels'


const swiper4 = new Swiper('.slider-estimate', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


var close = document.querySelectorAll(".btn-close-x");
if (close) {
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      this.closest(".product").remove();
    })
  }
}

const swiper3 = new Swiper('.slider-delivery', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


// Product item slider
var galleryTop = new Swiper('.gallery-top', {
  slidesPerView: 1,  
  loop: true,
  loopedSlides: 50,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  direction: 'vertical',
  slidesPerView: 3,
  slideToClickedSlide: true,
  spaceBetween: 30, 
  loopedSlides: 50,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;


// Choose product item color
var color = document.querySelectorAll('.color-item');
if( color ){
  for (let i = 0; i < color.length; i++) {
    const element = color[i];
    element.addEventListener('click', function(){
      for (let i = 0; i < this.parentNode.children.length; i++) {
        this.parentNode.children[i].classList.remove('selected');
      }
      this.classList.add('selected')
    });
  }
}


// chart with price dynamics for Product card page 
const priceDynamics = document.getElementById('priceDynamics');
if ( priceDynamics ) {
  let ctx = priceDynamics.getContext('2d');
  let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Апр", "Май", "Июн", "Июл", "Авг", "Сен"],
      datasets: [{
        label: "",
        type: "line",
        data: [2900, 2990, 3200, 3400, 3100, 2900],  // Price data
        fill: false,
        backgroundColor: 'transparent', // Fill color 
        borderColor: 'rgb(32, 191, 107)', // Line color
        cubicInterpolationMode: 'monotone',
        borderWidth: 4,
        hoverBorderWidth: 4,
        hitRadius: 7,
        hoverRadius: 5,
        datalabels: {
          align: 'end',
          anchor: 'end'
        }
      }]
    },
    // chart settings
    options: {
      plugins:{
        datalabels: {
          padding: {
            left: 15,
            right: 15
          },
          borderRadius: 7,
          backgroundColor: '#f1f3f6',
          color: '#666666',
          font: {
            family: 'Rubik',
            size: '14',
            weight: 'bold'
          }
        }
      },
      maintainAspectRatio: false,
      customOffset: 200, // offset of yAxe 
  
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false,
            // min: 0, 
            // max: 5000
          },
          label: {
            display: false
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItems, data) {
            return new Intl.NumberFormat('ru-RU').format(data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index]);
          }
        },
        display: false,
        enabled: false,
        label: false,
        title: function () { },
        mode: 'index',
        position: 'nearest',
        fontSize: 16,
        //  Uncomment this, if need hover effect
        // custom: function (tooltipModel) {
        //   // Tooltip Element
        //   var tooltipEl = document.getElementById('chartjs-tooltip');
  
        //   // Create element on first render
        //   if (!tooltipEl) {
        //     tooltipEl = document.createElement('div');
        //     tooltipEl.id = 'chartjs-tooltip';
        //     tooltipEl.innerHTML = '<table></table>';
        //     document.body.appendChild(tooltipEl);
        //   }
  
        //   // Hide if no tooltip
        //   if (tooltipModel.opacity === 0) {
        //     tooltipEl.style.opacity = 0;
        //     return;
        //   }
  
        //   // Set caret Position
        //   tooltipEl.classList.remove('above', 'below', 'no-transform');
        //   if (tooltipModel.yAlign) {
        //     tooltipEl.classList.add(tooltipModel.yAlign);
        //   } else {
        //     tooltipEl.classList.add('no-transform');
        //   }
  
        //   function getBody(bodyItem) {
        //     return bodyItem.lines;
        //   }
  
        //   // Set Text
        //   if (tooltipModel.body) {
        //     var titleLines = tooltipModel.title || [];
        //     var bodyLines = tooltipModel.body.map(getBody);
  
        //     var innerHtml = '<thead>';
  
        //     titleLines.forEach(function (title) {
        //       // innerHtml += '<tr><th>' + title + '</th></tr>';
        //     });
        //     innerHtml += '</thead><tbody>';
  
        //     bodyLines.forEach(function (body, i) {
        //       innerHtml += '<tr><td style="text-align: center; padding: 0 12px"><b>' + body + '</b></td></tr>';
        //     });
        //     innerHtml += '</tbody>';
  
        //     var tableRoot = tooltipEl.querySelector('table');
        //     tableRoot.innerHTML = innerHtml;
        //   }
  
        //   // `this` will be the overall tooltip
        //   var position = this._chart.canvas.getBoundingClientRect();
  
        //   // Display, position, and set styles for font
        //   tooltipEl.style.opacity = 1;
        //   tooltipEl.style.position = 'absolute';
        //   tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        //   tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        //   tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        //   tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        //   tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        //   tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        //   tooltipEl.style.pointerEvents = 'none';
        // },
      }
    }
  });
  // based on answer here: https://stackoverflow.com/questions/47146427
  Chart.pluginService.register({
    beforeUpdate: function (chart) {
      // get custom defined offset
      var offset = chart.options.customOffset;
      // exisit gracefully if offset not defined or less than 0
      if (!offset || offset < 0) return;
      var yAxes = chart.options.scales.yAxes;
      for (var i = 0; i < yAxes.length; i++) {
        var axis = yAxes[i];
        var datasets = chart.data.datasets;
        var max = Number.MIN_VALUE;
        var min = Number.MAX_VALUE;
        var datasetsOnAxis = [];
  
        for (var j = 0; j < datasets.length; j++) { // add datasets for this axes to datasetsOnAxis
          var dataset = datasets[j];
          var meta = chart.getDatasetMeta(j);
          if (meta.yAxisID === axis.id) datasetsOnAxis.push(dataset);
        }
  
        for (var k = 0; k < datasetsOnAxis.length; k++) {
          var dataset = datasetsOnAxis[k]
          var newMax = Math.max.apply(null, dataset.data);
          var newMin = Math.min.apply(null, dataset.data);
          max = newMax > max ? newMax : max;
          min = newMin > min ? min : newMin;
        }
        axis.ticks.max = max + offset;
        axis.ticks.min = min - offset;
      }
    }
  });
  chart.canvas.parentNode.style.height = '230px';
}  




var close = document.querySelectorAll(".close");
if (close) {
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      this.closest(".form-inline").remove();
    })
  }
}

//  switcher on profile page
var checkbox = document.querySelector('#work-type');
var constraction = document.querySelector('.constraction');
var repair = document.querySelector('.repair');
if (checkbox) {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      constraction.classList.add('font-medium');
      repair.classList.remove('font-medium');
    } else {
      constraction.classList.remove('font-medium');
      repair.classList.add('font-medium');
    }
  });
}


const swiper = new Swiper('.slider-popular', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.slider-rooms', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


// catalog button action
var catalogBtn = document.getElementById("catalogBtn");
var menu = document.querySelector(".catalog");
if (catalogBtn) {
  catalogBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    this.classList.toggle("btn-orange")
    this.children[0].classList.toggle('burger-close')
    if (!menu.classList.contains("show") && menu.classList.contains("hide")) {
      menu.classList.remove("hide");
      var cb = function () {
        menu.classList.remove("show");
        menu.classList.remove("hide");
        menu.removeEventListener("transitionend", cb, false);
      };
      menu.addEventListener("transitionend", cb, false);
    } else {
      menu.classList.add("hide");
      menu.classList.remove("show");
    }
  });
}


// Used for liveSearch 
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  if (inp) {
    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
  }
  /*execute a function presses a key on the keyboard:*/
  if (inp) {
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
  }
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all data*/
var countries = ["Австралия", "Австрия", "Азербайджан", "Аландские о-ва", "Албания", "Алжир", "Американское Самоа", "Ангилья", "Ангола", "Андорра", "Антарктида", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Афганистан", "Багамы", "Бангладеш", "Барбадос", "Бахрейн", "Беларусь", "Белиз", "Бельгия", "Бенин", "Бермудские о-ва", "Болгария", "Боливия", "Бонэйр, Синт-Эстатиус и Саба", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Британская территория в Индийском океане", "Бруней-Даруссалам", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Виргинские о-ва (Великобритания)", "Виргинские о-ва (США)", "Внешние малые о-ва (США)", "Восточный Тимор", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гваделупа", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Гернси", "Гибралтар", "Гондурас", "Гонконг (САР)", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Джерси", "Джибути", "Доминика", "Доминиканская Республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Кокосовые о-ва", "Колумбия", "Коморы", "Конго - Браззавиль", "Конго - Киншаса", "Коста-Рика", "Кот-д’Ивуар", "Куба", "Кувейт", "Кюрасао", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Майотта", "Макао (САР)", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Маршалловы Острова", "Мексика", "Мозамбик", "Молдова", "Монако", "Монголия", "Монтсеррат", "Мьянма (Бирма)", "Намибия", "Науру", "Непал", "Нигер", "Нигерия", "Нидерланды", "Никарагуа", "Ниуэ", "Новая Зеландия", "Новая Каледония", "Норвегия", "о-в Буве", "о-в Мэн", "о-в Норфолк", "о-в Рождества", "о-в Св. Елены", "о-ва Питкэрн", "о-ва Тёркс и Кайкос", "о-ва Херд и Макдональд", "ОАЭ", "Оман", "Острова Кайман", "Острова Кука", "Пакистан", "Палау", "Палестинские территории", "Панама", "Папуа — Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Корея", "Реюньон", "Россия", "Руанда", "Румыния", "Сальвадор", "Самоа", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Северная Македония", "Северные Марианские о-ва", "Сейшельские Острова", "Сен-Бартелеми", "Сен-Мартен", "Сен-Пьер и Микелон", "Сенегал", "Сент-Винсент и Гренадины", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Синт-Мартен", "Сирия", "Словакия", "Словения", "Соединенные Штаты", "Соломоновы Острова", "Сомали", "Судан", "Суринам", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Токелау", "Тонга", "Тринидад и Тобаго", "Тувалу", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уоллис и Футуна", "Уругвай", "Фарерские о-ва", "Федеративные Штаты Микронезии", "Фиджи", "Филиппины", "Финляндия", "Фолклендские о-ва", "Франция", "Французская Гвиана", "Французская Полинезия", "Французские Южные территории", "Хорватия", "Центрально-Африканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шпицберген и Ян-Майен", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эсватини", "Эстония", "Эфиопия", "Южная Георгия и Южные Сандвичевы о-ва", "Южно-Африканская Республика", "Южный Судан", "Ямайка", "Япония"];

var catalog = ["Cварочное оборудование", "Электроинструменты", "Элементы крепежа и фурнитура", "Пневмоинструменты", "Мотобуры и оснастка", "Электро и бензопилы", "Измерительный продукт", "Ручные инструменты"];

var goods = ["Сварочный аппарат САИ-220 в кейсе MMA", "Сварочный аппарат VF-223", "Аккумуляторная дрель-шуруповерт PATRIOT BR 114Li 25"];

var manufacturerElectroEquipment = ["Зубр", "Ресанта", "Сварог"];
var manufacturerWeldingEquipment = ["Зубр", "Ресанта", "Сварог"];

/*initiate the autocomplete function on the "myInput" element, and pass along the data array as possible autocomplete values:*/
autocomplete(document.getElementById("globalSearch"), countries);
autocomplete(document.getElementById("globalCatalog"), catalog);
autocomplete(document.getElementById("globalGoods"), goods);
autocomplete(document.getElementById("globalManufacturerElectroEquipment"), manufacturerElectroEquipment);
autocomplete(document.getElementById("globalManufacturerWeldingEquipment"), manufacturerWeldingEquipment);





var countEl = document.getElementById("count");
var count = 1;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");

var countEl2 = document.getElementById("count2");
var count2 = 10;
var plus2 = document.getElementById("plus2");
var minus2 = document.getElementById("minus2");

var countEl3 = document.getElementById("count3");
var count3 = 10;
var plus3 = document.getElementById("plus3");
var minus3 = document.getElementById("minus3");

var countEl4 = document.getElementById("count4");
var count4 = 10;
var plus4 = document.getElementById("plus4");
var minus4 = document.getElementById("minus4");

var countEl5 = document.getElementById("count5");
var count5 = 10;
var plus5 = document.getElementById("plus5");
var minus5 = document.getElementById("minus5");

var countEl6 = document.getElementById("count6");
var count6 = 10;
var plus6 = document.getElementById("plus6");
var minus6 = document.getElementById("minus6");

if (plus) {
  plus.addEventListener('click', function () {
    count++;
    countEl.value = count;
  });
}
if (minus) {
  minus.addEventListener('click', function () {
    if (count > 0) {
      count--;
      countEl.value = count;
    }
  });
}

if (plus2) {
  plus2.addEventListener('click', function () {
    count2++;
    countEl2.value = count2;
  });
}
if (minus2) {
  minus2.addEventListener('click', function () {
    if (count2 > 0) {
      count2--;
      countEl2.value = count2;
    }
  });
}

if (plus3) {
  plus3.addEventListener('click', function () {
    count3++;
    countEl3.value = count3;
  });
}
if (minus3) {
  minus3.addEventListener('click', function () {
    if (count3 > 0) {
      count3--;
      countEl3.value = count3;
    }
  });
}

if (plus4) {
  plus4.addEventListener('click', function () {
    count4++;
    countEl4.value = count4;
  });
}
if (minus4) {
  minus4.addEventListener('click', function () {
    if (count4 > 0) {
      count4--;
      countEl4.value = count4;
    }
  });
}

if (plus5) {
  plus5.addEventListener('click', function () {
    count5++;
    countEl5.value = count5;
  });
}
if (minus5) {
  minus5.addEventListener('click', function () {
    if (count5 > 0) {
      count5--;
      countEl5.value = count5;
    }
  });
}

if (plus6) {
  plus6.addEventListener('click', function () {
    count6++;
    countEl6.value = count6;
  });
}
if (minus6) {
  minus6.addEventListener('click', function () {
    if (count6 > 0) {
      count6--;
      countEl6.value = count6;
    }
  });
}
