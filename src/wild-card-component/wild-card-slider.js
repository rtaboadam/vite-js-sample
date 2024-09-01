/**
 * This a cosmetic event handler to change the name of the slider
 * It was not added to the component as the component need to handler
 * only functionality.
 * 
 * @param { String[] } array 
 */
export function updateSliderText(array) {
    /**
     * @this {HTMLElement} 
     */
    return function() {
        const sliderValue = this.querySelector("span.slider-value");
        const slidetInput = this.querySelector("input");
        sliderValue.textContent = array[slidetInput.value - 1];
    }
}




