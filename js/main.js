function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn btn-lg btn-primary btn-block submit-btn")[0];
  var titleResult = document.getElementById("formPrint");
  var imprimeEmail = document.getElementById("inEmail");
  var imprimePass = document.getElementById("inPass");

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Inicia Sesión";
  titleResult.innerHTML = "Datos de formulario";
  imprimeEmail.innerHTML = "El Correo electrónico ingresado es:";
  imprimePass.innerHTML = "La contraseña ingresada es:"
}
//translate();
document.getElementById("signIn").addEventListener("click", function printContainer(){
  document.getElementById("printEmail").innerHTML = document.getElementById("inputEmail").value;
  document.getElementById("printPass").innerHTML = document.getElementById("inputPassword").value;
});
