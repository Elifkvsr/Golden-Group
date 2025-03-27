let currentIndex = 0; // Başlangıçta ilk slide'ı göstereceğiz
const slides = document.querySelectorAll(".slidess"); // Tüm slide'ları alıyoruz
const totalSlides = slides.length; // Toplam slide sayısı

// Slider geçiş fonksiyonu
function goToSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slides").style.transform = `translateX(-${index * slideWidth}px)`;
}

document.querySelector(".prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});

document.querySelector(".next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
});

setInterval(function () {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
}, 4000);


const container = document.querySelector('.urun-item-containerr');
const nextBtn = document.querySelector('.next-btnn');
const prevBtn = document.querySelector('.prev-btnn');

let index = 0;
const items = document.querySelectorAll('.urun-itemm');
const itemWidth = items[0].getBoundingClientRect().width + 30;  // Gerçek genişlik hesaplama
const visibleItems = Math.floor(document.querySelector('.urun-item-wrapper').clientWidth / itemWidth);

nextBtn.addEventListener('click', () => {
    if (index < items.length - visibleItems) {
        index++;
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }
});


const itemContainer = document.querySelector('.urun-item-containerrr'); // Yeni değişken adı
const forwardButton = document.querySelector('.next-btnn');
const backwardButton = document.querySelector('.prev-btnn');

let currentPos = 0;
const totalProducts = document.querySelectorAll('.urun-itemmm');
const productWidth = totalProducts[0].getBoundingClientRect().width + 30;
const visibleProducts = Math.floor(document.querySelector('.urun-item-wrapperr').clientWidth / productWidth);

forwardButton.addEventListener('click', () => {
    if (currentPos < totalProducts.length - visibleProducts) {
        currentPos++;
        itemContainer.style.transform = `translateX(-${currentPos * productWidth}px)`;
    }
});

backwardButton.addEventListener('click', () => {
    if (currentPos > 0) {
        currentPos--;
        itemContainer.style.transform = `translateX(-${currentPos * productWidth}px)`;
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.urun-slider-containerr');

    sliderContainers.forEach(container => {
        const sliderWrapper = container.querySelector('.urun-item-wrapperr');
        const sliderContainer = container.querySelector('.urun-item-containerrr');
        const prevBtn = container.querySelector('.prev-btnn');
        const nextBtn = container.querySelector('.next-btnn');
        const slides = container.querySelectorAll('.urun-itemmm');
        const slideWidth = slides[0].offsetWidth + 30;
        let currentIndex = 0;

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1;
            }
            updateSlider();
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        function updateSlider() {
            const offset = -currentIndex * slideWidth;
            sliderContainer.style.transform = `translateX(${offset}px)`;
        }
    });
});



