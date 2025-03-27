document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("mainImage");

    if (thumbnails.length === 0) {
        console.error("Hata: .thumbnail öğeleri bulunamadı!");
        return;
    }

    function changeImage(element) {
        if (!element) return;
        mainImage.src = element.src;
        thumbnails.forEach(img => img.classList.remove("active"));
        element.classList.add("active");
        currentIndex = Array.from(thumbnails).indexOf(element);
    }

    function prevImage() {
        if (thumbnails.length === 0) return;
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(thumbnails[currentIndex]);
    }

    function nextImage() {
        if (thumbnails.length === 0) return;
        currentIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(thumbnails[currentIndex]);
    }

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            changeImage(thumbnail);
        });
    });

    // Butonları ekleyelim
    const prevBtn = document.querySelector(".prevv-btn");
    const nextBtn = document.querySelector(".nextt-btn");

    if (prevBtn) prevBtn.addEventListener("click", prevImage);
    else console.error("Hata: .prev-btn bulunamadı!");

    if (nextBtn) nextBtn.addEventListener("click", nextImage);
    else console.error("Hata: .next-btn bulunamadı!");
});



// Slider'ın mevcut durumu
let currentIndex = 0; // Başlangıç indeks
const items = document.querySelectorAll('.urun-itemmm'); // Resim öğeleri
const itemWrapper = document.querySelector('.urun-item-wrapperr'); // Slider'ı tutan div

const totalItems = items.length;  // Toplam öğe sayısı
const itemWidth = items[0].offsetWidth + 10;  // Her öğenin genişliği (margin dahil)

// İleri butonuna tıklama işlevi
document.querySelector('.next-btnn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++; // Bir öğe ileri kaydır
    } else {
        currentIndex = 0; // Eğer son öğedeysek, ilk öğeye dön
    }
    updateSliderPosition(); // Slider pozisyonunu güncelle
});

// Geri butonuna tıklama işlevi
document.querySelector('.prev-btnn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Bir öğe geri kaydır
    } else {
        currentIndex = totalItems - 1; // Eğer ilk öğedeysek, son öğeye dön
    }
    updateSliderPosition(); // Slider pozisyonunu güncelle
});

// Slider pozisyonunu güncelleme
function updateSliderPosition() {
    itemWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}



// Slider'ın mevcut durumu
let currentSlideIndex = 0; // Başlangıç indeks
const slides = document.querySelectorAll('.slidess'); // Tüm slider öğeleri
const totalSlides = slides.length; // Toplam öğe sayısı
const slideWrapper = document.querySelector('.slides'); // Slider'ı tutan div

// Otomatik geçiş için fonksiyon
function autoSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Eğer son slayta ulaştıysa, başa dön
    }
    updateSliderPosition(); // Slider pozisyonunu güncelle
}

// Butonlara tıklama işlevi
document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Son slayta geldiyse, başa dön
    }
    updateSliderPosition(); // Slider pozisyonunu güncelle
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1; // İlk slayta geldiyse, sona dön
    }
    updateSliderPosition(); // Slider pozisyonunu güncelle
});

// Slider pozisyonunu güncelleme
function updateSliderPosition() {
    slideWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`; // Her slaytı kaydır
}

// Otomatik geçişi başlat
let slideInterval = setInterval(autoSlide, 3000); // 3 saniyede bir geçiş

// Opsiyonel: Slider'a fare ile tıklanıp durdurma
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval); // Fare ile üzerine gelince otomatik geçişi durdur
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000); // Fareyi slider'dan çekince tekrar başlat
});


document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail"); // Tüm küçük resimler
    const mainImage = document.getElementById("mainImage"); // Ana resim

    // Her bir küçük resme tıklama işlemi ekle
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            mainImage.src = thumbnail.src; // Ana resmi tıklanan küçük resimle değiştir
        });
    });

    // Slider için ileri ve geri butonlarına işlev ekleyelim
    let currentIndex = 0;
    const items = document.querySelectorAll('.urun-itemmm'); // Resim öğeleri
    const itemWrapper = document.querySelector('.urun-item-wrapperr'); // Slider'ı tutan div

    const totalItems = items.length;  // Toplam öğe sayısı
    const itemWidth = items[0].offsetWidth + 10;  // Her öğenin genişliği (margin dahil)

    // İleri butonuna tıklama işlevi
    const nextBtn = document.querySelector('.next-btnn');
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++; // Bir öğe ileri kaydır
        } else {
            currentIndex = 0; // Eğer son öğedeysek, ilk öğeye dön
        }
        updateSliderPosition(); // Slider pozisyonunu güncelle
    });

    // Geri butonuna tıklama işlevi
    const prevBtn = document.querySelector('.prev-btnn');
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--; // Bir öğe geri kaydır
        } else {
            currentIndex = totalItems - 1; // Eğer ilk öğedeysek, son öğeye dön
        }
        updateSliderPosition(); // Slider pozisyonunu güncelle
    });

    // Slider pozisyonunu güncelleme
    function updateSliderPosition() {
        itemWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Her öğeyi kaydır
    }
});
