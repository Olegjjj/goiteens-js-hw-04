const pText = document.querySelector(".ptext");
const buttonText = document.querySelector(".text");
// buttonText.textContent = "This is NOT a text";
// buttonText.textContent = pText.textContent;
buttonText.addEventListener("click", ()=> {buttonText.textContent = pText.textContent})

const pictureNumberOne = document.querySelector(".picture");
pictureNumberOne.src = "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg";

const link = document.querySelector(".link");
link.href = "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%BE%D0%BB";
link.textContent = "Стoл";

const cats = document.querySelector(".cats");
cats.alt = "cats";

const firstItem = document.querySelector(".item");
firstItem.textContent = "HTML";