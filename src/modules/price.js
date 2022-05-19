import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const price = () => {
  const inputsPrice = document.querySelectorAll('.filter-price_input')
  const MIN = "min";
  let valueMin = 0;
  let valueMax;

  inputsPrice.forEach((input) => {
    input.addEventListener('input', () => {
      const value = input.value;

      if (input.id === MIN) {
      valueMin = value 
    } else valueMax = value;
      getData().then((data) => {
        renderGoods(priceFilter(data, valueMin, valueMax))
      });
    })
  })
}

export default price