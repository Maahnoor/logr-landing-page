function myFunction(id) {
  let x= document.getElementById(id);
  x.classList.toggle("show");
  if(x==myDropdown){
  let img=document.getElementById("hamburger");
  if (!x.classList.contains("show")){
    img.src="images/icon-hamburger.svg";
  }
  else{
    img.src="images/icon-close.svg";
  
  } 
  }
  
}


function subnavfunction(menu, image){
  let m = document.getElementById(menu);
  let im = document.getElementById(image);
  var nodes =document.querySelectorAll("#myDropdown > li > ul ");
  var imnodes = document.querySelectorAll("#myDropdown > li > div > img ")
  for ( let i= 0;i<nodes.length;i++){

    if(nodes[i].classList.contains("show") && nodes[i]!=m){
      nodes[i].classList.remove("show");
    }
    
  }
  for(let j=0;j<imnodes.length;j++){
    if(imnodes[j].classList.contains("flip") && imnodes[j] != im){
      imnodes[j].classList.remove('flip');
    }
  }
  m.classList.toggle('show');
  im.classList.toggle('flip');
}

