"use strict";

import { loadArtist } from './js/artistCard.js';

//Read json to js
fetch("./data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {

        //Variable
        let artistProfile = data.photographers;
        let imgFilesDirectory = ("./assets/Images/Photographers-ID-Photos/");
        let artist = 0;

        const portrait = document.querySelectorAll(".portrait");
        const art = document.querySelectorAll(".art");
        const fashion = document.querySelectorAll(".fashion");
        const architecture = document.querySelectorAll(".architecture");
        const travel = document.querySelectorAll(".travel");
        const sport = document.querySelectorAll(".sport");
        const animals = document.querySelectorAll(".animals");
        const events = document.querySelectorAll(".events");


        //set loop for show artist
        for (let cur of artistProfile) {
            loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++]);
        };


        //set loop for show artist with the portrait tags
        for (let portraitVar of portrait)
            //show artist card on click
            portraitVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the portrait tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "portrait");
                }
            });



        //set loop for show artist with the art tags
        for (let artVar of art)

            //show artist card on click
            artVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "art");
                }
            });

        //set loop for show artist with the fashion tags
        for (let fashiontVar of fashion)

            //show artist card on click
            fashiontVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the fashion tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "fashion");
                }
            });

        //set loop for show artist with the architecture tags
        for (let architectureVar of architecture)

            //show artist card on click
            architectureVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "architecture");
                }
            });


        //set loop for show artist with the travel tags
        for (let travelVar of travel)

            //show artist card on click
            travelVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "travel");
                }
            });

        //set loop for show artist with the sport tags
        for (let sportVar of sport)

            //show artist card on click
            sportVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "sport");
                }
            });


        //set loop for show artist with the animals tags
        for (let animalsVar of animals)

            //show artist card on click
            animalsVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "animals");
                }
            });


        //set loop for show artist with the events tags
        for (let eventsVar of events)

            //show artist card on click
            eventsVar.addEventListener('click', (showArtist) => {

                //reload innerHTML
                document.querySelector(".photographer_container").innerHTML = ``;

                //set artist to 0
                artist = 0;

                //set loop for show artist with the art tags
                for (let cur of artistProfile) {
                    loadArtist(cur.id, imgFilesDirectory + cur.portrait, cur.name, cur.city + ', ' + cur.country, cur.tagline, cur.price, data.photographers[artist++], "events");
                }
            });
    });