function irArriba() {
    window.addEventListener('scroll', () => {
        var scroll= document.documentElement.scrollTop;
        console.log(scroll);
    })
}

irArriba();