document.querySelector('.kayit-ol-butonu').addEventListener('click', function () {
    const adSoyad = document.querySelector('.ad-soyad-input').value;
    const eposta = document.querySelector('.eposta-input').value;

    if (adSoyad && eposta) {
        alert(`Kayıt Başarılı!\nAd Soyad: ${adSoyad}\nE-posta: ${eposta}`);
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.urun-slider-containerr, .urun-slider-container');

    sliderContainers.forEach(container => {
        const sliderWrapper = container.querySelector('.urun-item-wrapperr, .urun-item-wrapper');
        const sliderContainer = container.querySelector('.urun-item-containerrr, .urun-item-containerr');
        const prevBtn = container.querySelector('.prev-btnn, .prev-btn');
        const nextBtn = container.querySelector('.next-btnn, .next-btn');
        const slides = container.querySelectorAll('.urun-itemmm, .urun-itemm');
        const slideWidth = slides[0].offsetWidth + 30; // Slider genişliği + gap değeri
        let currentIndex = 0;

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1;
            }
            updateSlider();
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        function updateSlider() {
            const offset = -currentIndex * slideWidth;
            sliderContainer.style.transform = `translateX(${offset}px)`;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const dropdownContent = document.querySelector('.dropdown-content');

    menu.addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollTopBtn = document.getElementById('scrollTop');

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


const sliderContainer = document.querySelector('.urun-item-containerr');
const leftArrow = document.querySelector('.prev-btnn');
const rightArrow = document.querySelector('.next-btnn');
const slideItems = document.querySelectorAll('.urun-itemm');

let activeIndex = 0;

function slideToCurrent() {
    const offset = -activeIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

rightArrow.addEventListener('click', () => {
    if (activeIndex < slideItems.length - 1) {
        activeIndex++;
        slideToCurrent();
    }
});

leftArrow.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--;
        slideToCurrent();
    }
});



const urunContainer = document.querySelector('.urun-item-containerr');
const geriButon = document.querySelector('.prev-btnn');
const ileriButon = document.querySelector('.next-btnn');
const urunler = document.querySelectorAll('.urun-itemm');

let aktifIndex = 0;

function guncelleSlider() {
    const kaydir = -aktifIndex * 100;
    urunContainer.style.transform = `translateX(${kaydir}%)`;
}

ileriButon.addEventListener('click', () => {
    if (aktifIndex < urunler.length - 1) {
        aktifIndex++;
        guncelleSlider();
    }
});

geriButon.addEventListener('click', () => {
    if (aktifIndex > 0) {
        aktifIndex--;
        guncelleSlider();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".urun-item-wrapper");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const urunler = document.querySelectorAll(".urun-item");
    const toplamUrun = urunler.length;
    let aktifIndex = 0;

    const guncelleSlider = () => {
        const kaydir = `-${aktifIndex * 100}%`;
        sliderWrapper.style.transform = `translateX(${kaydir})`;
    };

    const ileriGit = () => {
        aktifIndex = (aktifIndex + 1 < toplamUrun) ? aktifIndex + 1 : aktifIndex;
        guncelleSlider();
    };

    const geriGit = () => {
        aktifIndex = (aktifIndex - 1 >= 0) ? aktifIndex - 1 : aktifIndex;
        guncelleSlider();
    };

    nextButton.addEventListener("click", ileriGit);
    prevButton.addEventListener("click", geriGit);
});


document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".urun-item-wrapper");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const urunler = document.querySelectorAll(".urun-item");
    const toplamUrun = urunler.length;
    let aktifIndex = 0;

    const guncelleSlider = () => {
        const kaydir = `-${aktifIndex * 100}%`;
        sliderWrapper.style.transform = `translateX(${kaydir})`;
    };

    const ileriGit = () => {
        aktifIndex = (aktifIndex + 1 < toplamUrun) ? aktifIndex + 1 : aktifIndex;
        guncelleSlider();
    };

    const geriGit = () => {
        aktifIndex = (aktifIndex - 1 >= 0) ? aktifIndex - 1 : aktifIndex;
        guncelleSlider();
    };

    nextButton.addEventListener("click", ileriGit);
    prevButton.addEventListener("click", geriGit);
});





// const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
// let currentIndexSlider = 0;

// function updateImage() {
//     document.getElementById("slider").src = images[currentIndexSlider];
// }

// function prevImage() {
//     currentIndexSlider = (currentIndexSlider - 1 + images.length) % images.length;
//     updateImage();
// }

// function nextImage() {
//     currentIndexSlider = (currentIndexSlider + 1) % images.length;
//     updateImage();
// }

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//         prevImage();
//     } else if (event.key === "ArrowRight") {
//         nextImage();
//     }
// });


//SLİDER
class CoffeeSlider {
    constructor() {
        this.slider = document.querySelector('.urun-kahve-tanitim');
        if (!this.slider) return;

        this.init();
    }

    init() {
        this.mainImg = this.slider.querySelector('.main-image');
        this.track = this.slider.querySelector('.slider-track');
        this.thumbs = Array.from(this.slider.querySelectorAll('.thumb'));
        this.prevBtn = this.slider.querySelector('.left-nav');
        this.nextBtn = this.slider.querySelector('.right-nav');

        if (!this.thumbs || this.thumbs.length === 0) {
            console.error("Hata: Küçük resimler (thumb) bulunamadı!");
            return;
        }

        this.itemWidth = this.thumbs[0] ? this.thumbs[0].getBoundingClientRect().width + 10 : 70;
        this.visibleItems = 3;
        this.currentIndex = 0;

        this.setupEvents();
        this.updateSlider();
    }

    setupEvents() {
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));

        this.thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => this.goTo(index));
        });
    }

    navigate(direction) {
        let newIndex = this.currentIndex + direction;

        if (newIndex < 0) {
            newIndex = this.thumbs.length - 1;
        } else if (newIndex >= this.thumbs.length) {
            newIndex = 0;
        }

        this.goTo(newIndex);
    }

    goTo(index) {
        if (index < 0 || index >= this.thumbs.length) return;

        this.currentIndex = index;
        this.updateSlider();
    }

    updateSlider() {
        if (!this.thumbs[this.currentIndex]) return;

        this.mainImg.src = this.thumbs[this.currentIndex].src;

        this.thumbs.forEach((t, i) => {
            t.classList.toggle('active', i === this.currentIndex);
        });

        let maxScroll = (this.thumbs.length - this.visibleItems) * this.itemWidth;
        let scrollPos = Math.min(this.currentIndex * this.itemWidth, maxScroll);

        this.track.style.transform = `translateX(-${scrollPos}px)`;
    }
}



