function scrollToMap() {
    var mapElement = document.getElementById("map");
    if (mapElement) {
        var offsetTop = mapElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
