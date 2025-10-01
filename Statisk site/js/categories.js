const categoriesSection = document.querySelector(".categories");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categoryList) {
  categoryList.forEach((category) => {
    categoriesSection.innerHTML += `<a href="productlist.html?category=${category.category}">${category.category}</a>`;
  });
}
