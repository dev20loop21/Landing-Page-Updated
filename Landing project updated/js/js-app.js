//create functionality for scroll to top button
            const scrolll = document.getElementById("section1");
            function toscroll() {
            scrolll.scrollIntoView({behavior:"smooth"});
            }


// Identify container, sections and empty unorder list.
           const menu = document.getElementById("menu");
           const sections = [...document.querySelectorAll(".section")]
           
// create navigation menu lists
          const nav_menu_items = () => {
      
      //this variable act as container for list items
               let nav_menu_container = '';
      
      // this function will get data attribute from each div element and set it in its corresponding list item         
            sections.forEach(section => {

                  const sectionID = section.id;
                  const sectionAtrribute = section.dataset.nav;
                 
                  nav_menu_container += `<li class="list"> <a class="menu_item_link" href="#${sectionID}" >${sectionAtrribute}</a></li>`   
                })             
            menu.innerHTML=nav_menu_container;
            }
            nav_menu_items();
           
            
//Highlight navigation menu item while hover on its corresponding div element
            const divs = document.querySelectorAll(".section");
            const list_items = document.querySelectorAll(".menu_item_link");
            
    //use mouseover event to show the active div element                    
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
            });     