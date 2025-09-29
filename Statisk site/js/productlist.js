const productlistContainer = document.querySelector(".productContainer");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.querySelector("h1").textContent = category;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=48&category=${category}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach((element) => {
    productlistContainer.innerHTML += `
      <article class="products ${element.soldout ? "soldout" : ""} ${
      element.discount ? "discounted" : ""
    }">
        ${element.soldout ? `<div class="label">Udsolgt</div>` : ""}
        <a href="product.html?id=${element.id}" class="readmore">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
            alt="${element.productdisplayname}"
          />
          <h4>${element.brandname}</h4>
          <h3>${element.productdisplayname}</h3>
          <div class="discounted">
            <p class="price">DKK <span>${element.price}</span>,-</p>
            ${
              element.discount
                ? `
                  <div class="badge">${element.discount}%</div>
                  <p class="rabat">Now DKK ${Math.round(
                    element.price - (element.price * element.discount) / 100
                  )},-</p>
                `
                : ""
            }
          </div>
        </a>
      </article>
    `;
  });
}
