window.addEventListener("load", function() {
    setTimeout(inicializar, 0)

    function inicializar(){
        document.getElementById("slides").innerHTML = document.getElementById("img0").innerHTML
    }

    let slides = document.getElementById("totalImagenes");
    let totalSlides = slides.children.length;
    let index = 0;
    let autoSlide;

    function siguiente() {
        if(index != totalSlides -1){
            index +=1 
        }else{
            index = 0
        }
        posicion();
    }

    function anterior() {
        index = (index - 1 + totalSlides) % totalSlides;
        posicion();
    }

    function posicion() {
        for (let i = 0; i < totalSlides; i++) {
            if(index == i){
                let id = "img"+i
                document.getElementById("slides").innerHTML = document.getElementById(id).innerHTML
            }
        }

        resetTiempo();
    }

    function resetTiempo() {
        clearInterval(autoSlide);
        autoSlide = setInterval(siguiente, 5000);
    }

    resetTiempo();

    document.getElementById("sig").addEventListener("click", siguiente);
    document.getElementById("ant").addEventListener("click", anterior);
});