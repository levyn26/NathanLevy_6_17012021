//Variable

const sortbutton = document.querySelector(".sort_by_button");
const chevron = document.querySelector(".chevron-up");

const sortopener = document.querySelector(".sort_by_opener");
const sortbydate = document.getElementById('opener_date');
const sortbytitle = document.getElementById('opener_title');
const imageArtist = document.querySelector(".picture-grid");
const sortbypopularity = document.querySelector('.sort_by_button_text');

const openmodal = document.querySelector(".photographer_btn_contact");
const modal = document.querySelector(".modal");
const crossmodal = document.querySelector(".closemodal_icon");
const mobilecontact = document.querySelector(".btn_mobile_contact");
const openmodal2 = document.getElementById("photographer_contact");


//Action on click for display sort menu
sortbutton.addEventListener('click', displaySort => {
    sortopener.classList.toggle("show");
    chevron.classList.toggle("rotate");
})


//Action on click for hide contact modal with close button
crossmodal.addEventListener('click', closeModal => {
    modal.style.display = "none";
})

//Action on click for display block contact modal on mobile
mobilecontact.addEventListener('click', openContact => {
    modal.style.display = "block";
})
