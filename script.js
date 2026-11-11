const htmlInput = document.querySelector('#html-code');
const cssInput = document.querySelector('#css-code');
const preview = document.querySelector('#preview');

function showPage() {
  preview.srcdoc = '<style>' + cssInput.value + '</style>' + htmlInput.value;
}

document.querySelector('#show-page').addEventListener('click', showPage);
showPage();
