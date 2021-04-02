const modalBtn = document.querySelector('.modal-btn')
const overlayBtn = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

//click event on modal-btn
modalBtn.addEventListener('click', function () {
  overlayBtn.classList.add('open-modal')
})

closeBtn.addEventListener('click', function () {
  overlayBtn.classList.remove('open-modal')
})
