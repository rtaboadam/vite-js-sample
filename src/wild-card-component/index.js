// Custom Event for to handle inputs
export const SliderInputChangeEvent = new Event("sliderInputChanged", { bubbles: true });
export const WildCardComponentChangedEvent = new Event("wildCardComponentChanged", { bubbles: true });

/**
 * Class WildCardComponent for controlling and managing the state of sliders. 
 * This class is functional so changes related to changing the HTML, 
 * such text changes should be created separately.
 * @param {HTMLElement} rootComponent 
 * @param {CustomOperator} operator
 */
export function WildCardComponent(rootComponent, operator) {
    this.rootComponent = rootComponent;
    this.operator = operator;
    // /**
    //  * @type {Event}
    //  */
    // this.customEvent = new Event(`WildCardEvent-${this.rootComponent.id}`, { bubbles: true })

    /**
     * @type {HTMLSpanElement} 
     */
    this.resultSpan = this.rootComponent.querySelector(".result-container > span");

    /**
     * @type {NodeListOf<HTMLInputElement>} 
     */
    this.slidersInputs = this.rootComponent.querySelectorAll(".slider-container > input");

    /**
     * @type {HTMLSelectElement}
     */
    this.selectOperator = this.rootComponent.querySelector(".select-container > select");

    this.selectOperator.addEventListener("input", function () {
        this.dispatchEvent(SliderInputChangeEvent);
    })
    this.slidersInputs.forEach(function (inputEl) {
        inputEl.addEventListener("input", function () {
            this.dispatchEvent(SliderInputChangeEvent)
        });
    })
    this.rootComponent.addEventListener(SliderInputChangeEvent.type, this.updateResult.bind(this));

    /** 
     * Update the result at the moment at the object is created.
     * This will ensure that the reult is okay
     */
    this.updateResult();
}

WildCardComponent.prototype.updateResult = function () {
    const askedOperation = this.selectOperator.value;
    const callback = this.operator.getOperator(askedOperation);
    const inputValues = Object.values(this.slidersInputs).map(inputEl => inputEl.value);
    const result = callback(inputValues)
    this.resultSpan.textContent = result;
    this.rootComponent.dispatchEvent(WildCardComponentChangedEvent)
    return result;
}

WildCardComponent.prototype.getValue = function () {
    return this.resultSpan.textContent
}




