const productContainer = document.querySelector(".productContainer");

fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach((element) => {
    productContainer.innerHTML += `

      <article class="produkter ${element.soldout ? "soldout" : ""} ${
      element.discount ? "discounted" : ""
    }">
        ${element.soldout ? `<div class="label">Udsolgt</div>` : ""}
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
          alt="${element.productdisplayname}"
        />
        <h3>${element.productdisplayname}</h3>
        <p class="subtle">${element.articletype} / ${element.brandname}</p>
        <p class="price">DKK <span>${element.price}</span>,-</p>
        ${
          element.discount
            ? `
          <div class="discounted">
            <div class="badge">${element.discount}%</div>
            <p>Now DKK ${Math.round(
              element.price - (element.price * element.discount) / 100
            )},-</p>
          </div>
        `
            : ""
        }
      <a href="produkt.html?id=${element.id}" class="readmore">Read More</a>
      </article>`;
  });
}
