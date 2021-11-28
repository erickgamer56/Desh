function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id = ('ID: ' + profile.getId());
    var name = (profile.getName());
    var img = (profile.getImageUrl());
    var email = (profile.getEmail());
    if (email == "ericknovaes56@gmail.com"){
        document.getElementById("loginscreen").style.display="none"
        document.getElementById("logoimg").src = img
        document.getElementById("img2").src = img
        document.getElementById("nomeusuario").innerHTML = name
        document.getElementById("name2").innerHTML = name
        localStorage.setItem("name2", name )
    }else{
        alert("Login Nao Permitido")
    }
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        window.location.href="index.html"
    });
  }
window.addEventListener("load",function(){
    document.getElementById("text1").style.transform="translateX(0)"
    document.getElementById("news").style.transform="translateX(0)"
    if(localStorage.color){
        document.querySelector("body").style.backgroundColor = localStorage.getItem("color")
        document.getElementById("color").value = localStorage.getItem("color")
    }
    setTimeout(() => {
        if(localStorage.namem){
            document.getElementById("nomeusuario").innerHTML = localStorage.getItem("namem")
            document.getElementById("name2").innerHTML = localStorage.getItem("namem")
        }
    }, 2000);
})
document.getElementById("color").addEventListener("input",function(){
    var n1 = "" 
    n1 =document.getElementById("color").value
    document.querySelector("body").style.backgroundColor = n1
    localStorage.setItem("color", n1)
})
document.getElementById("janela").addEventListener("click",function(){
    document.getElementById("perfil").style.display="none"
})
document.getElementById("pera").addEventListener("click",function(){
    document.getElementById("perfil").style.display="flex"
})
document.getElementById("click").addEventListener("click",function(){
    localStorage.setItem("color", "#131313")
    document.querySelector("body").style.backgroundColor ="#131313"
    document.getElementById("color").value = localStorage.getItem("color")
})
document.getElementById("btn1").addEventListener("click",function(){
    var n1 = ""
    n1 = document.getElementById("mudar").value
    if (n1 != ""){
        document.getElementById("nomeusuario").innerHTML = n1
        document.getElementById("name2").innerHTML = n1
        localStorage.setItem("namem",n1)
    }
})
document.getElementById("btn2").addEventListener("click",function(){
    var name = localStorage.getItem("name2")
    document.getElementById("nomeusuario").innerHTML = name
    document.getElementById("name2").innerHTML = name
    localStorage.setItem("name", name)
})