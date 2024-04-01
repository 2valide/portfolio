function showContent(id) {
    // alert("test");
    document.getElementById(id).style.display = "none";
    document.getElementById("cardContentHover" + id .slice(-1)).style.display = "block";

}

function hideContent(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("cardContentHover" + id .slice(-1)).style.display = "none";
}
