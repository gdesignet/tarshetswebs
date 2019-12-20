window.onscroll= function(){
    ocultarWhatsapp=document.querySelector('.btn-whatsapp');

    if ((window.innerHeight + window.pageYOffset) >= this.document.body.offsetHeight){
      
        ocultarWhatsapp.style.display="none";

    }else{
        ocultarWhatsapp.style.display="block";
    }
}