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
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="produktbillede"
        class="productbillede"
      />
      <section class="purchaseBox">
        <h3>${product.productdisplayname}</h3>
        <p><${product.brandname}/p>

        <h4>Price: <span>DKK ${product.price},-</span></h4>
         <p>Color: <span>${product.basecolour}</span></p>
           <p>Gender: <span>${product.gender}</span></p>

       
        <form class="form">
          <label
            >Choose a size
            <select name="size">
            ${product.sizefitdesc}
            </select>
          </label>
          <button>Add to Basket</button>
        </form>

      </section>
      <section class="info">
        <h2>Product Information</h2>
        <dl>
          <dt>Production year:</dt>
          <dd>${product.productionyear}</dd>
          <br/>
          <dt>Product information:
          <dd>${product.description}</dd>
        </dl>
        <h1>${product.brandname}</h1>
        <p>${product.brandbio}</p>
      </section>
`;
  });
