import { categories, menuItems } from "./menu-data.js";

function renderMenuItems(category = "all") {
    const filteredMenuItems = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
    
    return `
            ${filteredMenuItems.map((item) => `
                <div class="menu-item" data-category="${item.category}">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>₦${item.price.toLocaleString()}</p>
                    </div>
                `).join("")}    
            `;
}

export function createMenuPage(category = "all") {
    
    return `
        <div class="menu-page">
            <h1>Menu</h1>
            <div class="menu-list">
                <ul>
                    <li><button data-category="all">All </button></li>
                    ${categories.map((itemCategory) => `<li><button data-category="${itemCategory.id}">${itemCategory.name}</button></li>`).join("")}    
                </ul>

            </div>
            <div class="menu-items">
                ${renderMenuItems(category)}
            </div>
        </div>
    `;  
}

export function setupMenuInteraction() {
    const menuList = document.querySelector(".menu-list ul");
    const menuItemsContainer = document.querySelector(".menu-items");

    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const category = e.target.getAttribute("data-category");
            menuItemsContainer.innerHTML = renderMenuItems(category);

        }
    });
}
