function findAkan() {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var sGender = document.getElementById("gen");
    var genn = sGender.elements["gender"].value;


    if (date <= 0 || date > 31) {
        alert("Please Input a Valid Date");
        return;
        
    }
    else if (month <= 0 || month > 12) {
        alert("Please Input a valid Month")
        return;
    };

    var dd = parseInt(date);
    var mm = parseInt(month);
    var y = year.slice(2, 4);
    var yy = parseInt(y);
    var c = year.slice(0, 2);
    var cc = parseInt(c);
    var dow = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    if (genn === "Female") {
        function feMale() {
            var d = dow.toFixed();
            var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            switch (d) {
                case '2':
                    alert("Your Akan name is: "+female[0]);
                    break;
            
                case '3':
                    alert("Your Akan name is: "+female[1]);
                    break;

                case '4':
                    alert("Your Akan name is: "+female[2]);
                    break;

                case '5':
                    alert("Your Akan name is: "+female[3]);
                    break;

                case '6':
                    alert("Your Akan name is: "+female[4]);
                    break;

                case '0':
                    alert("Your Akan name is: "+female[5]);
                    break;

                case '1':
                    alert("Your Akan name is: "+female[6]);
                    break;
            }
        }
        feMale();
    }
    if (genn === "Male") {
        function male() {
            var d = dow.toFixed();
            var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
            switch (d) {
                case '2':
                    alert("Your Akan name is: "+male[0]);
                    break;

                case '3':
                    alert("Your Akan name is: "+male[1]);
                    break;

                case '4':
                    alert("Your Akan name is: "+male[2]);
                    break;

                case '5':
                    alert("Your Akan name is: "+male[3]);
                    break;

                case '6':
                    alert("Your Akan name is: "+male[4]);
                    break;

                case '0':
                    alert("Your Akan name is: "+male[5]);
                    break;

                case '1':
                    alert("Your Akan name is: "+male[6]);
                    break;
            }
        }

        male();
    }

    if (genn === "") {
        alert("please choose a gender");
    }



}
