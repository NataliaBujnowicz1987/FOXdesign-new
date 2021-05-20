// =======================
// logo fox animation
// =======================
const logo = document.getElementById('logo');
const tl = gsap.timeline({ delay: 0.4, defaults: { visibility: 'hidden', ease: 'power2.inOut' } })

// fox
tl.staggerFromTo(logo.children, 2,
    { scale: 0.4, opacity: 0, },
    { scale: 1, opacity: 1, visibility: "visible" }, 0.1)


// FOX logo Grab and Drop - https://greensock.com/svg-drag/
Draggable.create('.logo-element', {
    bounds: 'svg'
});

Draggable.create('.design', {
    bounds: '.section-container'
});


// bubble animation - mouse move
function mouseMoveAnimation(x, y) {
    let size = Math.random() * 40 + 10;

    x -= (size / 2);
    y -= (size / 2);

    const animationDIV = document.createElement('div');
    animationDIV.classList.add("animation");
    document.body.appendChild(animationDIV);

    TweenMax.set(animationDIV, {
        x: x,
        y: y,
        width: size,
        height: size,
        background: function () {
            return `hsl(${Math.random() * 130 + 380}, 50%, 50%)`
        }
    });
    TweenMax.to(animationDIV, Math.random() * 2 + 1, {
        x: x + (Math.random() - 0.5) * 200,
        y: y + (Math.random() - 0.5) * 200,
        opacity: 0,
        scale: 0,
        ease: Power2.easeOut,
        onComplete: function () {
            document.body.removeChild(animationDIV);
        }
    })
}

window.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    mouseMoveAnimation(x, y);
});
document.body.addEventListener('touchmove', function (e) {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    e.preventDefault();
    mouseMoveAnimation(x, y);
});

// slider
let slideIndex = 1;
function currentSlide(e) {
    showSlides((slideIndex = e));
}
function showSlides(e) {
    let t;
    const sliderBox = document.getElementsByClassName("slider-box"),
        dot = document.getElementsByClassName("dot");
    for (e > sliderBox.length && (slideIndex = 1), e < 1 && (slideIndex = sliderBox.length), t = 0; t < sliderBox.length; t++) sliderBox[t].style.display = "none";
    for (t = 0; t < dot.length; t++) dot[t].className = dot[t].className.replace(" active", "");
    (sliderBox[slideIndex - 1].style.display = "block"), (dot[slideIndex - 1].className += " active");
}
showSlides(slideIndex);


