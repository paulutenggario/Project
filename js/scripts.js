var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function myFunction() {
  document.getElementById('form').reset();
  alert("Form submitted!");
  return;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

function check(form) {
  if(form.userid.value == "codegirls" && form.pwd.value == "codegirls"){
    return true;
  }
  else {
    alert("Error Password or Username")
    return false;
  }
}

function show1(){
  document.getElementById('createForm').style.display = 'block';
  document.getElementById('signinForm').style.display = 'none';
}

function show2(){
  document.getElementById('createForm').style.display = 'none';
  document.getElementById('signinForm').style.display = 'block';
}

function check(form) {
  if(form.email.value != "" && form.pass.value != "" && form.title.value != "" && form.fname.value != "" && form.lname.value != "") {
    return true;
  }
  else {
    alert("Fill in the * box(es)")
    return false;
  }
}
