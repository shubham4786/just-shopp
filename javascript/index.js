function loadMore(){
    let cardss= document.getElementById('outer');
    cardss.style.display="flex";
    let btn = document.getElementById('load');
    btn.style.display="none";
}

function sellitem(){
    let sellbut= document.querySelector(".outerform");
    let bodydata= document.getElementById("container");
    let navbar= document.getElementById("nav");
    sellbut.style.display="flex";
    navbar.style.display="none";
    sellbut.style.zIndex="40";
    bodydata.style.opacity="0.2";
    
}
  function closing(){
    let sellbut= document.querySelector(".outerform");
    sellbut.style.display="none";
    let navbar= document.getElementById("nav");
    navbar.style.display="block";
    let bodydata= document.getElementById("container");
    bodydata.style.opacity="1";
}