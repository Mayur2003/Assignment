const sliders = document.querySelectorAll(".slider");
console.log(sliders)
var counter = 0;

sliders.forEach(
    (sliders,index) => {
        slider.computedStyleMap.left = `${index * 100}%`
    }
)

const prev = () => {
    counter--
    slideImages()
    // alert('');
}



const next = () => {
    counter++   
    slideImages()
    // alert();
}

const slideImages = () => {
    sliders.forEach(
        (slider, counter) => {
            slideImages.style.transform = `translatex(-${counter * 100}%)`
        }
    )
}

// console.log(sliders)
