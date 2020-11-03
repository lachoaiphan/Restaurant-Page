import { appendChildren } from "./helper.js";

export function renderHomeContent() {
    const homeHeaderContent = "Surprising your taste buds with every bite.";
    const homeSubHeadContent = "Come to our restaurant as we provide a lovely \
                                atmosphere along with fantastic cuisine.";
    let homeContent = document.createElement("div");
    let homeHeader = document.createElement("h1");
    let homeSubHead = document.createElement("h3");

    homeContent.setAttribute("id", "home-content");
    homeContent.classList.add("fade-in");
    homeHeader.classList.add("home-head");
    homeSubHead.classList.add("home-subhead");

    homeHeader.textContent = homeHeaderContent;
    homeSubHead.textContent = homeSubHeadContent;

    appendChildren(homeContent, [homeHeader, homeSubHead]);
    document.getElementById("tab-content").appendChild(homeContent);
}