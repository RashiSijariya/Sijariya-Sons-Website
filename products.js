async function loadProducts() {

    const response = await fetch(
        "http://localhost:8081/api/products"
    );

    const products = await response.json();

    const container =
        document.getElementById("product-container");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="product-card">
                <img src="${product.imageUrl}" width="200">

                <h2>${product.name}</h2>

                <p>${product.description}</p>

                <h3>₹${product.price}</h3>

                <button onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            </div>
        `;
    });
}

loadProducts();
document
.getElementById("product-form")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const product = {

        name: document.getElementById("name").value,

        description:
            document.getElementById("description").value,

        price:
            document.getElementById("price").value,

        imageUrl:
            document.getElementById("imageUrl").value,

        category:
            document.getElementById("category").value
    };

    await fetch(
        "http://localhost:8080/api/products",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)
        }
    );

    loadProducts();
});
async function deleteProduct(id) {

    await fetch(
        `http://localhost:8080/api/products/${id}`,
        {
            method: "DELETE"
        }
    );

    loadProducts();
}