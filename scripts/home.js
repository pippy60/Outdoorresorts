window.onload = () => {
    const nav= document.getElementById("nav");
    navURLs.forEach(item => 
        nav.appendChild(navLink(item)));


}
const navURLs = [
{name: "Home", url: "home.html"},
{name: "National Parks", url: "parks.html"},
{name: "Mountains", url: "mountain.html"},
];

function navLink (item){
    let a = document.createElement("a");
    a.href = item.url;
    a.innerHTML = item.name;
    return a;


}

