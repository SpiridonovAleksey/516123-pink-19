function formValid() {
  var form = document.querySelector(".form");
  var inptFamily = form.querySelector("[name=person-family]");
  var inptName = form.querySelector("[name=person-name]");
  var inptEmail = form.querySelector("[name=person-email]");
  var mdlError = document.querySelector(".modal--error");
  var mdlClose = mdlError.querySelector(".modal__button");

  inptFamily.focus();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  form.addEventListener("submit", function (e) {
    if (!inptFamily.value || !inptName.value || !inptEmail.value) {
      //e.preventDefault();

      mdlError.classList.add("modal--show");

      mdlClose.addEventListener("click", function (e) {
        e.preventDefault();
        mdlError.classList.remove("modal--show");
      });

    } else {
      modalSend();
    }
  });
}

function modalSend() {
  var btnConfirm = document.querySelector(".form__button");
  var mdlConfirm = document.querySelector(".modal--sent");
  var mdlClose = mdlConfirm.querySelector(".modal__button");

  btnConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    mdlConfirm.classList.add("modal--show");
  });

  mdlClose.addEventListener("click", function (e) {
    e.preventDefault();
    mdlConfirm.classList.remove("modal--show");
  });

}

formValid();
