function findAkan() {
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var sGender = document.getElementById("gen");
    var genn = sGender.elements["gender"].value;
    alert(genn);

    if (date <= 0 || date > 31) {
        alert("Put a valid date");
    };
    if (month <= 0 || month > 12) {
        alert("put a valid month")
    };
    function male() {

    }
}
