import { renderHeader } from "./lib/header.js";
import { renderHomeContent } from "./lib/home.js";

(function(){
    renderHeader();
    renderContent();
    renderHomeContent();
}());

function renderContent() {
    let tabContent = document.createElement("section");

    tabContent.setAttribute("id", "tab-content")
    tabContent.classList.add("center");

    document.getElementById("root").appendChild(tabContent);
}

/* To re-render/reset content in tab-content for other buttons */
export function clearContent() {
    if (!document.getElementById("tab-content"))
        return;
    let tabContent = document.getElementById("tab-content");
    while (tabContent.firstChild)
        tabContent.removeChild(tabContent.lastChild);
}