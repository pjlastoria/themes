let slides = document.getElementsByClassName('slide');

let arrowBtns = document.getElementsByClassName('arrow-wrapper')[0].children;
let leftArrow = arrowBtns[0];
let rightArrow = arrowBtns[1];

leftArrow.addEventListener('click',  prevSlide);
rightArrow.addEventListener('click', nextSlide);

let state = {
    currSlide: 0,
    currQuote: 0
};

function deactivateCurrSlide() {
    slides[state.currSlide].classList.remove('active');
    slides[state.currSlide].classList.remove('prev-slide');
    slides[state.currSlide].classList.remove('next-slide');
}

function prevSlide() {
    deactivateCurrSlide();
    
    if(state.currSlide == 0) {
        state.currSlide = slides.length;
    }
    
    slides[--state.currSlide].classList.add('active');
    slides[state.currSlide].classList.add('prev-slide');
}

function nextSlide() {
    deactivateCurrSlide();
    
    if(state.currSlide == slides.length-1) {
        state.currSlide = -1;
    }
    
    slides[++state.currSlide].classList.add('active');
    slides[state.currSlide].classList.add('next-slide');
}

//quote rotator

let quotes = document.getElementsByClassName('quote-wrapper');
let interval = setInterval(nextQuote, 6000);

function nextQuote() {
    quotes[state.currQuote].classList.remove('active-quote');
    
    if(state.currQuote == quotes.length-1) {
        state.currQuote = -1;
    }
    
    quotes[++state.currQuote].classList.add('active-quote');
}

function autoRotate() {

}

/*


RewriteBase /public/
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /public/index.php [L]


RewriteRule ^([^\.]+)$ $1.php [NC,L]
*/ 