function controlHover(contentId){
    // adding the hover to be default
    let activeLink = document.querySelector(`.profile-nav a[href="${contentId}"]`);
    let allLinks = document.querySelectorAll('.profile-nav li');
    activeLink.parentElement.classList.add("hovered");

    // Remove "hovered" class from all list items except the one containing the active link
    allLinks.forEach(link => {
        if (link !== activeLink.parentElement) {
            link.classList.remove("hovered");
        }
    });
}


function displayContent(contentId){
    controlHover(contentId);
    let display = document.querySelector(contentId);
    let contentElement = document.querySelector("#portfolio-content");
    contentElement.innerHTML = display.innerHTML;

}


function findActiveLink(link){
    link.addEventListener("click", function(event) {
        event.preventDefault();
    
        // Get the target content ID from the link's href attribute
        const targetContentId = link.getAttribute("href");
        displayContent(targetContentId);   

    });
}


let navElement = document.querySelectorAll("#profile-list a");
navElement.forEach(findActiveLink);

let allContent = document.querySelector("#content");
allContent.style.display = "none";

displayContent("#about")

function redirectToPortfolio() {
    window.location.href = "#portfolio";
}

let aboutElement = document.querySelector(".nav-links a[href='#about']");
aboutElement.addEventListener("click",function(){
    alert("Please click View Portfolio button ⬇️");
});