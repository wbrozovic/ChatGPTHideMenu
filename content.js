// This extension adds a button to the top of the page that allows you to hide the menu on the left side of the page.


let newChatBtn = document.querySelector("nav > a")
let navBar = document.querySelector("nav")
let navParent = navBar.parentElement.parentElement.parentElement.parentElement
let closeBtn = document.createElement('button')

closeBtn.classList.add('menu-btn__open')
closeBtn.innerText = 'Hide Menu <--'
closeBtn.addEventListener('click', menuBtnClick)

newChatBtn.insertAdjacentElement('beforebegin', closeBtn)

let openBtn = document.createElement('button')
openBtn.innerText = 'Open Menu -->'
openBtn.style.display = 'none'
openBtn.classList.add('menu-btn__open')
openBtn.classList.add('menu-btn__closed')
openBtn.setAttribute('style', 'display: none; position: absolute; top: 10px; left: 0px;')
openBtn.addEventListener('click', openMenuClick)

let mainChatContainer = document.querySelector('main')
mainChatContainer = mainChatContainer.querySelector('div div div div div')
mainChatContainer.insertAdjacentElement('afterbegin', openBtn)

function menuBtnClick(event) {
  // navParent.style.display = 'none'
  navParent.setAttribute('style', 'width: 35px; content-visibility: hidden;')
  openBtn.setAttribute('style', 'display: contents; position: absolute; top: 10px; left: 0px;')
  openBtn.parentElement.setAttribute('style', 'left: 10px !important;')
}

function openMenuClick(event) {
  navParent.setAttribute('style', 'width: 260px; content-visibility: visible;')
  openBtn.setAttribute('style', 'display: none; position: absolute; top: 10px; left: 0px;')
}

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      const removedNodes = Array.from(mutation.removedNodes);
      if (removedNodes.includes(closeBtn)) {
        // Button is about to be removed from the DOM
        console.log('Button is being removed!');
        // Your code here to handle the button removal
        window.alert('hello')
      }
    }
  });
});

// Start observing changes in the parent node of the button
observer.observe(closeBtn.parentNode, { childList: true });





