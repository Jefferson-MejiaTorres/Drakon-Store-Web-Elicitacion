const products = [
    { id: 1, name: "Basic Shirt Fit T-Shirt", price: 199, image: "images/gorra1.png", category: "Cotton T" },
    { id: 2, name: "Modelo De La Gorra", price: 199, image: "images/gorra2.png", category: "NOMBRE DE LA GORRA" },
    { id: 3, name: "Full Sleeve Zipper", price: 199, image: "images/gorra3.png", category: "Cotton T Shirt" },
    { id: 4, name: "Full Sleeve Zipper", price: 199, image: "images/gorra5.png", category: "Cotton T Shirt" },
    { id: 5, name: "Full Sleeve Zipper", price: 199, image: "images/gorra2.png", category: "Cotton T Shirt" },
    { id: 6, name: "Full Sleeve Zipper", price: 199, image: "images/gorra3.png", category: "Cotton T Shirt" }
];

const main = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
const favoritesCount = document.getElementById("favorites-count");
let cart = 0;
let favorites = [];

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product", "col-md-4", "mb-4");
    productDiv.innerHTML = `
        <button class="favorite-btn" data-id="${product.id}">
            <i class="bi bi-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" class="img-fluid mb-3" />
        <p class="category-text mb-1">${product.category}</p>
        <h3 class="h5 fw-normal mb-1">${product.name}</h3>
        <p class="price-text">$ ${product.price}</p>
        <button class="add-to-cart mt-2 btn btn-dark text-white px-4 py-2 rounded-pill w-100">
            Añadir al carrito
        </button>
    `;
    main.appendChild(productDiv);
});

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;
        
        // Animación
        cartCount.classList.remove("bump");
        void cartCount.offsetWidth; // Reinicia la animación
        cartCount.classList.add("bump");
    });
});

document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const favBtn = e.target.closest(".favorite-btn");
        const heartIcon = favBtn.querySelector("i");
        const id = favBtn.dataset.id;
        if (!favorites.includes(id)) {
            favorites.push(id);
            favBtn.classList.add("active");
            heartIcon.classList.replace("bi-heart", "bi-heart-fill");
        } else {
            favorites = favorites.filter(fav => fav !== id);
            favBtn.classList.remove("active");
            heartIcon.classList.replace("bi-heart-fill", "bi-heart");
        }
        favoritesCount.textContent = favorites.length;
    });
});

document.getElementById("favorites-btn").addEventListener("click", () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    window.location.href = "favorites.html";
});

// Control del header sticky con sombra al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});