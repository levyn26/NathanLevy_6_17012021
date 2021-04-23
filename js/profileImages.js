
//Show images of Artist
function loadImage(src, alt, imgTitle, price, likes) {

    //Variable
    const loadImage = document.createElement("article");

    //add class on article el
    loadImage.classList.add("picture");
    loadImage.classList.add('gallery');

    //position loadimage in the parent picture-grid
    document.querySelector(".picture-grid").appendChild(loadImage);

    //add innerHTML to create the image card with method src/imgTitle/alt/price/likes
    loadImage.innerHTML = `<a href=${src} data-lightbox='mygallery' data-title='${imgTitle}'><img class="picture_img" src=${src} alt=${alt}></a>
            <div class="picture_container">
                <h3 class="picture_title">${imgTitle}</h3>
                <div class="picture_container2">
                    <p class="picture_price">${price}€</p>
                    <div class="picture_fav">
                        <p class="picture_fav_text">${likes}</p>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="picture_heart">
                            <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                        </svg>
                    </div>
                </div>
            </div>`;
    
}


//export function
export { loadImage }