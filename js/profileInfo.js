
// Show profile infos

function loadProfileInfo(name, city, desc, tags) {

    //Create div
    const loadProfileInformation = document.createElement("div");

    //Add class to the div
    loadProfileInformation.classList.add("info_photographer_container");

    //position loadProfileInformation in the parent info_photographer
    document.querySelector(".info_photographer").appendChild(loadProfileInformation);

    //add innerHTML to create html el with method name/city/desc
    loadProfileInformation.innerHTML = `<h1 class="info_photographer_title">${name}</h1>
            <p class="info_photographerh1_city">${city}</p>
            <p class="info_photographer_desc">${desc}</p>`;

    //Create ul
    const tag = document.createElement("ul");

    //add class to the ul
    tag.className = "photographer_profil_tags_container";


    //set loop for read all of tags data in JSON files
    for (let i = 0; i < tags.length; i++) {

        //Create li & span
        const elp = document.createElement("li");
        const els = document.createElement("span");

        //Add class to li
        elp.className = "filter_item";

        //Add class to span
        els.className = "filter_item_item";

        //Add text content to span
        els.textContent = "#" + tags[i];

        //set the position of elp & els
        tag.appendChild(elp);
        elp.appendChild(els);
    }

    //set position of tag
    loadProfileInformation.appendChild(tag);

    //set position of loadProfileInformation
    document.querySelector("div").appendChild(loadProfileInformation);

    // Variable
    const tags2 = document.querySelectorAll(".filter_item");


}


// Show contact btn
function loadContactBtn(text) {

    //create div
    const loadContactBtn = document.createElement("div");

    //add class & id to the div
    loadContactBtn.className = "photographer_btn_contact";
    loadContactBtn.id = "photographer_contact";

    //action on click to display contact modal
    loadContactBtn.addEventListener('click', (displayModal) => {

        //show the modal 
        modal.style.display = "block";

        //variable
        const firstname = document.getElementById('firstname');
        const lastname = document.getElementById('lastname');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        //action on click for log value & hide modal if click on submit btn
        document.querySelector('.input_modal').addEventListener('submit', function (e) {

            //prevent the normal submission of the form
            e.preventDefault();

            //log the value
            console.log('Prenom : ' + firstname.value);
            console.log('Nom : ' + lastname.value);
            console.log('Email : ' + email.value);
            console.log('Message : ' + message.value);

            //hide modal
            modal.style.display = "none";
        });
    });

    //set the position of loadContactBtn into the parent info_photographer
    document.querySelector(".info_photographer").appendChild(loadContactBtn);

    //add innerHTML to create html el with method text
    loadContactBtn.innerHTML = `<a href="#"><div class="btn_contact"><p class="btn_contact_text">${text}</p></div></a>`;

    //set the position of loadContactBtn into the parent div
    document.querySelector("div").appendChild(loadContactBtn);
}

// Show profile image

function loadImageProfile(src, alt) {

    //create div
    const loadImageProfile = document.createElement("div");

    //add class to the div
    loadImageProfile.classList.add("info_photographer_profile");

    //set the position of loadImageProfile into the parent info_photographer
    document.querySelector(".info_photographer").appendChild(loadImageProfile);

    //add innerHTML to create html el with method src/alt
    loadImageProfile.innerHTML = `<img class="info_photographer_profile_img" src=${src} alt=${alt}>`;

    //set the position of loadImageProfile into the parent div
    document.querySelector("div").appendChild(loadImageProfile);
}

//export function
export { loadProfileInfo, loadContactBtn, loadImageProfile };