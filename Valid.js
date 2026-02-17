function validate(event) {
    

    const pass = document.getElementById("Pass").value.trim();
    const cpass = document.getElementById("cPass").value.trim();

    if (pass === "" || cpass === "") {
        alert("Password cannot be empty.");
        return; 
    }

    if (pass !== cpass) {
        alert("Passwords do not match.");
        event.preventDefault();
        return; 
    }

    else{
        alert("Registration Completed.");
        window.location.href = "index.html";
    }
    
}