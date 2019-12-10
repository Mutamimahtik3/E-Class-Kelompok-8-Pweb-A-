var modal = document.getElementById('modal-wrapper');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function validasisiswa() {
    var x = document.forms["siswa"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!");
        return false;
    }
    var x = document.forms["siswa"]["password"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!");
        return false;
    }
    var x = document.forms["siswa"]["password"].value;
    if (x == "siswa") {
        document.location = "siswa/index.html";
        alert("Selamat datang siswa!!!")
    } else {
        alert("NIP/NIS SALAH");
    }
}


function validasiguru() {
    var x = document.forms["guru"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!");
        return false;
    }
    var x = document.forms["guru"]["password"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!");
        return false;
    }
    var x = document.forms["guru"]["password"].value;
    if (x == "guru") {
        alert("Selamat datang GURU!!!")
        return false;
    } else {
        alert("NIP/NIS SALAH");
    }
}

function validasitugasubah() {
    var x = document.forms["ubah"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["ubah"]["tgs"].value;
    if (x = null || x == "") {
        alert("Isi TUGAS!!!");
        return false;
    }
    var x = document.forms["ubah"]["ket"].value;
    if (x = null || x == "") {
        alert("Isi KETERANGAN!!!")
        return false;
    }
}

function validasitugastambah() {
    var x = document.forms["tambah"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["tambah"]["tgs"].value;
    if (x = null || x == "") {
        alert("Isi TUGAS!!!");
        return false;
    }
    var x = document.forms["tambah"]["ket"].value;
    if (x = null || x == "") {
        alert("Isi KETERANGAN!!!")
        return false;
    }
}

function validasimateri() {
    var x = document.forms["tambah"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["tambah"]["mtr"].value;
    if (x = null || x == "") {
        alert("Isi TUGAS!!!");
        return false;
    }
    var x = document.forms["tambah"]["ket"].value;
    if (x = null || x == "") {
        alert("Isi KETERANGAN!!!")
        return false;
    }
    var x = document.forms["tambah"]["file"].value;
    if (x = null || x == "") {
        alert("Isi FILE!!!")
        return false;
    }
}

function validasisiswa() {
    var x = document.forms["siswa"]["no"].value;
    if (x = null || x == "") {
        alert("Isi NO!!!");
        return false;
    }
    var x = document.forms["siswa"]["nama"].value;
    if (x = null || x == "") {
        alert("Isi NAMA!!!");
        return false;
    }
    var x = document.forms["siswa"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!")
        return false;
    }
    var x = document.forms["siswa"]["pass"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!")
        return false;
    }
}

function validasiprofil() {
    var x = document.forms["profil"]["nama"].value;
    if (x = null || x == "") {
        alert("Isi NAMA!!!");
        return false;
    }
    var x = document.forms["profil"]["nis"].value;
    if (x = null || x == "") {
        alert("Isi NIS/NIP!!!")
        return false;
    }
    var x = document.forms["profil"]["pass"].value;
    if (x = null || x == "") {
        alert("Isi PASSWORD!!!")
        return false;
    }
}