document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const totalItems = items.length;

    function updateCarousel() {
        // Remover la clase 'active' de todos los elementos
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Añadir 'active' al elemento actual
        items[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems; // Circular entre las imágenes
        updateCarousel();
    }

    // Cambiar la imagen automáticamente cada 5 segundos
    setInterval(nextSlide, 5000);

    // Permitir clic en los puntos para cambiar de imagen
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});
