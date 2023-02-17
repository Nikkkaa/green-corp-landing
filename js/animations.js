// Добавление в инпут поля

document
  .querySelector("#budget")
  .addEventListener("change", function handleSelectChange(event) {
    if (event.target.value === "other") {
      const formContainer = document.createElement("div");
      formContainer.classList.add("form__group");
      formContainer.classList.add("form__other-input");

      const input = document.createElement("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";

      formContainer.appendChild(input);
      document
        .querySelector("form")
        .insertBefore(formContainer, document.querySelector(".form__submit"));
    }

    const otherInput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && otherInput) {
      document.querySelector("#form form").removeChild(otherInput);
    }
  });

//Анимация счетчика

function increaseNumberAnimationStep(i, element, endNumber) {
  const INCREASE_NUMBER_ANIMATION_SPEED = 40;
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }

    i += 100;

    setTimeout(function () {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  const element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

// Запуск анимации при скроле страницы
function updateScroll() {
  let animationInited = true;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector(
    ".features__clients-count"
  ).offsetTop;
  let countPeople = document.querySelector(
    ".features__clients-count"
  ).innerText;
  if (windowBottomPosition >= countElementPosition && countPeople == 0) {
    initIncreaseNumberAnimation();
    animationInited = false;
  }

  // Анимация хедера
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }
  window.addEventListener("scroll", updateScroll);
}

function addSmoothScroll(anchor) {
  anchor.addEventListener("click", onLinkClick);
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  addSmoothScroll(anchor);
});

updateScroll();
addSmoothScroll(document.querySelector(".more-button"));
addSmoothScroll(document.querySelector(".more-button-buy"));
