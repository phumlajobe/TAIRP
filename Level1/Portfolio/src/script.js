function displayContent(contentId){
    console.log(contentId);
    let display = document.querySelector(contentId);
    let contentElement = document.querySelector("#portfolio-content");
    contentElement.innerHTML = display.innerHTML;
}

let navElement = document.querySelectorAll("#profile-list a");
navElement.forEach(function(link){
    link.addEventListener("click", function(event) {
        event.preventDefault();
    
        // Get the target content ID from the link's href attribute
        const targetContentId = link.getAttribute("href");
        displayContent(targetContentId);
        

    });

});

let allContent = document.querySelector("#content");
allContent.style.display = "none";
displayContent("#about");