window.onload = load;

function load()
{
 console.log("Wykryto zdarzenie load!");
 
 var elmnt = document.querySelector(".container");
 console.log(elmnt);
    elmnt.scrollIntoView();
}