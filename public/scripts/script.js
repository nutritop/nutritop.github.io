(function() {
    let x = document.getElementsByClassName("photo_container");
    let i;
    console.log(x);
    for(i = 0; i < x.length; i++) {
        console.log(x[i]);
        x[i].style.height = x[i].getBoundingClientRect().width;
        console.log(x[i].getBoundingClientRect().width);
    }
})();
