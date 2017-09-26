window.onload = function() {
  document.getElementById('file').autofocus = false;
}
document.getElementById('autism').ondragstart = function() { return false; };
function myFunction() {
document.getElementById("autism").src="green.png";
}
document.getElementById("green").addEventListener('click', myFunction);
function myFunction1() {
document.getElementById("autism").src="spinner.jpg";
}
document.getElementById("black").addEventListener('click', myFunction1);
function myFunction2() {
document.getElementById("autism").src="yellow.png";
}
document.getElementById("yellow").addEventListener('click', myFunction2);
function myFunction3() {
document.getElementById("autism").src="white.jpg";
}
document.getElementById("white").addEventListener('click', myFunction3);
function myFunction4() {
document.getElementById("autism").src="blue.jpg";
}
document.getElementById("blue").addEventListener('click', myFunction4);
function myFunction4() {
document.getElementById("autism").src="blue.jpg";
}
document.getElementById("blue").addEventListener('click', myFunction4);
function myFunction5() {
document.getElementById("autism").src="red.jpg";
}
document.getElementById("red").addEventListener('click', myFunction5);
function myFunction6() {
document.getElementById("autism").src="gold.jpg";
}
document.getElementById("gold").addEventListener('click', myFunction6);
function myFunction7() {
document.getElementById("autism").src="metal.jpg";
}
document.getElementById("metal").addEventListener('click', myFunction7);
function myFunction8() {
document.getElementById("autism").src="metalblack.jpg";
}
document.getElementById("metalblack").addEventListener('click', myFunction8);
function myFunction9() {
document.getElementById("autism").src="metalblue.jpg";
}
document.getElementById("metalblue").addEventListener('click', myFunction9);
function myFunction10() {
document.getElementById("autism").src="metalpink.jpg";
}
document.getElementById("metalpink").addEventListener('click', myFunction10);
function myFunction11() {
document.getElementById("autism").src="rosegold.jpg";
}
document.getElementById("rosegold").addEventListener('click', myFunction11);
function myFunction12() {
document.getElementById("autism").src="twoyellow.png";
}
document.getElementById("twoyellow").addEventListener('click', myFunction12);
function myFunction13() {
document.getElementById("autism").src="twowood.jpg";
}
document.getElementById("twowood").addEventListener('click', myFunction13);
function myFunction14() {
document.getElementById("autism").src="twowhite.jpg";
}
document.getElementById("twowhite").addEventListener('click', myFunction14);
function myFunction15() {
document.getElementById("autism").src="twobatarang.jpg";
}
document.getElementById("twobatarang").addEventListener('click', myFunction15);
function myFunction16() {
document.getElementById("autism").src="twogold.jpg";
}
document.getElementById("twogold").addEventListener('click', myFunction16);
function myFunction17() {
document.getElementById("autism").src="twoanimal.jpg";
}
document.getElementById("twoanimal").addEventListener('click', myFunction17);
document.getElementById("file").addEventListener("change", function() {
    console.log("change", document.getElementById("file").files[0])

    var reader = new FileReader();

    reader.onload = function (event) {
        document.getElementById("autism").src = event.target.result;
        document.getElementById("autism").style.height = "50%";
        document.getElementById("autism").style.width = "50%";
    };

    reader.readAsDataURL(document.getElementById("file").files[0]);
});
document.getElementById("url").addEventListener("change", function() {
  var url = document.getElementById('url').value;
  document.getElementById('autism').src = url;
  document.getElementById("autism").style.height = "50%";
  document.getElementById("autism").style.width = "50%";
});
