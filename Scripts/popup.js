function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}

function openPopup() {
    document.querySelector('.popup').style.display = 'flex';
}

document.querySelector('.popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
});
