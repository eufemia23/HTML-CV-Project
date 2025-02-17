const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentChosen = document.querySelector(tab.dataset.tab)
    contents.forEach(content => {
      content.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    contentChosen.classList.add('active')
  })
})






