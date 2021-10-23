/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(event){

    let form = document.querySelector("form");
    let button = document.querySelector("form button");

    
    button.addEventListener("click", e =>{
        let email = document.getElementById("email").value;
        // console.log( document.getElementsByClassName("message"));

        let notification = document.getElementsByClassName("message")[0];
        if (email === "") {
            
            notification.innerText = "Please enter your email address";     
        }
        else{
            notification.innerText = `Thank you! Your email address ${email}`;     

        }
    });




});