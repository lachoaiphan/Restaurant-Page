import { appendChildren } from "./helper.js";

export function renderMenuContent() {
    const foodItems = [
        {foodName: "Wow! Fries", price: 5, type: "appetizer"},
        {foodName: "Wow! Hash Browns", price: 6, type: "appetizer"},
        {foodName: "Wow! Hash Fries", price: 8, type: "appetizer"},
        {foodName: "Wow! Burger", price: 10, type: "main"},
        {foodName: "Double Wow! Burger", price: 12, type: "main"},
        {foodName: "Wow! Pizza", price: 14, type: "main"},
        {foodName: "Wow! Omelette du Fromage", price: 16, type: "main"},
        {foodName: "Yum! Cheesecake", price: 14, type: "dessert"},
        {foodName: "Popping Wow! Boba", price: 8, type: "dessert"},
        {foodName: "Wow! Jawbreaker Special", price: 25, type: "dessert"}
    ]
    const foodTypes = [
        {header: "Appetizers", type: "appetizer"},
        {header: "Main Courses", type: "main"},
        {header: "Desserts", type: "dessert"}
    ]
    let menuContent = document.createElement("div");

    menuContent.setAttribute("id", "menu-content");
    menuContent.classList.add("grid-container", "fade-in");

    for (let i = 0; i < foodTypes.length; i++) {
        let menuSection = document.createElement("div");
        let menuHeader = document.createElement("h1");
        let menuList = addMenuList(foodItems.filter(food => food.type ===
                                                        foodTypes[i].type));
        menuSection.classList.add("menu-section");
        menuHeader.classList.add("menu-header");

        menuHeader.textContent = foodTypes[i].header;
        appendChildren(menuSection, [menuHeader, menuList]);
        menuContent.appendChild(menuSection);
    }
    document.getElementById("tab-content").appendChild(menuContent);

}

function addMenuList(foodList) {
    let menuList = document.createElement("ul");
    for (let i = 0; i < foodList.length; i++) {
        let foodItem = document.createElement("li");
        let foodName = document.createElement("div");
        let foodPrice = document.createElement("div");

        foodItem.classList.add("fl-r", "menu-item");
        foodName.textContent = foodList[i].foodName;
        foodPrice.textContent = "$" + foodList[i].price;

        appendChildren(foodItem, [foodName, foodPrice]);
        menuList.appendChild(foodItem);
    }
    return menuList;
}
