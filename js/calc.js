function address() {
    var DD = parseFloat(document.getElementById("bd").value);
    var MM = parseFloat(document.getElementById("bd").value);
    var YY = parseFloat(document.getElementById("bd").value);
    var CC = (YY - 1) / 100 + 1;
    var birthDay =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    document.getElementById("disp").innerHTML = Math.round( birthDay);
}