window.onload = () => {}
const navURLs = [
{name: "Home", url: index.html},
{name: "National Parks", url: "indes.html"},
{name: "Mountains", url: "index.html"},
];

function navLink (item){
    document.createElement("a");
    a.href = item.url;
    a.innerHTML = item.name;
    return a;


}

document.addEventListener("DOMContentLoaded", () => {
const nav= document.getElementById("nav");
navURLs.forEach(item => nav.appendChild(navLink(item)) += `<a href="${item.url}">${item.name}</a>`)
});