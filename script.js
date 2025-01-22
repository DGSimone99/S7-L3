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
                            </div>
                        </div>`;
      row.appendChild(div);

      let addCart = document.createElement("div");
      addCart.innerHTML = `<button type="button" class="btn btn-primary">Aggiungi al Carrello</button>`;

      let removeCard = document.createElement("div");
      removeCard.innerHTML = `<button type="button" class="btn btn-primary">Rimuovi</button>`;

      let cardBody = document.querySelectorAll(".card-body");

      cardBody.forEach((element) => {
        element.appendChild(addCart);
        element.appendChild(removeCard);
      });
      let cart = document.querySelector(".cart");

      addCart.addEventListener("click", () => {
        let cartItem = document.createElement("div");
        cartItem.innerHTML = `<div class="card cardCart">
                                <div class="card-body">
                                    <h5 class="card-title">${books.title}</h5>
                                    <p class="card-text">${books.price}€</p>
                                </div>
                            </div>`;

        let removeCart = document.createElement("div");
        removeCart.innerHTML = `<button type="button" class="btn btn-primary">Rimuovi dal carrello</button>`;
        cartItem.appendChild(removeCart);
        cart.appendChild(cartItem);

        removeCart.addEventListener("click", () => {
          cartItem.remove();
        });
      });

      removeCard.addEventListener("click", () => {
        let cardRemover = removeCard.closest(".card");
        cardRemover.remove();
      });
    });
  });
