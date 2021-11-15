// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = price * quantity;
  return price * quantity;
}

function calculateAll() {
   let suma = 0;
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++) {
    suma += updateSubtotal(products[i])
  }

  const total = document.querySelector("#total-value span")
  total.innerHTML = suma;
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode
  const table = product.parentNode
  table.removeChild(product)
  calculateAll();
}


function createProduct() {
  const table = document.querySelector("tbody")
  const name = document.querySelector(".create-product td input")
  const price = document.querySelector("#new_price")
  console.log(table)
  console.log(name)
  console.log(price)
  const newProdut = document.createElement('tr')
  newProdut.classList.add('product')
  newProdut.innerHTML = `<td class="name">
                            <span>${name.value}</span>
                          </td>
                          <td class="price">$<span>${price.value}</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity" />
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                          </td>`
  table.appendChild(newProdut)
  name.value= ''
  price.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtnList = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener('click', removeProduct);
  }
  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
