const products = [
  {
    name: "Shoes",
    price: 2000,
    images: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200/ff0000",
      "https://via.placeholder.com/200/0000ff"
    ],
    description: "Comfortable shoes"
  },
  {
    name: "Watch",
    price: 3500,
    images: [
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/200/00ff00"
    ],
    description: "Stylish watch"
  }
];

const container = document.getElementById("products");

products.forEach((p, index) => {
  container.innerHTML += `
    <div class="product" onclick="openProduct(${index})">
      <img src="${p.images[0]}">
      <h3>${p.name}</h3>
      <p>Rs ${p.price}</p>
    </div>
  `;
});

function openProduct(i) {
  const p = products[i];

  let newWindow = window.open("");

  newWindow.document.write(`
    <h1>${p.name}</h1>
    <p>Rs ${p.price}</p>
    <p>${p.description}</p>
    ${p.images.map(img => `<img src="${img}" width="200">`).join("")}
  `);
}