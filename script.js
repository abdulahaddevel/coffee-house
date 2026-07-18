function showAbout() {
    alert("Welcome! Our Coffee House has been serving fresh coffee since 2026.");
    console.log("User clicked the Learn More button");

}
function orderCoffee(coffeeName){
    let order = confirm("Do you want to order " + coffeeName + "?");
    if (order) {
        alert("Your  " + coffeeName + " order has been confirmed!");
        console.log(coffeeName + " Ordered");
    } 
    else {
        alert("Maybe next time!");
        console.log("Order cancelled.");
    }

}
function bookTable () {
    let userName = prompt ("Please enter your name:");
    if (userName) {
        alert("Welcome " + userName + "! Your table request has been received.");
        console.log(userName + " requested a table.");

    }
    else {
        alert("You didn't enter your name.");
        console.log("No name entered.");
    }
}
function showImage(coffeeName) {
    alert("You selected:" +coffeeName);
    console.log("Selected Coffee: " + coffeeName);
}
function showReviews( ){
    let reviews = [
        "⭐⭐⭐⭐⭐ Ali: Amazing Coffee!",
        "⭐⭐⭐⭐⭐ Fatima: Great Service!",
        "⭐⭐⭐⭐⭐ Ahmad: Best Capuccino!",
    ];
    alert(reviews.join("\n\n"));
    console.log(reviews);
}
function changeMessage(){
    document.getElementById("team-message").textContent =
      "Welcome! Our experienced team is always ready to make your favorite coffee.";

}
function validateForm(){
    let name = document.getElementById(" name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(name === "" || email === "" || message === "" ){
        alert("Please fill in all fields.")
        return false;
    }
      alert("Message sent successfully!");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    return true;

}
 document.getElementById("Year").textContent =
 new Date ().getFullYear();

 function toggleMenu(){
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
 }
 function toggleTheme(){

    document.body.classList.toggle("dark-mode");

}
let topbtn = document.getElementById("topbtn");
window.onscroll = function () {
    if (document.getElementById.scrollTop > 300) {
        topbtn.style.display = "block";

    } else {
        topbtn.style.display = "none";

    }

};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })
}
window.onload = function () {
    document.getElementById("loader").style.display = "none";
}
    




