function address() {
    // var dateEntered= birthdate.split("-")
    // var birthdate=document.getElementById("bd").value;
    var DD = parseFloat(document.getElementById("bd").value);
    var MM = parseFloat(document.getElementById("bd").value);
    var YY = parseFloat(document.getElementById("bd").value);
    var CC = (YY - 1) / 100 + 1;
    var birthDay =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    document.getElementById("day").innerHTML = Math.floor(birthDay);

    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var gender = document.getElementById("name").value;

    if (gender === "Male"){
        document.getElementById("name").innerHTML =male[Math.floor(birthDay)];
    } 
    else{
        document.getElementById("name").innerHTML =female[Math.floor(birthDay)];
    }
}
