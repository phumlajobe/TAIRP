function homeSetup(){
    let setupElement = document.querySelector(".content-setup");
    let homeElement = document.querySelector(".home-container")
    homeElement.innerHTML = setupElement.innerHTML;
}

function displayContent(contentId){
    console.log(contentId);
    let content = document.querySelector(contentId);
    if (contentId != "#recipe"){
        homeSetup();
        let contentElement = document.querySelector(".home-content");
        contentElement.innerHTML = content.innerHTML;
    }else{
        let contentElement = document.querySelector(".home-container");
        contentElement.innerHTML = content.innerHTML;
    }
}

function findActiveLink(link){
    link.addEventListener("click", function(event) {
        event.preventDefault();
    
        // Get the target content ID from the link's href attribute
        const targetContentId = link.getAttribute("href");
        displayContent(targetContentId);   

    });
}

let pageContent = document.querySelector(".content");
pageContent.style.display = "none";

let navElement = document.querySelectorAll(".list-nav a");
navElement.forEach(findActiveLink);
displayContent("#home");