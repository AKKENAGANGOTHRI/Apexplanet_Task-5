const products = [
  { name: "Laptop", price: 899.99,image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { name: "Headphones", price: 199.99,image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
  { name: "Smartphone", price: 699.99,image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: "Keyboard", price: 399.99,image:'https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  {name: 'Action Camera', price: 249.99,image: 'https://images.unsplash.com/photo-1549917917-43458e33ccd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xRLXFKMkZPOE9fOHx8ZW58MHx8fHw%3D&w=1000&q=80'},
  { name: 'Drone', price: 599.99, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'},
  {name: 'Bluetooth Earbuds', price: 79.99,image:'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name: 'Wireless Headphones', price: 59.99, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'},
  { name: 'Smart TV', price: 799.99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'},
  { name: 'Rice Cooker', price: 39.99, image: 'https://images.unsplash.com/photo-1599182345361-9542815e73f6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGNvb2tlcnxlbnwwfHwwfHx8MA%3D%3D'},
  {name: 'Ice Cream Maker', price: 59.99, image: 'https://media.istockphoto.com/id/1491120045/photo/preparation-of-creamy-fruit-ice-cream-from-ice-cream-machine-in-shopping-center.jpg?s=1024x1024&w=is&k=20&c=y76XhcAG6ilwOfOiWAWERH0D97Ej4VX01HCxB41HJmo='},
  { name: 'Printer', price: 99.99, image: 'https://media.istockphoto.com/id/1407268363/photo/office-multifunction-printer-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=s19UQtZh6Hc73L5m2eLF0r74NIdU2ng3K_eb8ssinYY='},
  {name: 'Standing Desk', price: 299.99, image: 'https://images.unsplash.com/photo-1622126755582-16754165dce8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name: 'Juicer', price: 69.99, image: 'https://plus.unsplash.com/premium_photo-1664475773762-991088750077?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  {name: 'Hair Dryer', price: 29.99, image: 'https://media.istockphoto.com/id/1771149456/photo/hair-dryer.jpg?s=612x612&w=is&k=20&c=nVaDywYY56zbLxmvrHMhGozkxvzeVnrDZOB5K4vW6rk='}
];

const list = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");
function displayProducts(filter = "") {
  list.innerHTML = "";
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%;height:auto;border-radius:8px;"/>
      <h2>${product.name}</h2>
      <p>$${product.price.toFixed(2)}</p>
    `;
    list.appendChild(div);
  });
}


searchBox.addEventListener("input", (e) => {
  displayProducts(e.target.value);
});

window.onload = () => displayProducts();
