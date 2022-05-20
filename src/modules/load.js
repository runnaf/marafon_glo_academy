import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  getData().then((data) => {
    const quantityOfGoods = document.querySelector('.counter');
    renderGoods(data)
    const cart = localStorage.getItem('cart') ? 
          JSON.parse(localStorage.getItem('cart')) : [];
    quantityOfGoods.textContent = cart.length
  });
}

export default load
