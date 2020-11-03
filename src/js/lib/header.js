import { appendChildren } from "./helper.js";
import { renderMenuContent } from "./menu.js";
import { renderHomeContent } from "./home.js";
import { renderContactContent } from "./contact.js";
import { clearContent } from "../index.js";

export function renderHeader() {
    const logoTitle = "Wow! Restaurant";
    let header = document.createElement('header');
    let titleHeader = document.createElement('h1');
    let title = document.createElement('div');
    let navBar = addNavbar();

    header.classList.add('fl-c');
    header.setAttribute("id", "header");

    titleHeader.setAttribute("id", "logo-title");

    titleHeader.textContent = logoTitle;
    title.appendChild(titleHeader);

    appendChildren(header, [navBar, title]);

    document.getElementById("root").appendChild(header);
}


function addNavbar() {
    let navBar = document.createElement('nav');
    let navList = addNavList();

    navBar.setAttribute("id", "navbar");

    navBar.appendChild(navList);
    return navBar;
}

function addNavList() {
    const navItems = [
        {text: "MENU", func: renderMenuContent},
        {text: "HOME", func: renderHomeContent},
        {text: "CONTACT", func: renderContactContent}
    ]
    let navList = document.createElement('ul');
    navList.classList.add('nav-list', 'fl-r');
    for (let i = 0; i < navItems.length; i++) {
        let navSection = document.createElement('li');
        let navItem = document.createElement('button');

        navSection.classList.add("nav-section");
        navItem.classList.add("nav-item");

        navItem.textContent = navItems[i].text;
        navItem.addEventListener('click', (e) => {
            if (e.target) {
                clearContent();
                navItems[i].func();
            }
        })

        navSection.appendChild(navItem);
        navList.appendChild(navSection);
    }
    return navList;
}

function templateFunction() {
    console.log("In progress...")
    return;
}