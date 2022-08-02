function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["pass"].value;
    if(un=="student" && pw=="1234"){
        window.location.href="dashboard.html";
    }
    else{
        alert("Invalid Username and Password")
    }
}