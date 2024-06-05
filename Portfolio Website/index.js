/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

// Mouse Trailer

// const trailer = document.getElementById("trailer");
// const targetDiv = document.querySelector(".image");

// window.onmousemove = e => {
//     const x = e.clientX - trailer.offsetWidth / 2,
//         y = e.clientY - trailer.offsetHeight / 2;

//     // trailer.style.transform= `translate(${x}px,${y}px)`;
//     // const keyframes = {
//     //     transform: `translate(${x}px,${y}px)`,
//     //     width: "20px",  // Increase the width
//     //     height: "20px"  // Increase the height
//     // };

//     // if (e.target === targetDiv) {
//     //     // Apply different styles when hovering over the target div
//     //     keyframes.width = "150px";  // Increase the width further
//     //     keyframes.height = "150px"; // Increase the height further
//     //     // keyframes.backgroundColor = "red"; // Add additional styles if needed
//     // }

//     const keyframes = [
//         {
//             transform: `translate(${x}px, ${y}px)`,
//             width: "20px",
//             height: "20px"
//         }
//     ];

//     if (e.target === targetDiv) {
//         keyframes.push({
//             transform: `translate(${x}px, ${y}px)`,
//             width: "50px",
//             height: "50px"
//         });
//     }

//     trailer.animate(keyframes, {
//         duration: 200,
//         fill: "forwards"
//     });
// }


const trailer = document.getElementById("trailer");
// document.querySelectorAll("nav").classList.add("interactable");
const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
        opacity: interacting ? 0.5 : 1
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

    animateTrailer(e, interacting);
}


// Mouse with contrast background
// const trailer = document.getElementById("trailer");

// function getContrastColor(hex) {
//     return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
// }

// function animateTrailer(e, interacting) {
//     const x = e.clientX - trailer.offsetWidth / 2;
//     const y = e.clientY - trailer.offsetHeight / 2;

//     const elementBelow = document.elementFromPoint(e.clientX, e.clientY + 1);
//     const computedStyle = getComputedStyle(elementBelow);
//     const backgroundColor = computedStyle.backgroundColor;
//     const contrastColor = getContrastColor(backgroundColor);

//     const keyframes = {
//         transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
//     }

//     trailer.animate(keyframes, {
//         duration: 800,
//         fill: "forwards"
//     });
//     trailer.style.backgroundColor = contrastColor;
// }

// window.onmousemove = e => {
//     const interactable = e.target.closest(".interactable");
//     const interacting = interactable !== null;

//     animateTrailer(e, interacting);
// };