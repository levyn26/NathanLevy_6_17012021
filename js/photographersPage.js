"use strict";

//import function
import { loadProfileInfo, loadContactBtn, loadImageProfile } from './profileInfo.js';
import { loadImage } from './profileImages.js';


//Read json to js
fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {

        //Variable

        let idPhotographers = localStorage.getItem("idPhotographers")
        let imgPictureProfileFilesDirectory = ("./assets/Images/Photographers-ID-Photos/");
        let imgFilesDirectoryFolio = ("./assets/Images/");

        //set loop for read all data

        for (let searchArtist of data.photographers) {

            //set condition for show artist according to his id
            if (searchArtist.id == idPhotographers) {

                //Get profile info
                loadProfileInfo(searchArtist.name, searchArtist.city + ', ' + searchArtist.country, searchArtist.tagline, searchArtist.tags);

                //Get Contact Btn
                loadContactBtn("Contactez-moi");

                //Get Img profile
                loadImageProfile(imgPictureProfileFilesDirectory + searchArtist.portrait, searchArtist.name);

                //Variable

                let totalLikes = 0;
                let artistPrice = 0;
                let arraySortPopularity = [];
                let arraySortDate = [];
                let arraySortTitle = [];

                const sortopener = document.querySelector(".sort_by_opener");
                const sortbydate = document.getElementById('opener_date');
                const sortbytitle = document.getElementById('opener_title');
                const imageArtist = document.querySelector(".picture-grid");
                const sortbypopularity = document.querySelector('.sort_by_button_text');
                const sortPopularity = document.getElementById('opener_popularity')

                const likes = document.querySelectorAll('.picture_heart');
                const likesCount = document.querySelectorAll('.picture_fav_text');



                //set loop for show all images of the Artist

                for (let imgArtist of data.media) {

                    if (imgArtist.photographerId == idPhotographers) {

                        arraySortPopularity.push(imgArtist);
                        arraySortDate.push(imgArtist);
                        arraySortTitle.push(imgArtist);
                    }

                }

                //Function for sort by popularity

                const byPopularity = () => {
                    arraySortPopularity.sort((a, b) => {
                        return (b.likes) - (a.likes);

                    });
                }
                byPopularity();
                console.log(arraySortPopularity);


                //Function for sort by date

                const byDate = () => {
                    arraySortDate.sort((a, b) => {
                        return new Date(b.date) - new Date(a.date);
                    });
                }
                byDate();
                console.log(arraySortDate);



                //Function for sort by title

                const byTitle = () => {
                    arraySortTitle.sort((a, b) => {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;

                    });
                }
                byTitle();
                console.log(arraySortTitle);


                for (let imgArtist of arraySortPopularity) {

                    if (imgArtist.photographerId == idPhotographers) {


                        // Get all pictures and images
                        loadImage(imgFilesDirectoryFolio + searchArtist.filedirectory + "/" + imgArtist.image, imgArtist.name, imgArtist.name, imgArtist.price, imgArtist.likes);

                        // Get the addition of all likes
                        totalLikes += imgArtist.likes;
                        document.querySelector(".menu_fixed_likes_text").textContent = totalLikes;

                        artistPrice += imgArtist.price;
                        document.querySelector(".menu_fixed_price").textContent = artistPrice + "€ / jour";

                        document.querySelector(".nameArtist").textContent = searchArtist.name;

                    }
                }

                //Action on click for display sort by popularity & reload images
                sortPopularity.addEventListener('click', byPopularity => {
                    sortbypopularity.innerHTML = `Popularité`;
                    sortPopularity.style.color = '#DB8876';
                    sortbydate.style.color = '#ffffff';
                    sortbytitle.style.color = '#ffffff';

                    imageArtist.innerHTML = ``;
                    sortopener.classList.toggle("show");

                    for (let imgArtist of arraySortPopularity) {

                        if (imgArtist.photographerId == idPhotographers) {

                            // Get all pictures and images
                            loadImage(imgFilesDirectoryFolio + searchArtist.filedirectory + "/" + imgArtist.image, imgArtist.name, imgArtist.name, imgArtist.price, imgArtist.likes);

                        }
                    }
                })

                //Action on click for display sort by date & reload images
                sortbydate.addEventListener('click', byDate => {
                    sortbypopularity.innerHTML = `Date`;
                    sortPopularity.style.color = '#ffffff';
                    sortbytitle.style.color = '#ffffff';
                    sortbydate.style.color = '#DB8876';
                    imageArtist.innerHTML = ``;
                    sortopener.classList.toggle("show");

                    for (let imgArtist of arraySortDate) {

                        if (imgArtist.photographerId == idPhotographers) {

                            // Get all pictures and images
                            loadImage(imgFilesDirectoryFolio + searchArtist.filedirectory + "/" + imgArtist.image, imgArtist.name, imgArtist.name, imgArtist.price, imgArtist.likes);

                        }
                    }
                })


                //Action on click for display sort by title & reload images
                sortbytitle.addEventListener('click', byTitle => {
                    sortbypopularity.innerHTML = `Titre`;
                    sortPopularity.style.color = '#ffffff';
                    sortbydate.style.color = '#ffffff';
                    sortbytitle.style.color = '#DB8876';
                    imageArtist.innerHTML = ``;
                    sortopener.classList.toggle("show");

                    for (let imgArtist of arraySortTitle) {

                        if (imgArtist.photographerId == idPhotographers) {


                            // Get all pictures and images
                            loadImage(imgFilesDirectoryFolio + searchArtist.filedirectory + "/" + imgArtist.image, imgArtist.name, imgArtist.name, imgArtist.price, imgArtist.likes);


                        }
                    }

                })


            }
        }
    })