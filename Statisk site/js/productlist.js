const productlistContainer = document.querySelector(".productContainer");
let allData, currentDataset;

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.querySelector("h1").textContent = category;

document.querySelector("#filters").addEventListener("click", showFiltered);
document.querySelector("#sorting").addEventListener("click", showSorted);

function showSorted(event) {
  const direction = event.target.dataset.direction;
  console.log(direction);

  if (!direction) return; // hvis man klikker udenfor en knap

  if (direction == "lohi") {
    currentDataset.sort(
      (firstItem, secondItem) => firstItem.price - secondItem.price
    );
  } else {
    currentDataset.sort(
      (firstItem, secondItem) => secondItem.price - firstItem.price
    );
  }
  showProducts(currentDataset);
}

function showFiltered(event) {
  const gender = event.target.dataset.gender;
  if (!gender) return; // hvis man klikker udenfor en knap

  if (gender == "All") {
    currentDataset = allData;
  } else {
    currentDataset = allData.filter((product) => product.gender == gender);
  }
  showProducts(currentDataset);
}

const myRange = document.querySelector("#myRange");
const maxDisp = document.querySelector("#max");
const minDisp = document.querySelector("#min");

myRange.addEventListener("input", (event) => {
  maxDisp.textContent = event.target.value;
  filterByPrice(event.target.value);
});

function filterByPrice(maxPrice) {
  const udsnit = allData.filter((product) => product.price <= maxPrice);
  currentDataset = udsnit;
  showProducts(currentDataset);
}

function highestPrice(arr) {
  arr.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  const highest = arr[arr.length - 1].price;
  myRange.max = highest;
  maxDisp.textContent = highest;
  myRange.min = arr[0].price;
  minDisp.textContent = arr[0].price;
}

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    currentDataset = allData;
    showProducts(allData);
  });

function showProducts(products) {
  console.log(products);
  productlistContainer.innerHTML = "";
  products.forEach((element) => {
    console.log(element);
    productlistContainer.innerHTML += `<article class="products ${
      element.soldout ? "soldout" : ""
    } ${element.discount ? "discounted" : ""}">
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
