const cookiePopup = document.querySelector('.js-container')
localStorage.getItem('cookies');

const wrapperDiv = document.createElement("div");
const imagesDiv = document.createElement("div");
const cookieIcon = document.createElement("img");
const closeIcon = document.createElement("img");
const paragraph = document.createElement("p");
const buttonWrapperDiv = document.createElement("div");
const buttonElement = document.createElement("button");

cookiePopup.appendChild(wrapperDiv);
wrapperDiv.append(imagesDiv, paragraph, buttonWrapperDiv);
imagesDiv.append(cookieIcon, closeIcon);
buttonWrapperDiv.appendChild(buttonElement);

paragraph.appendChild(document.createTextNode("We use cookies to improve your user experience."));
buttonElement.appendChild(document.createTextNode("I like Cookies"));

wrapperDiv.classList.add("wrapper");
imagesDiv.classList.add("top");
cookieIcon.classList.add("cookie-icon");
closeIcon.classList.add("close-icon");
buttonWrapperDiv.classList.add("button-wrapper");

cookieIcon.setAttribute("src", "img/cookie-icon.png");
closeIcon.setAttribute("src", "img/close-icon.png");

const button = buttonElement;

if (localStorage.getItem('cookies') !== 'accepted') {
  button.addEventListener('click', () => {
    cookiePopup.innerHTML = '';
    localStorage.setItem('cookies', 'accepted')
  })
} else {
  cookiePopup.innerHTML = '';
}
