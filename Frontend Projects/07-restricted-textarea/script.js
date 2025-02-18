const textarea = document.getElementById('textarea');
const charDisplay = document.getElementById('char-length');

textarea.addEventListener('input', () => {
  const charNumber = textarea.value.length;
  charDisplay.innerHTML = `${charNumber} / 250`;

  if (charNumber === 250) {
    textarea.classList.add('limit');
    charDisplay.classList.add('limit');
  } else {
    textarea.classList.remove('limit');
    charDisplay.classList.remove('limit');
  }
})