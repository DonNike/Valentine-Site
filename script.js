document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    let noButton = document.getElementById("no-btn");
    let yesButton = document.getElementById("yes-btn");
    let responseText = document.getElementById("response-text");
    let image = document.getElementById("changeable-img");
    let questionText = document.getElementById("valentine-text");
    let newMessage = document.getElementById("new-message");
    let toogleLangBtn = document.getElementById("language-btn");

    // Variables for state management
    let isIgbo = false;
    let clickCount = 0;
    let fontSize = 16;
    let imageToggled = false;

    // No Button Click Event
    noButton.addEventListener("click", function () {
        clickCount++;

        // Update response text based on click count
        if (clickCount === 1) {
            responseText.innerText = isIgbo ? "M ga-eme gi mma" : "I will treat you well" ; 
        } else if (clickCount === 2) {
            responseText.innerText = isIgbo ? "Nu aririo m" : "Please accept";
        } else{
            responseText.innerText = isIgbo ? "Eme na m ihe a" : "Don't do this  to me"; 
        }

        responseText.style.display = "block";
        // Increase font size of yesButton
        fontSize += 5;
        yesButton.style.fontSize = fontSize + "px";

        // Add shake animation to yesButton
        yesButton.classList.add("shake");

        // Remove shake animation after 300ms
        setTimeout(() => {
            yesButton.classList.remove("shake");
        }, 300);
    });

    function updateresponseText (){
        if (clickCount === 1){
            responseText.innerText = isIgbo ? "M ga-eme gi mma" : "I will treat you well" ; 
        }else if(clickCount === 2){
            responseText.innerText = isIgbo ? "Nu aririo m" : "Please accept";
        }else{
            responseText.innerText = isIgbo ? "Eme na m ihe a" : "Don't do this  to me"; 
        }
    }

   

    // Yes Button Click Event
    yesButton.addEventListener("click", function () {
        console.log("Yes button clicked. Current toggled state:", imageToggled); // Debugging

        // Toggle the image source
        if (imageToggled) {
            image.src = "https://media1.tenor.com/m/K_E6ORTmXMoAAAAd/milk-and-mocha-love.gif";
        } else {
            image.src = "https://media.tenor.com/Ddw70xVXPPcAAAAj/milk-and-mocha.gif";
        }

        questionText.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
        responseText.style.display = "none";

        newMessage.style.display = "block";

        sendWhatsappMessage();

        // Toggle the state
        imageToggled = !imageToggled;
        console.log("New toggled state:", imageToggled); // Debugging

        function sendWhatsappMessage(){
            let phoneNumber = "2349037242644";
            let message = encodeURIComponent("She accepted 💖🥳")
            let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    
            // window.open(whatsappURL, "_blank")
        }
    });

    // Language Button Click Event
    toogleLangBtn.addEventListener("click", function () {
        isIgbo = !isIgbo;
        toogleLangBtn.innerText = isIgbo ? "English" : "Igbo";

        questionText.innerText = isIgbo ? questionText.dataset.igbo : questionText.dataset.english;
        yesButton.innerText = isIgbo ? yesButton.dataset.igbo : yesButton.dataset.english;
        noButton.innerText = isIgbo ? noButton.dataset.igbo : noButton.dataset.english;
        newMessage.innerText = isIgbo ? newMessage.dataset.igbo : newMessage.dataset.english;

        updateresponseText();


        // let btn = this;
        // let text = document.getElementById("valentine-text");

        // // Toggle between Pidgin and English
        // if (btn.innerText === "Igbo") {
        //     btn.innerText = "English";
        //     text.innerText = "I ga-abu Val m?";
        // } else {
        //     btn.innerText = "Igbo";
        //     text.innerText = "Will You Be My Val";
        // }
    });
});