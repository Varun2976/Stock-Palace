
function validate(){
    let pass = document.getElementById(`Pass`).innerHTML;
    let cpass = document.getElementById(`cPass`).innerHTML;

    if(pass == cpass){
        window.alert(`Registration Completed.`);
    }
    else{
        window.alert(`Registration not Successful.`)
    }
}
