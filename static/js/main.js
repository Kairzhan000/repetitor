/* =========================================================
   1. ТЕНЬ У ШАПКИ ПРИ СКРОЛЛЕ
   ========================================================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================================================
   2. СЛОВАРЬ ПЕРЕВОДОВ
   ========================================================= */
const langData = {
  ru: {
    badge: "Репетитор по математике",
    h1: "Математика для всех",
    description:
      "Меня зовут Ерхан. Уже 7 лет я помогаю ученикам 5–11 классов разобраться в математике без зубрежки. Мы закроем пробелы и сдадим экзамены без стресса.",
    button: "Записаться",

    about_title: "Почему выбирают меня?",
    card1_t: "Простое объяснение",
    card1_d:
      "Если не понятно с первого раза — найду ещё пять способов объяснить.",
    card2_t: "Всегда на связи",
    card2_d:
      "Я всегда на связи в мессенджерах. Ученик может задать вопрос по домашке или школьной теме в любое время.",
    card3_t: "Индивидуальный план",
    card3_d:
      "Фокусируемся на сложных и нужных темах и планомерно движемся к вашей цели.",

    format_title: "Формат обучения",
    pair_t: "Занятия в парах",
    pair_p: "50.000 ₸",
    pair_d:
      "Занятия в парах 3 раза в неделю — это идеальный баланс. Вы учитесь вместе, сохраняя внимание репетитора, поддерживаете друг друга и быстрее разбираетесь в сложных темах.",
    indiv_t: "Индивидуальные уроки",
    indiv_p: "60.000 ₸",
    indiv_d:
      "Занимаемся 3 раза в неделю по 1.5 часа в вашем темпе. Не бежим за группой, а разбираем только то, что непонятно именно вам. Это в разы быстрее и эффективнее.",

    contacts_title: "Контакты",

    nav_hero: "Записаться",
    nav_about: "Обо мне",
    nav_format: "Формат обучения",
    nav_contacts: "Контакты",
  },

  kz: {
    badge: "Математика репетиторы",
    h1: "Математика барлығына арналған",
    description:
      "Менің есімім Ерхан. 7 жыл бойы мен 5-11 сынып оқушыларына математиканы жаттаусыз түсінуге көмектесемін. Біз білімдегі олқылықтарды жойып, емтихандарды стрессіз тапсырамыз.",
    button: "Жазылу",

    about_title: "Неге мені таңдайды?",
    card1_t: "Қарапайым түсіндіру",
    card1_d:
      "Егер бірінші реттен түсініксіз болса — түсіндірудің тағы бес жолын табамын.",
    card2_t: "Әрқашан байланыста",
    card2_d:
      "Мен мессенджерлерде әрқашан байланыстамын. Оқушы кез келген уақытта үй тапсырмасы немесе мектеп тақырыбы бойынша сұрақ қоя алады.",
    card3_t: "Жеке жоспар",
    card3_d:
      "Күрделі және қажетті тақырыптарға назар аударып, мақсатыңызға қарай жүйелі түрде қозғаламыз.",

    format_title: "Оқу форматы",
    pair_t: "Жұппен оқу",
    pair_p: "50.000 ₸",
    pair_d:
      "Аптасына 3 рет жұппен оқу — бұл тамаша теңгерім. Сіздер бірге оқисыздар, репетитордың назарын сақтап, бір-біріңізге қолдау көрсетесіздер және күрделі тақырыптарды тезірек меңгересіздер.",
    indiv_t: "Жеке сабақтар",
    indiv_p: "60.000 ₸",
    indiv_d:
      "Аптасына 3 рет 1.5 сағаттан өз қарқыныңызбен дайындаламыз. Топтың соңынан жүгірмей, тек өзіңізге түсініксіз тақырыптарды талдаймыз. Бұл әлдеқайда жылдам әрі тиімді.",

    contacts_title: "Байланыс",

    nav_hero: "Жазылу",
    nav_about: "Мен туралы",
    nav_format: "Оқу форматы",
    nav_contacts: "Байланыс",
  },
};

/* =========================================================
   3. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
   ========================================================= */
const ruBtn = document.getElementById("ru-btn");
const kzBtn = document.getElementById("kz-btn");
const translateElements = document.querySelectorAll("[data-key]");

function changeLanguage(lang) {
  // Меняем текст по data-key
  translateElements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (langData[lang][key]) {
      el.textContent = langData[lang][key];
    }
  });

  // Активная кнопка языка
  if (lang === "ru") {
    ruBtn.classList.add("active");
    kzBtn.classList.remove("active");
  } else {
    kzBtn.classList.add("active");
    ruBtn.classList.remove("active");
  }
}

/* Клики по языкам */
ruBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeLanguage("ru");
});

kzBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeLanguage("kz");
});

/* =========================================================
   4. BURGER МЕНЮ
   ========================================================= */
const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.getElementById("nav-overlay");
const navLinks = document.querySelectorAll(".overlay-menu a");

// Открытие меню
burgerBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Закрытие меню
const closeMenu = () => {
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
};

closeBtn.addEventListener("click", closeMenu);

// Закрытие при клике на пункт меню
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
