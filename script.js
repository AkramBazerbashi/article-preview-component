const share = document.getElementById('share');
const shareDiv = document.getElementById('shareDiv');
const social = document.getElementById('social');
let active = false;


share.onclick = function(){
    if (!active){
        share.style.cssText= " background-color: hsl(212, 23%, 69%);";
        shareDiv.style.cssText= " background-color: hsl(212, 23%, 69%);";
        social.style.cssText = "visibility: visible;"
        console.log(social);
        active = true;
    }
    else{
        social.style.cssText = "visibility: hidden;"
        share.style.cssText= " background-color: hsl(210, 46%, 95%);";
        shareDiv.style.cssText= " background-color: hsl(210, 46%, 95%);";
        active= false;
    }
}
