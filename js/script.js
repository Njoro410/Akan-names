function findAkan() {
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var sGender = document.getElementById("gen");
    var genn = sGender.elements["gender"].value;


    if (date <= 0 || date > 31) {
        alert("Put a valid date");
    };
    if (month <= 0 || month > 12) {
        alert("put a valid month")
    };

    var dd = parseInt(date);
    var mm = parseInt(month);
    var y = year.slice(2, 4);
    var yy = parseInt(y);  
    var c = year.slice(0, 2);
    var cc = parseInt(c);
    var dow = ( ( (cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7;

    if (genn === "Female") {
        function feMale() {
            
            alert(dow.toFixed());

        }
    }

   feMale();
    
}
