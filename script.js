const products = {
  plainBurger: {
    name: "GAMBURGER",
    price: 10000,
    kcal: 250,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
    get totalKcal() {
      return this.kcal * this.amount;
    },
  },
  freshBurger: {
    name: "GAMBURGER FRESH",
    price: 20500,
    kcal: 450,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
    get totalKcal() {
      return this.kcal * this.amount;
    },
  },
  freshCombo: {
    name: "FRESH COMBO",
    price: 31900,
    kcal: 700,
    amount: 0,
    get totalPrice() {
      return this.price * this.amount;
    },
    get totalKcal() {
      return this.kcal * this.amount;
    },
  },
};

const productBtns = document.querySelectorAll(".main__product-btn");
productBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const parent = event.currentTarget.closest(".main__product"),
      parentId = parent.getAttribute("id"),
      productAmount = parent.querySelector(".main__product-num"),
      productTotalPrice = parent.querySelector(".main__product-price span"),
      productTotalKcal = parent.querySelector(".main__product-kcall span"),
      btnPlusOrMinus = event.currentTarget.getAttribute("data-symbol");

    if (btnPlusOrMinus === "+") {
      products[parentId].amount++;
    } else if (products[parentId].amount > 0) {
      products[parentId].amount--;
    }

    productAmount.innerHTML = products[parentId].amount;
    productTotalPrice.innerHTML = products[parentId].totalPrice;
    productTotalKcal.innerHTML = products[parentId].totalKcal;
  });
});

// for (let i = 0; i < productBtns.length; i++) {
//   const btn = productBtns[i];
//   btn.addEventListener('click',(hodisa)=>{
//     console.log(hodisa);
//   })
// }

const receipt = document.querySelector(".receipt");
const receiptBtn = document.querySelector(".addCart");
const receiptWindow = document.querySelector(".receipt__window");
const receiptOut = document.querySelector(".receipt__window-out");
const receiptPay = document.querySelector(".receipt__window-btn");

// receiptBtn.addEventListener('click',()=>{})
const receiptBtnHandleClick = () => {
  receipt.style.display = "flex";
  setTimeout(() => (receipt.style.opacity = "1"), 50);
  setTimeout(() => (receiptWindow.style.top = "20%"), 100);
  let text = `<h3 class="receipt__title">Purchased: </h3>`
  const values = Object.values(products)
  const cart = values.filter(burger => burger.amount)
  cart.forEach((burger,i) =>{
    text += `
    <div class="receipt__product">
      <span class="receipt__index">${i+1}</span>
      <p class="receipt__name">${burger.name}</p>
      <p class="receipt__amount">${burger.amount} x ${burger.price}</p>
      <p class="receipt__price">${burger.totalPrice}</p>
    </div>
  `
  })
  
  receiptOut.innerHTML = text
};

receiptBtn.onclick = receiptBtnHandleClick;
