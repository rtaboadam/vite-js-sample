import { CustomOperator } from "./src/common/custom-operator";
import { WildCardComponent } from "./src/wild-card-component";
import { updateSliderText } from "./src/wild-card-component/wild-card-slider"
import * as R from "ramda";

window.onload = function () {
  const wildCardComponents = document.querySelectorAll(".wildcard");

  const customOperator = new CustomOperator();
  customOperator.addOperator("sum", R.sum);
  customOperator.addOperator("multiply", R.product);
  customOperator.addOperator("average", R.median);

  const textValues = ["Small", "Medium", "Large"];
  const wildCards = [];

  wildCardComponents.forEach(function (wildCardComponent) {
    const component = new WildCardComponent(wildCardComponent, customOperator);
    wildCards.push(component);
    const sliders = wildCardComponent.querySelectorAll(".slider-container");
    sliders.forEach(el => {
      (updateSliderText(textValues).bind(el))();
      el.addEventListener("input", updateSliderText(textValues))
    });
  });
}