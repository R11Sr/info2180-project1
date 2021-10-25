/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(event){

    let button = document.querySelector("form button");

    
    
    button.addEventListener("click", e =>{
        e.preventDefault();
        let email = document.getElementById("email").value;
        let notification = document.getElementsByClassName("message")[0];
        if (email === "") {
            
            notification.innerText = "Please enter your email address";     
        }
        else{
            notification.innerText = `Thank you! Your email address ${email}  has been added to our mailing list!`;     

        }

    });




});