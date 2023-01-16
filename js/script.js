//This is an introduction to Javascript 
//Tips : Tota11y : javascript pluggin  to check for accessibilty issues on HTML pages
//https://khan.github.io/tota11y/  
//https://github.com/Khan/tota11y/releases/tag/0.1.6  Source code ZipFolder

alert("Hello World!");

//You'll learn how to select Html elements 
//Collect enetered values / Data by users
let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");

//attaching event listener
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click",function(e) {
    e.preventDefault(); //this prevent the form from submitting inputs 

        let emailValue = emailElement.value;
        let messageValue = messageElement.value;

//Javascript Validations ex @ validates an email 
    if  (emailValue.includes("@")) {     // all good
            alert("thank your for your message !");
             } else {
            alert (" This is not a avalide email adress. Please try again!");
}
})
    //console.log("clicked button");
    //console.log(emailValue);
    //console.log(messageValue);})

    



