// JavaScript для открытия и закрытия модального окна
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("img-hover");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < img.length; i++) {
img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
}

span.onclick = function() {
modal.style.display = "none";
}
