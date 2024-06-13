const products = [
    {
        name: "Gyro Sandwich",
        image: "Assest/menuitem/Mask group (1).png",
        price: "$15.00",
        rating: 4.9
    },
    {
        name: "Enchilade",
        image: "Assest/menuitem/Mask group.png",
        price: "$25.50",
        rating: 5.0
    },
    {
        name: "Green Beans",
        image: "Assest/menuitem/Mask group (2).png",
        price: "$12.00",
        rating: 4.9
    },
    {
        name: "Pizza",
        image: "Assest/menuitem/Mask group (3).png",
        price: "$18.50",
        rating: 5.0
    },
    {
        name: "Chicken Pot Pie",
        image: "Assest/menuitem/Mask group (4).png",
        price: "$25.00",
        rating: 4.9
    },
    {
        name: "Green Salad",
        image: "Assest/menuitem/Mask group (5).png",
        price: "$15.00",
        rating: 4.9
    },
    {
        name: "Burger",
        image: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
        price: "$10.00",
        rating: 4.8
    },
    {
        name: "Pasta",
        image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        price: "$12.50",
        rating: 4.7
    },
    {
        name: "Steak",
        image: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
        price: "$30.00",
        rating: 5.0
    },
    {
        name: "Tacos",
        image: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        price: "$8.00",
        rating: 4.6
    },
    {
        name: "Sushi",
        image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
        price: "$8.00",
        rating: 4.6
    },
    {
        name: "Dal fry",
        image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
        price: "$8.00",
        rating: 4.6
    },
];

let productsPerPage = 6;
let currentProductIndex = 0;
function loadProducts() {
    const productsContainer = document.getElementById('products');

    const nextProducts = products.slice(currentProductIndex, currentProductIndex + productsPerPage);

    currentProductIndex += productsPerPage;

    nextProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
       <img src="${product.image}" alt="${product.name}">
       <div class="product-card-content">
       <div>
       <h3>${product.name}</h3>
       <button class="add-to-cart">Add To Cart</button>
       </div>
       <div class="rate">
               <p>⭐ ${product.rating}</p>
               <div class="price">${product.price}</div>
               </div>
               </div>
       `;
        productsContainer.appendChild(productCard);

    });
    const seeMoreButton = document.querySelector('.see-more');
    seeMoreButton.addEventListener('click', () => {
        loadProducts();
    });
    if (currentProductIndex >= products.length) {
        currentProductIndex = 0;
        seeMoreButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);


// email submisson
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = 'Thank you for subscribing!';
        message.style.color = 'lightgreen';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
