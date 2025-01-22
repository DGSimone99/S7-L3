fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((booksObj) => {
    console.log(booksObj);

    const row = document.querySelector("#book-list");
    booksObj.forEach((books) => {
      let div = document.createElement("div");

      div.classList.add("col");

      div.innerHTML = `<div class="card" style="height:650px">
                            <img src="${books.img}" class="card-img-top" alt="..." style="max-height:400px">
                            <div class="card-body">
                                <h5 class="card-title">${books.title}</h5>
                                <p class="card-text">${books.price}€</p>
                                <a href="#" class="btn btn-primary add">Compra</a>
                                <button type="button" class="btn btn-primary remove">Scarta</button>
                            </div>
                        </div>`;
      row.appendChild(div);

      let remove = document.querySelectorAll(".remove");
      let addCart = document.querySelectorAll(".add");

      let cart = document.querySelector(".cart");

      addCart.forEach((element) => {
        element.addEventListener("click", () => {
          let divParent = element.parentElement;
          let card = divParent.parentElement;
          let cartItem = document.createElement("div");

          sessionStorage.setItem("card", card.innerHTML);

          let getCartItem = sessionStorage.getItem("card");
          cartItem.innerHTML = getCartItem;

          cart.appendChild(cartItem);
        });
      });

      remove.forEach((element) => {
        element.addEventListener("click", () => {
          let divParent = element.parentElement;
          let card = divParent.parentElement;

          if (div.classList.contains("cartItem")) {
            row.appendChild(card);
          } else {
            card.remove();
          }
        });
      });
    });
  });
