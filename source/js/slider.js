
document.getElementById('comments__btn-1').setAttribute('checked', true);
document.getElementById('tariffs__btn-1').setAttribute('checked', true);

var currentIndex = 0;

var button_prev = document.querySelector(".js__prev");
var button_next = document.querySelector(".js__next");
var listRow = document.querySelector(".comments__list");
var toggleBtns = document.querySelectorAll(".slider__toggle");
var sliderList = document.querySelectorAll(".js__slider-item");

window.addEventListener('resize', function (e) {
  slide(currentIndex)
});


var slide = function (index) {
  var winWidth = document.querySelector('.comments__item').getBoundingClientRect().width

  offset = winWidth * index;
  listRow.style.transform = 'translateX(-' + offset + 'px)';
};

button_next.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentIndex === sliderList.length - 1) {
    currentIndex = 0;
    slide(currentIndex);
  } else {
    currentIndex++;
    slide(currentIndex);
  }
});

button_prev.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentIndex === 0) {
    currentIndex = sliderList.length - 1;
    slide(currentIndex);
  } else {
    currentIndex--;
    slide(currentIndex);
  }
});


toggleBtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var index = [].slice.call(toggleBtns).indexOf(item);
    currentIndex = index;
    slide(index);
  })
});
