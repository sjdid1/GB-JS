
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navigationPoints = document.getElementById('navigationPoints');

    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach(image => image.style.display = 'none');
        images[index].style.display = 'block';
    }

    function updateNavigationPoints() {
        navigationPoints.innerHTML = '';
        for (let i = 0; i < images.length; i++) {
            const point = document.createElement('span');
            point.classList.add('navigation-point');
            point.addEventListener('click', () => {
                showImage(i);
                currentImageIndex = i;
            });
            navigationPoints.appendChild(point);
        }
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    showImage(currentImageIndex);
    updateNavigationPoints();
