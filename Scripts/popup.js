function closePopup(id) {
    document.querySelector("#"+id).style.display = 'none';
}

function openPopup(id) {
    document.querySelector("#"+id).style.display = 'flex';
}

document.querySelector('.popup').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
});
