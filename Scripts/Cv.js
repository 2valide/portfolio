document.addEventListener('DOMContentLoaded', function () {
    const cvImage = document.querySelector('.cv-img');
    const downloadButton = document.querySelector('.cssbuttons-io-button');

    cvImage.addEventListener('mouseover', function () {
        // cvImage.style.filter = 'blur(3px)';
        downloadButton.style.display = 'flex';
    });

    cvImage.addEventListener('mouseout', function () {
        // cvImage.style.filter = 'blur(0)';
        downloadButton.style.display = 'none';
    });

    downloadButton.addEventListener('mouseover', function () {
        // cvImage.style.filter = 'blur(30px)';
        downloadButton.style.display = 'flex';
    });

    downloadButton.addEventListener('mouseout', function () {
        // cvImage.style.filter = 'blur(0)';
    });
});