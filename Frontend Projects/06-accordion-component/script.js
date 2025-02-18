const buttons = document.querySelectorAll('[data-button]');
const answers = document.querySelectorAll('[data-answer]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const answerChosen = document.querySelector(button.dataset.button)
    answers.forEach(answer => {
      answer.classList.remove('active')
    })
    answerChosen.classList.add('active')
  })
})
