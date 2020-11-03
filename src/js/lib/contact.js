import { appendChildren } from "./helper.js";

export function renderContactContent() {
    const contactHeaders = [
        {header: "Phone Number:", info: "012-345-6789"},
        {header: "Email Address:", info: "templatemail@email.com"},
        {header: "Address:", info: "Wow! Land"}
    ]
    let contactContent = document.createElement("div");

    contactContent.setAttribute("id", "contact-content");
    contactContent.classList.add("fl-c", "fade-in");

    for (let i = 0; i < contactHeaders.length; i++) {
        let contactContainer = document.createElement("div");
        let contactHeader = document.createElement("h1");
        let contactInfo = document.createElement("h4");

        contactHeader.textContent = contactHeaders[i].header;
        contactInfo.textContent = contactHeaders[i].info;

        appendChildren(contactContainer, [contactHeader, contactInfo]);
        contactContent.appendChild(contactContainer)
    }
    document.getElementById("tab-content").appendChild(contactContent);
}