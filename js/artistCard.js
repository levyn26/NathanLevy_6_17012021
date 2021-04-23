function artistContent(id, src, name, city, desc, price, tags) {
        //Create div
        const loadArtistInformation = document.createElement("div");

        //On click set item of local storage for get the id of Photographers
        loadArtistInformation.addEventListener('click', (getIdPhotographers) => {
                localStorage.setItem("idPhotographers", `${id}`);
        })

        //Select the location on the div
        document.querySelector(".photographer_container").appendChild(loadArtistInformation);

        //Add css class to the div
        loadArtistInformation.classList.add("photographer_profil");

        //Add innerHTML to create artistCard with method src/name/city/desc/price
        loadArtistInformation.innerHTML = `
            <a href="photographer-pages.html"
            <div class="photographer_profil_image">
                    <img src=${src} class="photographer_profil_image_img" id=${name} alt=${name}>
            </div>
            <div class="photographer_profil_name">
                    <h2>${name}</h2>
            </div>
            <div class="photographer_profil_city">
                    <p>${city}</p>
            </div>
            <div class="photographer_profil_desc">
                    <p>${desc}</p>
            </div>
            <div class="photographer_profil_price">
                    <p>${price}€/jour</p>
            </div>
            </a>`


        // Set Tags with loop
        const tag = document.createElement("ul");

        //add class to tag ul
        tag.className = "photographer_profil_filter_container";

        //set loop for read all tags data
        for (let i = 0; i < tags.tags.length; i++) {
                const elp = document.createElement("li");
                const els = document.createElement("span");
                elp.className = "filter_item";
                els.className = "filter_item_item";
                els.textContent = "#" + tags.tags[i];
                tag.appendChild(elp);
                elp.appendChild(els);
        }

        //set position of tag into the parent loadArtistInformation
        loadArtistInformation.appendChild(tag);

}


//loadArtist with all the method
function loadArtist(id, src, name, city, desc, price, tags, search = "") {

        //set condition to search method
        if (search.length < 1) {
                artistContent(id, src, name, city, desc, price, tags)
        }

        //set condition to search method
        if (tags.tags.includes(search)) {
                artistContent(id, src, name, city, desc, price, tags)
        }


}

//export function
export { loadArtist };
