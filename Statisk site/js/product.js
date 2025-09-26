const productContainer = document.querySelector("#productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(params);
console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    console.log(product.brandname);

    productContainer.innerHTML = `
    <ol class="breadcrumbs">
      <li><a href="index.html">Home</a></li>
      <li><a href="produktliste.html">Produktliste</a></li>
      <li>${product.productdisplayname}</li>
    </ol>
  
    <div class="productMain">
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="produktbillede"
        class="productbillede"
      />
      <section class="purchaseBox">
        <h3>${product.productdisplayname}</h3>
        <br/>
        <h4>Price: <span>DKK ${product.price},-</span></h4>
        <p>Color: <span>${product.basecolour}</span></p>
        <p>Gender: <span>${product.gender}</span></p>
  
        <form class="form">
          <label>
            Choose a size
            <select name="size">
              ${product.sizefitdesc}
            </select>
          </label>
          <button>Add to Basket</button>
        </form>
      </section>
    </div>
  
    <section class="info">
      <h2>Product Information</h2>
      <dl>
        <dt>Production year:</dt>
        <dd>${product.productionyear}</dd>
        <dt>Product information:</dt>
        <dd>${product.description}</dd>
      </dl>
      <br/>
      <h1>${product.brandname}</h1>
      <p>${product.brandbio}</p>
    </section>
  `;
  });
