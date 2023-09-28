document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let interest = document.forms['contact-form']['interest'].value;

    if (name == "") {
        document.getElementById("name-error").innerText = "Name Cannot Be Blank";
    } else {
        document.getElementById("name-error").innerText = "";
    } 
    if (email == '') {
        document.getElementById('email-error').innerText = 'Email Cannot Be Blank';
    }else {
        document.getElementById("email-error").innerText = "";
    } 
    if (interest == "") {
        document.getElementById('interest-error').innerHTML = 'Interest Cannot Be Blank';
    }else {
        document.getElementById("interest-error").innerText = "";
    } 

    
});
    console.log("Hello world");
    const carouselSlide = document.querySelectorAll(".image")
    let curentIndex = 0;
    let interval = 2000;

    /*document.getElementById("next-btn").addEventListener("click" , function() {
        nextSlide();   }) */

    function nextSlide() {
        carouselSlide[curentIndex].classList.remove("active");
        curentIndex = (curentIndex + 1) % carouselSlide.length;
        carouselSlide[curentIndex].classList.add("active");
    }

    function startSlide() {
        setInterval(nextSlide, interval);
    }

    (function(){
        startSlide();

    })()