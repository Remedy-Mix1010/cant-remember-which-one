function Adduser(){
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "ko.html";
}