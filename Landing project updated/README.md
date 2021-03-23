# Project Name
> Landing page

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This project aims to create dynamic landig webpage that interact with user on scrolling and clicking on the webpage content.

## Screenshots
![Example screenshot](./assets/img/website_screenshot.png)

## Technologies
* HTML   - version 5.0
* CSS    - version 3.0
* JavaScript

## Setup
To Run the project just double click on the HTML file.html

## Code Examples
`const divs = document.querySelectorAll(".section");
            const list_items = document.querySelectorAll(".menu_item_link");               
            divs.forEach( (div, list)=> {
            div.addEventListener( 'mouseover', ()=> {
            if (list_items[list]) {
            list_items[list].style.background = "#bdb76b";
            } 
            });
            div.addEventListener( 'mouseout', ()=> {
            if (list_items[list]) {
            list_items[list].style.background = "#f3f3f3";
            } 
            });
            });`

## Features
* Dynamic navigation menu.
* Active section in the entire window.
* Dynamic scroll to top button.


## Status
Project is: finished.

## Inspiration
The project is inspired by Udacity front-end web development course.

##Contact
Created by [@dev20loop21] (https://github.com/dev20loop21)