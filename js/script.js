function findAkan() {
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
    var dow = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    if (genn === "Female") {
        function feMale() {
            var d = dow.toFixed();
            var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            switch (d) {
                case '2':
                    alert(female[0]);
                    break;
            
                case '3':
                    alert(female[1]);
                    break;

                case '4':
                    alert(female[2]);
                    break;

                case '5':
                    alert(female[3]);
                    break;

                case '6':
                    alert(female[4]);
                    break;

                case '0':
                    alert(female[5]);
                    break;

                case '1':
                    alert(female[6]);
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
                    alert(male[0]);
                    break;

                case '3':
                    alert(male[1]);
                    break;

                case '4':
                    alert(male[2]);
                    break;

                case '5':
                    alert(male[3]);
                    break;

                case '6':
                    alert(male[4]);
                    break;

                case '0':
                    alert(male[5]);
                    break;

                case '1':
                    alert(male[6]);
                    break;
            }
        }

        male();
    }



}
