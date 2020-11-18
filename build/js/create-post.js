function rangeSlider() {
  const sliderContainer = document.querySelector(".range-slider__container");
  const sliderTrack = document.querySelector(".range-slider__track");
  const progressBar = document.querySelector(".range-slider__progress");
  const thumb = document.querySelector(".range-slider__thumb");
  const sliderTrackWidth = sliderTrack.offsetWidth;
  const sliderContainerLeft = sliderContainer.offsetLeft;

  var percentage = 0;
  var dragging = false;

  function setPercentage() {
    progressBar.style.transform = `scaleX(${percentage / 100})`;
    thumb.style.transform = `translate(-50%) translateX(${percentage / 100 * sliderTrackWidth}px)`;
  }

  setPercentage();

  thumb.addEventListener("mousedown", function (e) {
    dragging = true;
  });

  document.addEventListener("mousemove", function (e) {
    if (dragging) {
      if (e.clientX < sliderContainerLeft) {
        percentage = 0;
      } else if (e.clientX > sliderTrackWidth + sliderContainerLeft) {
        percentage = 100;
      } else {
        translate = e.clientX - sliderContainerLeft;
        percentage = (translate / sliderTrackWidth) * 100;
      }
      rounded = parseFloat(percentage.toFixed(0));
      setPercentage();
    }
  });

  document.addEventListener("mouseup", function (e) {
    dragging = false;
  });
}

rangeSlider();
